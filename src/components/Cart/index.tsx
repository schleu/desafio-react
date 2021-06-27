import React from 'react';
import { FiTrash } from 'react-icons/fi';
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

interface IProps {
  game: IGame;
  handleRemoveGameToCart: (id: number) => void;
}

const Cart: React.FC<IProps> = ({ game, handleRemoveGameToCart }: IProps) => {
  return (
    <Container>
      <div className="name">
        <h2>{game.name}</h2>
      </div>

      <div className="price">
        <p>
          <b>{formatValue(game.price)}</b>
        </p>
      </div>

      <button
        type="button"
        className="icon"
        onClick={() => handleRemoveGameToCart(game.id)}
        // data-testid={`remove-food-${food.id}`}
      >
        <FiTrash size={20} />
      </button>
    </Container>
  );
};

export default Cart;
