import React, { useEffect, useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import axios from "axios"



const Header = () => {

  const [userdata, setUserdata] = useState({})
  console.log("response", userdata)


  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/login/sucess", { withCredentials: true })
      setUserdata(response.data.user)

    }

    catch (error) {
      console.log("error", error)
    }

  }
////logout//
const Logout = ()=>{
  window.open("http://localhost:4000/logout" , "_self")
}


  useEffect(() => {
    getUser()

  }, [])
  return (
    <>
      <header>
        <nav>
          <div className='left'>
            <h1>Social Login</h1>
          </div>
          <div className='right'>

            <ul>
              <li>
                <NavLink to="/">
                  home
                </NavLink>
              </li>
              {

                Object?.keys(userdata)?.length > 0 ? (
                  <>
                    <li style={{ color: "black", fontWeight: "bold" }}>{userdata.displayName}</li>
                    <li>
                      <NavLink to="/Dashboard">
                        Dashboard
                      </NavLink>
                    </li>
                    <li onClick={Logout}>Logout</li>

                  </>
                ) : <li><NavLink to="/Login">
                  Login
                </NavLink></li>


              }




            </ul>

          </div>
        </nav>

      </header>


    </>


  )
}
export default Header


// import React, { useEffect, useState } from 'react'
// import './Header.css'
// import axios from 'axios'
// import {NavLink }from 'react-router-dom'

// const Header = () => {
// const [userdata , setUserdata] = useState({})
// console.log("response" , userdata);


// const getUser = async()=>{
//   try {
//     const response = await axios.get("http://localhost:3000/login/sucess" , {withCredentials: true})
//     setUserdata(response.data.user)
//   } catch (error) {
    
//   }
// } 


// const logout = ()=>{
// window.open("http://localhost:3000/logout" , "_self")
// }

// useEffect(()=>{
//   getUser()
// },[])

//   return (
//    <>
//    <header>
//     <nav>
//         <div className='left'>
// <h1>Hansha Jangir</h1>
//         </div>
//         <div className='right'>
//         <ul>
//             <li><NavLink to='/'>Home</NavLink></li>
//             {
//               Object?.keys(userdata)?.length > 0 ? (
//                 <>
//                 <li style={{color:"black" , fontWeight:"bold"}}>{userdata?.displayName}</li>
//             <li>
//               <NavLink to='/dashboard'>
//                 Dashboard
//               </NavLink>
//               </li>
//               <li onClick={logout}>Logout</li>
//               <li>
//             <li><img src={userdata?.image} style={{width: "50px", borderRadius:"50%"}}></img></li>

//               </li>
//                 </>
//               ): 
//             <li><NavLink to='/login'>Login</NavLink></li>

//             }

//         </ul>
//         </div>
//     </nav>
//    </header>
//    </>
//   )
// }

// export default Header