import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-red-600 text-white top-0">
      <nav className="container w-full px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold italic">Minitask React JS</h1>
        <ul className="flex space-x-6">
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
              to={"/increase&decrease"}
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
