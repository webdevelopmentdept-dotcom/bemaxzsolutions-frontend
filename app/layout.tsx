import "./globals.css";
import { outfit } from "./fonts";

export const metadata = {
  title: "Bemaxz",
  description: "Modern websites & digital products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}