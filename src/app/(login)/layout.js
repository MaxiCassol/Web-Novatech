import { Rubik } from "next/font/google";
import "../globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Novatech app",
  description: "Novatech app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}
