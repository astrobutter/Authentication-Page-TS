"use client"
import styles from './page.module.css'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const SignUp = () => {  router.push('/signup')  }
  const LogIn = () => {   router.push('/login')   }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started &nbsp;
          <br /> <br />
          <button onClick={SignUp}>Sign Up</button>
          <br /> <br />
          <button onClick={LogIn}>Login</button>
        </p>
      </div>
    </main>
  )
}
