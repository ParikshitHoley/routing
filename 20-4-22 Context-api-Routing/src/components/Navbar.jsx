import React from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { homeButton , logout} = React.useContext(AuthContext)

  return (
    <div className={styles.navbar}>
     <h1>Amazon</h1>
      {homeButton ? null : <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default Navbar;