"use client"
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import BootstrapHandle from "./Bootstrap/BootstrapHandle";
import Navbar from './_Components/Navbar/page.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'





export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>


        <Navbar />
        <div className="my-6">
          {children}
        </div>

        <BootstrapHandle />

      </body>
    </html>
  );
}
