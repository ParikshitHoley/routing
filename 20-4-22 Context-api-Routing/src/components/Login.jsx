import React from 'react'
import { AuthContext } from "../context/AuthContextProvider.jsx";
import  styles  from "./Login.module.css";
const Login = () => {
  const { handleSubmit,handleChange, formData } = React.useContext(AuthContext)

  return (
    <div className={styles.login}>
       <form action="" onSubmit={handleSubmit}>
        <label htmlFor="userame">Enter Email</label><br />
        <input type="text" name="email" value={formData.email} required onChange={handleChange} /><br />
        <label htmlFor="password">Enter Password</label><br />
        <input type="password" name="password" value={formData.password} required onChange={handleChange} /><br />
        <div>
        <button>Login</button>
        </div>
    
         </form>
         <span>Email:eve.holt@reqres.in</span>
      <span>Password:pistol</span>
    </div>
  )
}

export default Login;