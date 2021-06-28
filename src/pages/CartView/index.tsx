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

interface ICart {
  id: number;
  game: IGame;
}

const CartView: React.FC = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
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
        return acc + cart.game.price;
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

  async function handleRemoveGameToCart(id: number): Promise<void> {
    try {
      await api.delete(`/carts/${id}`);
      setCarts(carts.filter(game => game.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header cartItens={carts.length} />
      <CartContainer data-testid="cart-list">
        {carts &&
          carts.map(cart => (
            <Cart
              key={cart.id}
              cart={cart}
              handleRemoveGameToCart={handleRemoveGameToCart}
            />
          ))}
        <div className="totaisCart">
          <div className="subtotalCart">
            <span>Sub-Total:</span>
            {formatValue(subtotalCart)}
          </div>
          <div className="totalExtra">
            <span>Shipping:</span>
            {formatValue(totalExtra)}
          </div>
          <div className="totalCart">
            <span>Total:</span>
            {formatValue(totalCart)}
          </div>
        </div>
      </CartContainer>
    </>
  );
};

export default CartView;
