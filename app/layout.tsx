import "./globals.css";
import { inter } from "./fonts";


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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}