import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import LoginContext from "../authContext/context";


export function EditProfile() {
    const { user, updateProfile } = useContext(LoginContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState(user?.name || "");
    const [avatar, setAvatar] = useState(
        user?.photo || "/image/blank-photo.jpg"
    );

    const avatars = [
        "/image/photo1.jpg",
        "/image/photo2.jpg",
        "/image/photo3.jpg",
        "/image/photo4.jpg",
        "/image/photo5.jpg",
        "/image/photo6.jpg",
        "/image/photo7.jpg",
        "/image/photo8.jpg"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        updateProfile({
            name: username,
            photo: avatar,
        });

        navigate("/");
    };

    return (
        <section className="flex flex-col items-center mt-20 gap-5">
            <h1 className="text-xl font-bold">Edit Profile</h1>

            <img src={avatar} className="w-20 h-20 rounded-full" />

            <section className="flex gap-3">
                {avatars.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        onClick={() => setAvatar(img)}
                        className={`w-12 h-12 rounded-full cursor-pointer border-2 ${avatar === img ? "border-blue-500" : "border-transparent"
                            }`}
                    />
                ))}
            </section>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 h-50">
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Enter name"
                />

                <button className="bg-blue-500  text-white p-2 rounded">
                    Save
                </button>
            </form>
        </section>
    );
}