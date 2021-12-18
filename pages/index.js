import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="NURUL SYAFIQA" />
        <p className="description">
          What you looking this my page.
     <img src="/logosyafiqa.png" alt="NURULSYAFIQA">
        </p>
      </main>

      <Footer />
    </div>
  )
}
