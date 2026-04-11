import { useContext,useState } from "react";
import { useNavigate } from "react-router";
import LoginContext from "../authContext/context";

export function Login() {
    const navigate = useNavigate(); 
    const { login } = useContext(LoginContext);
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ name : username })
        navigate("/")
    }

    return (
        <section className="h-[60vh]">
            <section className="h-10">
                <form onSubmit={handleSubmit} className="focus-within: border-blue-400 border-2 rounded-2xl px-2 w-80 ml-20 py-2 mt-30" action="">
                    <label htmlFor="username" className="text-black rounded-l-md p-1">Name :</label>
                    <input 
                    placeholder="enter your name"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className="border-b border-b-black" 
                    type="text" />
                    <button className="rounded-md ml-3 bg-red-500 text-black p-1">Login</button>
                </form>
            </section>
        </section>
    )
}

