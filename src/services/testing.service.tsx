import axios from 'axios';
import { RickAndMortyCharacter } from '../interfaces';

export const TestingService = () => {
  return axios.get<RickAndMortyCharacter>(
    'https://rickandmortyapi.com/api/character/2',
  );
};
