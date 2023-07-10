import Image from 'next/image'
import styles from './page.module.scss'
import Main from '@/components/main/Main'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
      <Main>
      <Image src='/home.png' alt='yo' width={400} height={500} />
      <h1>Hello world</h1>
      <Footer/>
      </Main>
  )
}
