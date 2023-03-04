//Next Js
import { Inter } from 'next/font/google'
// Components
import Hero from '@/components/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col w-screen'>
      <Hero/>
    </main>
  )
}
