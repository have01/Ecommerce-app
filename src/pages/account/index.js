import { useEffect, useState } from "react"
import axios from "axios"
import Profile from "../../features/Profile"
import { useSelector } from "react-redux"

const Index = () => {
  const profileData = useSelector((state) => state?.profile?.profile)
  const tokenString = profileData?.token
  const [userProfile, setUserProfile] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    axios
      .get("https://auth-task-app.up.railway.app/api/users/v1/me", {
        headers: { Authorization: `Bearer ${tokenString}` },
      })
      .then((response) => {
        setUserProfile(response.data)
        setLoading(true)
      })
      .catch((error) => { })
  })

  return <Profile userProfile={userProfile} loading={loading} />
}
export default Index
