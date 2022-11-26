import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { TestingService } from './services/testing.service';
import { RickAndMortyCharacter } from './interfaces';
import { SnackbarUtilitiesConfigurator } from './utilities';
import { SnackbarProvider } from 'notistack';

function App() {
  const [morty, setMorty] = useState<RickAndMortyCharacter>({} as any);

  const fetchMorty = async () => {
    const { data } = await TestingService();
    setMorty(data);
  };
  useEffect(() => {
    fetchMorty();
  }, []);

  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
      <div className="App">{JSON.stringify(morty)}</div>;
    </SnackbarProvider>
  );
}

export default App;
