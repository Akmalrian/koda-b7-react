import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

const CharacterDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);


  const id = slug.split("-").pop();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) throw new Error("Karakter tidak ditemukan");
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!character) {
    return <div className="text-center p-20 text-xl font-semibold">Memuat Detail Karakter...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-600 font-medium hover:underline"
      >
        ← Kembali ke Daftar
      </button>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-8">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${character.status === 'Alive' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {character.status}
          </span>
          <h1 className="text-4xl font-black text-gray-900 mt-4 mb-6">{character.name}</h1>
          
          <div className="space-y-4 border-t border-gray-100 pt-6">
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Spesies & Gender</p>
              <p className="text-lg font-medium">{character.species} ({character.gender})</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Asal (Origin)</p>
              <p className="text-lg font-medium">{character.origin?.name}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Lokasi Terakhir</p>
              <p className="text-lg font-medium">{character.location?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;