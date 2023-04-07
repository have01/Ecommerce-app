"use client"
import Login from "@features/auth/login";
import Meta from "../../../components/meta";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const Index = () => {
 const router = useRouter();
 
    const cookieData = Cookies.get("userName");
    if (cookieData) {
    // router.push("/")
    } else {
      return (
        <Meta title="Login" description="Login page">
           <Login />
      </Meta>
      )     
      }  
};

export default Index;
