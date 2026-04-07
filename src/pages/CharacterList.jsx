import React, { useState } from 'react';
import { Link } from 'react-router';
import slugify from 'slugify';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Karakter Rick & Morty</h1>
        <button 
          onClick={fetchCharacters}
          className="bg-blue-600 ml-20 hover:bg-blue-700 text-white  font-bold py-2 px-6 rounded-full transition-all shadow-lg"
        >
          {loading ? "Memuat..." : "Tampilkan Karakter"}
        </button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => {
          const slug = slugify(character.name, { lower: true, strict: true });
          
          return (
            <Link 
              to={`/characters/${character.id}/${slug}`} 
              key={character.id} 
              className="group no-underline text-black"
            >
              <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <img src={character.image} alt={character.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{character.name}</h3>
                  <p className="text-sm text-gray-500">{character.species} • {character.status}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default CharacterList;