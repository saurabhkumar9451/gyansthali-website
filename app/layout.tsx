import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Toaster } from '@/components/ui/sonner'
import LayoutWrapper from '@/components/layout-wrapper'

const inter = Inter({ variable: '--font-geist-sans', subsets: ['latin'] })
const poppins = Poppins({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Apex Academy — JEE, NEET & Foundation Coaching',
  description:
    'Apex Academy is a premier coaching institute helping students crack JEE, NEET and Foundation exams with expert faculty, proven results and a modern learning experience.',
  generator: 'v0.app',
  keywords: [
    'JEE coaching',
    'NEET coaching',
    'Foundation classes',
    'IIT JEE',
    'medical entrance',
    'Apex Academy',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} bg-background`}
    >
<body className="font-sans antialiased bg-background text-foreground">
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
<div className="flex min-h-screen flex-col bg-background text-foreground">
               <LayoutWrapper>
  {children}
</LayoutWrapper>

          </div>
          <WhatsAppButton />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
