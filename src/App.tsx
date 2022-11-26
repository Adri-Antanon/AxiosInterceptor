import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { TestingService } from './services/testing.service';
import { RickAndMortyCharacter } from './interfaces';

function App() {
  const [morty, setMorty] = useState<RickAndMortyCharacter>({} as any);

  const fetchMorty = async () => {
    const { data } = await TestingService();
    setMorty(data);
  };

  useEffect(() => {
    try {
      fetchMorty();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div className="App">{JSON.stringify(morty)}</div>;
}

export default App;
