import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Museo de Arte de Ponce",
  description: "Honoring the Museo de Arte de Ponce",
};

const gambarino = localFont({
  src: "../public/assets/fonts/Gambarino-Regular.otf",
  display: "swap",
  variable: "--font-gambarino",
});

const switzer = localFont({
  src: "../public/assets/fonts/Switzer-Light.otf",
  display: "swap",
  variable: "--font-switzer",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gambarino.variable} ${switzer.variable}`}>
        {children}
      </body>
    </html>
  );
}
