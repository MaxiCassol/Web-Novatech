import { Rubik } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import "../globals.css";
import Footer from "@/components/footer/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Novatech app",
  description: "Novatech app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
