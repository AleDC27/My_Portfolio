import Image from 'next/image'
import Main from '@/components/main/Main'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
      <Main>
      {/* <Image src='/home.png' alt='yo' width={300} height={400} /> */}
      <h1>I'm Alejandro, <br/>full stack developer.</h1>
      </Main>
      <Footer/>
    </>
  )
}
