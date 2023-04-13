
import { useEffect, useState } from "react"
import axios from "axios"
import Profile from "../../features/Profile"

// export async function getServerSideProps(req) {

// let data;
//   try {
//     const response = await fetch("https://auth-task-app.up.railway.app/api/users/v1/me",{
//   headers: {Authentication: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYTZmNjJiMzRlODE4ZTA3MTM1YzAiLCJpYXQiOjE2ODA3NzU2Mjl9.MpOXhnZn7pCI1lKLKJqW8lYFpdDzOPnJu0MxB4x1Uq0`}
// });
//     data = await response.json();
//     console.log(data);
//   } catch (error) {}
//   return {
//       props: {
//     data:"data"
// }
//   };
// }

const Index = () => {
  useEffect(() => {
    const tokenString = sessionStorage.getItem("token")
    axios
      .get("https://auth-task-app.up.railway.app/api/users/v1/me", {
        headers: { Authorization: `Bearer ${tokenString}` },
      })
      .then((response) => { })
      .catch((error) => { })
  }, [])

  return (
    <Profile />
  )


}

export default Index
