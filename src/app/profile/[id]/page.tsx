"use client"
import axios from "axios"
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";
import React,{ useEffect, useState } from "react";
export default function UserProfile({params}: any) {
    const router = useRouter()
    const [user, setUser] = React.useState({
        id: "",
        username: "",
        email: "",
    })
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/userdata')
        setUser({id: res.data.data._id, username:res.data.data.username, email: res.data.data.email})
    }
    getUserDetails()
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    return (
        <div className="main-container">
            <p className="user-container">
            <span className="">{user.username}</span>
            </p>
            <br/>
            <button onClick={logout} className=" ">Logout</button>

            </div>
    )
}