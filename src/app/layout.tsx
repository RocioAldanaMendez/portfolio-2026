import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "System Engineer",
    template: "%s",
  },
  description:
    "Portfolio of Rocio Mendez. Systems Engineer focused on AI, backend architecture, and cloud infrastructure.",
  icons: {
    icon: "/images/branding/icono-dp.png?v=3",
    shortcut: "/images/branding/icono-dp.png?v=3",
    apple: "/images/branding/icono-dp.png?v=3",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.addEventListener('DOMContentLoaded',function(){document.body.dataset.theme=t;});}}catch(e){}",
          }}
        />
      </head>
      <body className={`${archivo.variable} ${bricolageGrotesque.variable}`}>
        {children}
      </body>
    </html>
  );
}
