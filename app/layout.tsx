import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Stay updated with real-time weather forecasts, temperature, humidity, air quality, and more.",
  keywords: ["Weather App", "Weather Forecast", "Real-Time Weather", "Local Weather"],
  authors: [{ name: "KHALID", url: "https://khalid-tourhzaoui.vercel.app/" }],
  viewport: "width=device-width, initial-scale=1", // Ensures proper scaling
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/thunder-storm-day.png" />
      </head>
      <body className={inter.className}>
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
