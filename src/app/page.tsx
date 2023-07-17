"use client"
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const SignUp = () => {  router.push('/signup')  }
  const LogIn = () => {   router.push('/login')   }

  return (
      <div className="description">
        <p>Get started &nbsp;</p>
        <div className='index-buttons'>
          <button onClick={SignUp}>Sign Up</button>
          <button onClick={LogIn}>Login</button>
        </div>
      </div>
  )
}
