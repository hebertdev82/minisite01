import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rixxer - Modelo Hamburgueria</title>
        <meta name="description" content="Rixxer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center'>

        <section className='flex top-bar'>
          <span>Aproveite nossa promoção da semana: Combo de 2 hamburgueres, entrega grátis!</span>

        </section>

        <section className='logo py-8'>
          <Image src="/seu-logo-aqui.png" alt="Seu Logo Aqui" width="0" height="0" sizes="100vw" className="w-40 h-auto"/>
        </section>

        <section className='hamburguer'>
          <Image src="/hamburguer.png" alt="Hamburguer" width={800} height={306} />
        </section>
        
        
      </main>

      <footer className='flex flex-col items-center fixed bottom-0'>
        <a
          href="https://rixxer.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/rixxer-white.png" alt="Rixxer" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
