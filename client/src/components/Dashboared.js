import axios from 'axios'
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboared = () => {

const  navigate = useNavigate()
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/login/sucess", { withCredentials: true })
      // setUserdata(response.data.user)
      console.log("response" , response)
    }

    catch (error) {
      navigate("*")
    }

  }
  useEffect(() => {
    getUser()

  }, [])

  return (
    <div style={{textAlign: "center"}}>
      <h1>Dashboared</h1>
    </div>
  )
}

export default Dashboared