"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/signup", user);
      toast.success("Successfully Signed Up");
      // console.log("Signup success", response.data);
      router.push("/login");
    } 
    catch (error: any) {
      // console.log("Signup failed", error)
      toast.error(error.message);
    } 
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // console.log(user);
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    }
    else {setButtonDisabled(true);}
  }, [user]);

  return (
      <div className='main-container'>
        <div className='sub-container'>          
          <h1>{loading ? "Processing" : "Signup"}</h1>
          <hr />

          <label htmlFor="username">username</label>
          <input className=""
              id="username"
              type="text"
              name="username"
              onChange={(e) => setUser({...user, username: e.target.value})}
              placeholder="username"
              autoFocus
          />

          <label htmlFor="email">email</label>
          <input className=""
              id="email"
              type="text"
              name='email'
              onChange={(e) => setUser({...user, email: e.target.value})}
              placeholder="email"
              autoFocus
          />

          <label htmlFor="password">password</label>
          <input className=""
              id="password"
              type="password"
              name='password'
              onChange={(e) => setUser({...user, password: e.target.value})}
              placeholder="password"
              autoFocus
              />
          <button onClick={onSignup} className="">
            {buttonDisabled ? "No signup" : "Signup"}
          </button>
          <Link href="/login">Visit login page</Link>
        </div>
      </div>
  )
}
