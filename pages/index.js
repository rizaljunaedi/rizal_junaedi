import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rizal Junaedi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Selamat Datang di WebsiteQ
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
        </p>
        
      </main>

      <footer className={styles.footer}>
        <h2>Created By rizaljunaedi</h2>
      </footer>
    </div>
  )
}
