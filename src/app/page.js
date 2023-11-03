import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/TCPlogo.jpeg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={800}
          height={450}
          priority
        />
      </div>
    </main>
  )
}
