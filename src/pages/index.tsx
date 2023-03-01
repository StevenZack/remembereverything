import HeaderBar from '@/components/headerbar'
import { Inter } from 'next/font/google'
import { Stack, Button } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HeaderBar/>
    </div>
  )
}
