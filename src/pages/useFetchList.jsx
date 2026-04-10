
import useFetch from './useFetch';

const UseFetchList = () => {

  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=20');

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>Sedang terjadi error</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Pokedex Mini</h1>
      <hr />
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
        gap: '10px' 
      }}>
        {data && data.results.map((pokemon, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            textTransform: 'capitalize'
          }}>
            <p><strong>{pokemon.name}</strong></p>
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} 
              alt={pokemon.name} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseFetchList;