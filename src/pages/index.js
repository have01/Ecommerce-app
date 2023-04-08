"use client"
import axios from "axios"
import { useEffect } from "react"
import Carousel from "../components/Carousel"

export default function Example() {
  // useEffect(() => {
  //   const tokenString = sessionStorage.getItem('token')
  //   axios.get('https://auth-task-app.up.railway.app/api/users/v1/me', {
  //     headers: { Authorization: `Bearer ${tokenString}` }
  //   }).then((response) => console.log(response)).catch((error) => console.log(error));

  // }, [])

  return (
    <>
      <div className="container mx-auto  flex mt-2   justify-center items-center ">
        <Carousel />
      </div>
    </>
  )
}
