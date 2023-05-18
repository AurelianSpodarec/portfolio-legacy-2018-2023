import { Inter } from 'next/font/google'

import Header from './_components/Header'
import Footer from './_components/Footer'

import './../styles/styles.scss'

const inter = Inter({ subsets: ['latin'] })

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
            <body className={inter.className}>

                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
