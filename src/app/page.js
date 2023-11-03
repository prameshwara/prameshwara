import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1><Image
	                   src="/TCPlogo.jpg"
	                   alt="Vercel Logo"
               className={styles.vercelLogo}
               width={100}
               height={24}
               priority
               /></h1>
      </div>
    </main>
  )
}
