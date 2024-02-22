import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import ASide from "@/components/home/ASide";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Catalog",
  description: "Next.js-Book-Catalog-Web-App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
        {/* <Header/> */}
          {/* <ASide /> */}

        </div>
        <div className="">
          {/* <ASide /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
