import React from 'react';
import { FiTrash } from 'react-icons/fi';
import formatValue from '../../utils/formatValue';
import Container from './styles';

interface IGame {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

interface ICart {
  id: number;
  game: IGame;
}

interface IProps {
  cart: ICart;
  handleRemoveGameToCart: (id: number) => void;
}

const Cart: React.FC<IProps> = ({ cart, handleRemoveGameToCart }: IProps) => {
  return (
    <Container>
      <div className="name">
        <h2>{cart.game.name}</h2>
      </div>

      <div className="price">
        <p>
          <b>{formatValue(cart.game.price)}</b>
        </p>
      </div>

      <button
        type="button"
        className="icon"
        onClick={() => handleRemoveGameToCart(cart.id)}
        // data-testid={`remove-food-${food.id}`}
      >
        <FiTrash size={20} />
      </button>
    </Container>
  );
};

export default Cart;
