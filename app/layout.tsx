import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar'

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
})

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
})

const poppins = Poppins({
   variable: '--font-poppins',
   subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
   title: 'Learn GSAP & Three JS',
   description: 'Belajar GSAP & Three JS',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${poppins.variable} ${poppins.className} antialiased`}>
            <SidebarProvider>
               <AppSidebar />
               <main>{children}</main>
            </SidebarProvider>
         </body>
      </html>
   )
}
