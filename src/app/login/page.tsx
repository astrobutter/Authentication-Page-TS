"use client"
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login =  () => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            toast.success("Login success");
            const res = await axios.get('/api/users/userdata');
            router.push(`/profile/${res.data.data._id}`);
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        console.log(user)
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return(
        <div className="main-container">
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr />
            <div className="sub-container">
                <label htmlFor="email">email</label>
                <input className=""
                    id="email"
                    type="text"
                    name='email'
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder="email"
                />
                <label htmlFor="password">password</label>
                <input className=""
                    id="password"
                    type="password"
                    name="password"
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    placeholder="password"
                />
                <button onClick={onLogin} className="">{buttonDisabled ? "No signup" : "Login here"}
                </button>
                <Link href="/signup">Visit Signup page</Link>
            </div>
        </div>
    )
}

export default Login;