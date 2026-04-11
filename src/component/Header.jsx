import { useContext } from "react";
import { NavLink } from "react-router";
import LoginContext from "../authContext/context";

function Header() {
  const { user, logout, editProfile } = useContext(LoginContext);

  return (
    <header className="bg-red-600 text-white top-0">
      <nav className="container w-full px-6 py-4 flex justify-center items-center">
        <ul className="flex gap-8">
          <li className="text-lg font-bold ">
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                return isActive
                  ? "text-blue-800"
                  : "text-black hover:text-blue-400";
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              to={"/increase-decrease"}
              className={({ isActive }) => {
                return isActive
                  ? "text-blue-800"
                  : "text-black hover:text-blue-400";
              }}
            >
              Increase & Decrease
            </NavLink>
          </li>
          <li className="text-lg font-bold">
            <NavLink
              to={"/product"}
              className={({ isActive }) => {
                return isActive
                  ? "text-blue-800"
                  : "text-black hover:text-blue-400";
              }}
            >
              Form Product
            </NavLink>
          </li>
          <li className="text-lg font-bold">
            <NavLink
              to={"/pokemon"}
              className={({ isActive }) => {
                return isActive
                  ? "text-blue-800"
                  : "text-black hover:text-blue-400";
              }}
            >
              List Pokemon
            </NavLink>
          </li>
          <li className="text-lg font-bold">
            <NavLink
              to={"/review"}
              className={({ isActive }) => {
                return isActive
                  ? "text-blue-800"
                  : "text-black hover:text-blue-400";
              }}
            >
              Review
            </NavLink>
          </li>
          <li className="text-lg font-bold">
            <NavLink
              to={"/characters"}
              className={({ isActive }) => {
                return isActive
                  ? "text-blue-800"
                  : "text-black hover:text-blue-400";
              }}
            >
              Rick And Morty
            </NavLink>
          </li>
          <li className="text-lg font-bold">
            <NavLink
              to={"/usefetch"}
              className={({ isActive }) => {
                return isActive
                  ? "text-blue-800"
                  : "text-black hover:text-blue-400";
              }}
            >
              UseFetch
            </NavLink>
          </li>
          <li>
            {user ? (
              <section className="flex items-center gap-2">
                <p className="text-blue-400 font-bold">{user.name}</p>
                <img
                  className="w-10 rounded-full"
                  src={user?.photo || "/image/blank-photo.jpg"}
                  alt="blank-photo"
                />
                <select
                  className="bg-blue-400"
                  onChange={(e) => {
                    if (e.target.value === "profile") editProfile();
                    if (e.target.value === "logout") logout();
                  }}
                >
                  <option disabled selected hidden>Pilih Menu</option>
                  <option value="profile">Profile</option>
                  <option value="logout">Logout</option>
                </select>
              </section>
            ) : (
              <NavLink
                className="border ml-2 font-bold text-white bg-orange-400 p-2 px-4 rounded-md"
                to={"/login"}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

{
  /* <li>
          <button onClick={() => changePage("home")} className="hover:underline">Home</button>
        </li>
        <li>
          <button onClick={() => changePage("app")} className="hover:text-red-200 transition">Increase & Decrease</button>
        </li>
        <li>
          <button onClick={() => changePage("product")} className="hover:text-red-200 transition">Form Product</button>
        </li>
        <li>
          <button onClick={() => changePage("pokemon")} className="hover:text-red-200 transition">List Pokemon</button>
        </li>
        <li>
          <button onClick={() => changePage("review")} className="hover:underline">Reviews</button>
        </li>
      </ul>
    </nav> */
}
