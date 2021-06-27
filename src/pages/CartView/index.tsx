import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Cart from '../../components/Cart';
import CartContainer from './styles';

import formatValue from '../../utils/formatValue';

interface IGame {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

const CartView: React.FC = () => {
  const [carts, setCarts] = useState<IGame[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);
  const [totalExtra, setTotalExtra] = useState<number>(0);
  const [subtotalCart, setSubTotalCart] = useState<number>(0);

  useEffect(() => {
    async function loadCarts(): Promise<void> {
      const response = await api.get('/carts');

      setCarts(response.data);
    }
    loadCarts();
  }, []);

  useEffect(() => {
    async function loadValues(): Promise<void> {
      const valorParcial = carts.reduce((acc, cart) => {
        return acc + cart.price;
      }, 0);

      setSubTotalCart(valorParcial);

      if (valorParcial > 250) {
        setTotalExtra(0);
      } else {
        setTotalExtra(carts.length * 10);
      }

      setTotalCart(valorParcial + totalExtra);
    }
    loadValues();
  }, [carts]);

  function handleAddGameToCart(game: IGame): void {
    setCarts([...carts, game]);
  }

  function handleRemoveGameToCart(id: number): void {
    setCarts(carts.filter(game => game.id !== id));
  }

  return (
    <>
      <Header />
      <CartContainer data-testid="cart-list">
        {carts &&
          carts.map(cart => (
            <Cart
              key={cart.id}
              game={cart}
              handleRemoveGameToCart={handleRemoveGameToCart}
            />
          ))}
        <div className="subtotalCart">
          Sub-Total:{formatValue(subtotalCart)}
        </div>
        <div className="totalExtra">Shipping:{formatValue(totalExtra)}</div>
        <div className="totalCart">Total:{formatValue(totalCart)}</div>
      </CartContainer>
    </>
  );
};

export default CartView;
