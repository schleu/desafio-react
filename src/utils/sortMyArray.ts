interface IGames {
  id: number;
  name: string;
  price: string;
  score: number;
  image: string;
}
const sortMyArray = (sortBy: string, Games: IGames[]): IGames[] => {
  let SortedGames: IGames[] = [];

  if (sortBy === 'title') {
    SortedGames = Games.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  if (sortBy === 'price') {
    SortedGames = Games.sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  if (sortBy === 'score') {
    SortedGames = Games.sort((a, b) => (a.score > b.score ? 1 : -1));
  }

  return SortedGames;
};

export default sortMyArray;
