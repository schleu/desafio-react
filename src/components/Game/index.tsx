import React from 'react';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import formatValue from '../../utils/formatValue';
import Container from './styles';

// import api from '../../services/api';

interface IGame {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

interface ICart {
  products: IGame[];
  priceTotal: string;
  shipping: string;
}

interface IProps {
  game: IGame;
  handleAddGameToCart: (cart: ICart) => void;
}

const Game: React.FC<IProps> = ({ game, handleAddGameToCart }: IProps) => {
  return (
    <Container available>
      <header>
        <img src={`/assets/${game.image}`} alt={game.name} />
      </header>
      <section className="body">
        <h2>{game.name}</h2>
        <p>
          {game.score}
          <FiStar size={12} />
        </p>
        <p className="price">
          <b>{formatValue(game.price)}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            // onClick={() => setGameToCart()}
            // data-testid={`remove-food-${food.id}`}
          >
            Buy
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Game;
