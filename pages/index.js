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
        <p className="this my page what you looking">
        </p>
      </main>

      <Footer />
    </div>
  )
}
