import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Asia and Mika Wedding',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="robots" content="noindex" />
            </head>
            <body className={inter.className}>
                <header>Header</header>
                <main>{children}</main>
                <footer>Footer</footer>
            </body>
        </html>
    )
}