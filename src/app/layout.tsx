import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "@uploadthing/react/styles.css";
import RecoilContextProvider from "./recoilContextProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteWave",
  description: "Handwritten Notes ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="bottom-center" />
          <RecoilContextProvider>{children}</RecoilContextProvider>
          {/* <Footer /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
