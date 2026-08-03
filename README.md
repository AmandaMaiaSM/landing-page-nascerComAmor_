# Nascer com Amor — Landing Page

Landing page em [Next.js](https://nextjs.org) para a **Nascer com Amor**, com cuidado especializado em todas as fases da maternidade: gestação, parto e pós-parto, com acolhimento, saúde e bem-estar para mamães e bebês.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev) + TypeScript
- [lucide-react](https://lucide.dev) e [react-icons](https://react-icons.github.io/react-icons/) para ícones

> ⚠️ Este projeto usa uma versão do Next.js com mudanças que quebram compatibilidade com o que ferramentas e modelos de IA costumam "saber" por padrão. Antes de programar, veja os avisos em [`AGENTS.md`](./AGENTS.md).

## Estrutura do projeto

```
src/
  app/         # rotas do App Router (page, layout, sitemap, robots, metadata)
  components/  # peças reutilizáveis: Header, Footer, BackToTop, HeroCarrossel
  sections/    # seções da home: Quem Somos, Serviços, Profissionais, Depoimentos, FAQ
  data/        # dados estáticos (ex.: services.tsx)
  assets/      # imagens
  styles/      # CSS global, layout, reset e variáveis
scripts/       # utilitários que não fazem parte do build (ver abaixo)
```

## Seções da página

A home (`src/app/page.tsx`) é composta por:

1. **Início** — Hero com carrossel
2. **Quem Somos**
3. **Serviços**
4. **Profissionais**
5. **Depoimentos**
6. **FAQ**

## Como rodar localmente

```bash
npm install
cp .env.example .env.local   # ajuste NEXT_PUBLIC_SITE_URL se necessário
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Outros comandos disponíveis:

```bash
npm run build   # build de produção
npm run start   # serve o build de produção
npm run lint    # roda o ESLint
```

### Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL de produção do site, usada em metadata (Open Graph), `sitemap.xml` e `robots.txt`. |

## Script utilitário: recorte de fotos da equipe

`scripts/crop-professional-photos.js` não faz parte do build. Ele usa detecção facial local (`face-api.js`) para gerar, a partir de cada foto em `src/assets/profissionais/`, um recorte padronizado 4:5 centralizado no rosto da pessoa. Sobrescreve os arquivos originais — há backup em `scripts/originals-backup/`.

```bash
node scripts/crop-professional-photos.js
```

## Deploy

O deploy pode ser feito na [Vercel](https://vercel.com/new) ou qualquer outra plataforma compatível com Next.js. Veja a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
