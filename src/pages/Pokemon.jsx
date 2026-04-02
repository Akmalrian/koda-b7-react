import React from "react";

class Pokemon extends React.Component {
  state = {
    pokemonList: [], 
    displayList: [], 
    searchQuery: "",
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchInitialData();
  }

  fetchInitialData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
      const data = await response.json();

      const details = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          return await res.json();
        })
      );

      // Set kedua list dengan data yang sama di awal
      this.setState({ 
        pokemonList: details, 
        displayList: details, 
        loading: false 
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearchConfirm = () => {
    const { pokemonList, searchQuery } = this.state;
    
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    this.setState({ displayList: filtered });
  };

  render() {
    const { displayList, searchQuery, loading, error } = this.state;

    return (
      <section className="p-4">
        <h1 className="text-2xl font-bold mb-4">List Pokemon</h1>
        
        {/* Kontainer Pencarian */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Ketik nama pokemon..."
            value={searchQuery}
            onChange={this.handleInputChange}
            className="border p-2 rounded w-full max-w-xs"
          />
          <button
            onClick={this.handleSearchConfirm}
            className="bg-red-500 text-white px-6 py-2 rounded font-bold hover:bg-red-600"
          >
            Cari
          </button>
        </div>

        {loading && <p>Memuat data pokemon...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayList.length > 0 ? (
            displayList.map((pokemon) => (
              <article key={pokemon.id} className="border p-4 rounded shadow-sm text-center bg-gray-400 hover:border-red-400 transition-colors">
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="mx-auto w-24 h-24"
                />
                <p className="font-bold capitalize mt-2 text-blue-600">{pokemon.name}</p>
                <div className="flex justify-center gap-1 mt-1">
                  {pokemon.types.map((t) => (
                    <span key={t.type.name} className="text-xs font-bold text-red-600 bg-green-300 px-2 py-1 rounded">
                      {t.type.name}
                    </span>
                  ))}
                </div>
              </article>
            ))
          ) : (
            !loading && <p className="col-span-full text-center text-gray-500 italic">Pokemon tidak ditemukan.</p>
          )}
        </div>
      </section>
    );
  }
}

export default Pokemon;