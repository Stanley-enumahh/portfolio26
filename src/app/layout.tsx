import type { Metadata, Viewport } from "next";
import { Unbounded, Azeret_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "500", "800"],
});

const azeret = Azeret_Mono({
  variable: "--font-azeret",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s — ${site.name}` },
  description: site.intro,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description: site.intro,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.intro,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
  ],
};

// Runs before paint so a saved light preference never flashes dark first.
// The "js" class lets scroll-reveal hide content only when JS is available.
const themeScript = `document.documentElement.classList.add("js");try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${unbounded.variable} ${azeret.variable} h-full scroll-smooth antialiased motion-reduce:scroll-auto`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full font-sans font-light">{children}</body>
    </html>
  );
}
