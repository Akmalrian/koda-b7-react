import { StrictMode } from "react";
import Pokemon from "./Pokemon.jsx";


function AppPokemon(){
  return(
    <main>
      <p class="text-red-500 p-6 text-4xl font-bold">Minitask 3</p>
      <StrictMode>
        <Pokemon />
      </StrictMode>
    </main>
  )

}

export default AppPokemon;