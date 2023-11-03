import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
	                   src="/TCPlogo.jpeg"
	                   alt="Vercel Logo"
               className={styles.vercelLogo}
               width={100}
               height={24}
               priority
               />
      </div>
    </main>
  )
}
