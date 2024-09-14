import type { Metadata } from "next";
import { Sacramento, Sofia, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const dmSans = DM_Sans({
  weight: [
    "100",
    "200",
    "400",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  style:["italic","normal"],
  variable: "--font-dmSans",
  display:"swap",
});

export const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-sacramento",
  display:"swap",
})
export const sofia = Sofia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Solomon Owusu-Ansah | Fullstack Software Developer",
  description: "Fullstack Software Developer | Data Scientist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sofia.variable}>
      <head>
        <link rel="shortcut icon" href="mylogo.svg" type="image/svg" />
      </head>
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
