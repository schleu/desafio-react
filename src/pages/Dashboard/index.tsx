import React, { useEffect, useState } from 'react';

import { throws } from 'assert';
import api from '../../services/api';

import Header from '../../components/Header';
import Game from '../../components/Game';
import SortSelect from '../../components/SortSelect';

import sortGames from '../../utils/sortGames';

import GamesContainer from './styles';

interface IGame {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

const Dashboard: React.FC = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [carts, setCarts] = useState<IGame[]>([]);
  const [sortBy, setSortBy] = useState('title');

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      const SortedGames = sortGames(sortBy, response.data);

      setGames(SortedGames);
    }
    loadProducts();
  }, [sortBy]);

  useEffect(() => {
    async function loadCarts(): Promise<void> {
      const response = await api.get('/carts');

      setCarts(response.data);
    }
    loadCarts();
  }, []);

  async function handleAddGameToCart(game: IGame): Promise<void> {
    try {
      const response = await api.post(`/carts`, {
        game,
      });
      setCarts([...carts, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSortBy(sort: string): void {
    setSortBy(sort);
  }

  return (
    <>
      <Header cartItens={carts.length} />
      <SortSelect handleSortBy={handleSortBy} />
      <GamesContainer data-testid="games-list">
        {games &&
          games.map(game => (
            <Game
              key={game.id}
              game={game}
              handleAddGameToCart={handleAddGameToCart}
            />
          ))}
      </GamesContainer>
    </>
  );
};

export default Dashboard;
