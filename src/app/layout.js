import { Inter } from 'next/font/google'
import './page.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Elena's Funny Fill-In`,
  description: `Elena's Funny Fill-In`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="App">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
