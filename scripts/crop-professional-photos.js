/**
 * Script único (não faz parte do build do site) que usa detecção facial
 * local (face-api.js) para gerar, a partir de cada foto em
 * src/assets/profissionais/, um recorte padronizado 4:5 centralizado no
 * rosto da pessoa. Sobrescreve os arquivos originais (há backup em
 * scripts/originals-backup/).
 *
 * Uso: node scripts/crop-professional-photos.js
 */

const path = require("path");
const fs = require("fs");
const { Canvas, Image, ImageData, loadImage } = require("canvas");
const faceapi = require("face-api.js");
const sharp = require("sharp");

faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const PHOTOS_DIR = path.join(__dirname, "..", "src", "assets", "profissionais");
const MODELS_DIR = path.join(__dirname, "models");

const OUTPUT_RATIO = 4 / 5; // width / height
const OUTPUT_HEIGHT = 800;
const OUTPUT_WIDTH = Math.round(OUTPUT_HEIGHT * OUTPUT_RATIO);

// Quantas vezes a altura do rosto detectado vira a altura do recorte
// (define o "zoom": inclui cabeça + ombros).
const CROP_HEIGHT_FACTOR = 3.6;
// Fração do crop acima do topo da caixa do rosto (espaço para cabelo/testa).
const TOP_PADDING_FACTOR = 0.32;

function computeCropBox(faceBox, imgWidth, imgHeight) {
  let cropHeight = faceBox.height * CROP_HEIGHT_FACTOR;
  let cropWidth = cropHeight * OUTPUT_RATIO;

  const faceCenterX = faceBox.x + faceBox.width / 2;
  let cropTop = faceBox.y - cropHeight * TOP_PADDING_FACTOR;
  let cropLeft = faceCenterX - cropWidth / 2;

  // Clampa para não ultrapassar os limites da imagem original, mantendo a proporção 4:5.
  if (cropWidth > imgWidth) {
    cropWidth = imgWidth;
    cropHeight = cropWidth / OUTPUT_RATIO;
  }
  if (cropHeight > imgHeight) {
    cropHeight = imgHeight;
    cropWidth = cropHeight * OUTPUT_RATIO;
  }

  cropLeft = Math.min(Math.max(cropLeft, 0), imgWidth - cropWidth);
  cropTop = Math.min(Math.max(cropTop, 0), imgHeight - cropHeight);

  return {
    left: Math.round(cropLeft),
    top: Math.round(cropTop),
    width: Math.round(cropWidth),
    height: Math.round(cropHeight),
  };
}

function fallbackCropBox(imgWidth, imgHeight) {
  // Sem rosto detectado: recorte centralizado horizontalmente, começando perto do topo.
  let cropHeight = imgHeight;
  let cropWidth = cropHeight * OUTPUT_RATIO;
  if (cropWidth > imgWidth) {
    cropWidth = imgWidth;
    cropHeight = cropWidth / OUTPUT_RATIO;
  }
  return {
    left: Math.round((imgWidth - cropWidth) / 2),
    top: 0,
    width: Math.round(cropWidth),
    height: Math.round(cropHeight),
  };
}

async function run() {
  console.log("Carregando modelo tiny_face_detector...");
  await faceapi.nets.tinyFaceDetector.loadFromDisk(MODELS_DIR);

  const files = fs
    .readdirSync(PHOTOS_DIR)
    .filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of files) {
    const filePath = path.join(PHOTOS_DIR, file);
    const img = await loadImage(filePath);

    const detection = await faceapi.detectSingleFace(
      img,
      new faceapi.TinyFaceDetectorOptions()
    );

    let box;
    if (detection) {
      box = computeCropBox(detection.box, img.width, img.height);
      console.log(`✓ ${file}: rosto detectado, recortando ao redor dele.`);
    } else {
      box = fallbackCropBox(img.width, img.height);
      console.warn(
        `⚠ ${file}: nenhum rosto detectado — usando recorte padrão (revisar manualmente).`
      );
    }

    // Processa para um buffer em memória antes de sobrescrever o arquivo,
    // evitando ler e escrever o mesmo caminho simultaneamente via stream.
    const outputBuffer = await sharp(filePath)
      .extract(box)
      .resize(OUTPUT_WIDTH, OUTPUT_HEIGHT)
      .toBuffer();

    // Grava num arquivo temporário e renomeia por cima do original --
    // mais robusto que sobrescrever direto em pastas sincronizadas pelo OneDrive.
    const tmpPath = `${filePath}.tmp`;
    await fs.promises.writeFile(tmpPath, outputBuffer);
    await fs.promises.rename(tmpPath, filePath);
  }

  console.log("\nConcluído.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
