import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import BootstrapClient from "@/utils/bootstrap/bootstrapClient";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <BootstrapClient/>
      <Header/>
      </body>
    </html>
  );
}

