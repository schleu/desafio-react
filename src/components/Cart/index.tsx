import React from 'react';
import { FiStar } from 'react-icons/fi';
import Container from './styles';

// import api from '../../services/api';

interface IGame {
  id: number;
  name: string;
  price: string;
  score: number;
  image: string;
}

interface IProps {
  game: IGame;
  handleAddGameToCart: (game: IGame) => void;
  handleRemoveGameToCart: (game: IGame) => void;
}

const Cart: React.FC<IProps> = ({
  game,
  handleAddGameToCart,
  handleRemoveGameToCart,
}: IProps) => {
  return (
    <Container available>
      <header>
        <img src={`/assets/${game.image}`} alt={game.name} />
      </header>
      <section className="body">
        <h2>{game.name}</h2>
        <p className="price">
          R$ <b>{game.price}</b>
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
            Comprar
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Cart;
