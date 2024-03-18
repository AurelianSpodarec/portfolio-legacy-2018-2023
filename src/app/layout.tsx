import { Inter } from 'next/font/google'

import Header from './_components/Header'
import Footer from './_components/Footer'

import './../styles/styles.scss'

import { Montserrat, Lato, Roboto } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
})

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-lato"
})

const roboto = Roboto({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-roboto"
})

export const metadata = {
  title: 'Home = Aurelian Spodarec',
  description: 'Aurelian Spodarec 2018 personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${lato.className} ${roboto.className}`}>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
