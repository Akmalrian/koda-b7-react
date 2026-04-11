import { useState, useEffect } from "react";
import LoginContext from "./context";
import { useNavigate } from "react-router";

function LoginProvider({ children }) {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const updateProfile = (newData) => {
  const updatedUser = { ...user, ...newData };

  setUser(updatedUser);
  localStorage.setItem("user", JSON.stringify(updatedUser));
};

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);

        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);

        localStorage.removeItem("user");

        navigate("/");
    };

    const editProfile = () => {
        navigate("/edit-profile");
    };

    return (
        <LoginContext.Provider value={{ user, login, logout, editProfile,updateProfile }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;