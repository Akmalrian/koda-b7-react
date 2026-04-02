import { StrictMode } from "react";
import Kelas from "./kelas.jsx";

function App() {
  return (
    <main>
      <p class="text-red-500 p-6 text-4xl font-bold">Minitask 1</p>
      <StrictMode>
        <Kelas />
      </StrictMode>
    </main>
  );
}

export default App;
