import React from 'react';
import { Link } from 'react-router-dom';
import Container from './styles';

import Logo from '../../assets/logo.png';
import CartIcon from '../../assets/cart-icon.svg';
import ArrowDown from '../../assets/arrow-down-icon.svg';

interface IProps {
  cartItens: number;
}

const Header: React.FC<IProps> = ({ cartItens }: IProps) => (
  <Container>
    <header>
      <div className="Logo">
        <Link to="/" title="Home">
          <img src={Logo} alt="Game Store" />
          Game Store
        </Link>
      </div>
      <nav>
        <div>
          <Link to="/cart" title="Cart">
            <div className="text">
              <img src={CartIcon} alt="Cart" />
              <span>{cartItens}</span>
            </div>
            <div className="icon">
              <img src={ArrowDown} alt="Cart" />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
