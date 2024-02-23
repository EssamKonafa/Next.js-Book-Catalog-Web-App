import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import ASide from "@/components/home/ASide";
import { TheProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Catalog",
  description: "Next.js-Book-Catalog-Web-App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheProvider>

          <div className="flex ">

            <span className="w-full">

              <Header />

              <span className="flex">

                <ASide />

                <span className="w-full">
                  {children}
                </span>

              </span>

            </span>

          </div>
        </TheProvider>
      </body>
    </html>
  );
}
