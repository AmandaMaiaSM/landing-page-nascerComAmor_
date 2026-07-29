import type { Metadata, Viewport } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import "@/styles/global.css";
import "@/styles/layout.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nascercomamor.com.br";

const description =
  "Cuidado especializado em todas as fases da maternidade: gestação, parto e pós-parto, com acolhimento, saúde e bem-estar para mamães e bebês.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nascer com Amor",
    template: "%s | Nascer com Amor",
  },
  description,
  openGraph: {
    title: "Nascer com Amor",
    description,
    url: siteUrl,
    siteName: "Nascer com Amor",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nascer com Amor",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="layout-inicio">
          <Header />
          <main>
            {children}
            <Footer />
          </main>
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
