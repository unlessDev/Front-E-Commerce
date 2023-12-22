import { Urbanist } from 'next/font/google'

import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import Footer from '@/components/footer'
import ToastProvider from '@/providers/toast-provider'

import './globals.css'


const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'Development by unlessDev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
