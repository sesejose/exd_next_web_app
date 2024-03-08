import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Epilogue } from "next/font/google";
//import "./globals.css";
import general from "../app/styles/general.css"
import desktop from "../app/styles/desktop.css"
import form from "../app/styles/form.css"
import Nav from "../app/components/Nav";
import Footer from "../app/components/Footer";
//import ChatSupport from "./ChatSupport";

// fetch('https://exd.dk/wp-json/wp/v2/posts', { cache: 'no-store' })

// All the pages' contents would render in {children}

const inter = Inter({ subsets: ["latin"] });

const plus = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--body-font'
});

const epilogue = Epilogue({ 
  subsets: ["latin"], 
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'], 
  style: ['normal', 'italic'], 
  variable: '--headlines' });

export const metadata = {
  title: "EXD",
  description: "Experience Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} ${plus.variable}`}>
        <Nav />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
