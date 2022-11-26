export interface RickAndMortyCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharInfo;
  location: CharInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharInfo {
  name: string;
  url: string;
}
