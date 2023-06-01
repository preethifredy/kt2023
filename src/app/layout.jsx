'use client'
//import './globals.css'
import { Inter } from 'next/font/google'
import '@app/styles/scss/App.scss';
import Footer from "./components/Footer/page";

import Header from "./components/Header/page";
import NewsLetter from './components/NewsLetter';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      <body className="pageDetail">
        <Header />
        {children}
        <NewsLetter />
        <Footer />
     <script src="https://code.jquery.com/jquery-3.4.1.min.js"> </script> 
      </body>      
    </html>
  )
}
