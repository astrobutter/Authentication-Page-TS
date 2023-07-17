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
            <h2>User Profile</h2>
            <div className="user-data-container">
                <div className="data-row">
                    <label>UserName: </label>
                    <span className="data-section">{user.username}</span>
                </div>
                <div className="data-row">
                    <label>E-Mail: </label>
                    <span className="data-section">{user.username}</span>
                </div>
                <div className="data-row">
                    <label>User Id: </label>
                    <span className="data-section">{user.id}</span>
                </div>
                    <span className="data-section">{user.id}</span>

            </div>
            <button onClick={logout} className=" ">Logout</button>

            </div>
    )
}