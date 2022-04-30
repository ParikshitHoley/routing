import React, { createContext, useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [homeButton, setHomeButton] = useState(true);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/");
      setHomeButton(false);
    }
    
},[token])

  const handleChange = (event) => {
    let name = event.target.name;
    setFormData({...formData, [name]: event.target.value });
  };
  // const toogleAuth = () => {
  //     setIsAuth(!isAuth);
  // }

  const login = async (value) => {
    try {
      let response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      let data = await response.json();
     setToken(data.token)
    } catch (error) {
      console.log("error:--", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData);
    setFormData({ email: "", password: "" });
    navigate("/login");
  };
  const logout = () => {
    setToken("");
    setHomeButton(true);
  }

  return (
    <AuthContext.Provider
      value={{
        handleSubmit,
        handleChange,
        formData,
        homeButton,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
