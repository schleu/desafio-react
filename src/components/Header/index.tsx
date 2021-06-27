import React from 'react';
import { Link } from 'react-router-dom';
import Container from './styles';

import Logo from '../../assets/logo.png';
import CartIcon from '../../assets/cart-icon.svg';
import ArrowDown from '../../assets/arrow-down-icon.svg';

const Header: React.FC = () => (
  <Container>
    <header>
      <Link to="/" title="Home">
        <img src={Logo} alt="Game Store" />
      </Link>
      <nav>
        <div>
          <Link to="/cart" title="Cart">
            <button type="button">
              <div className="text">
                <img src={CartIcon} alt="Cart" />
              </div>
              <div className="icon">
                <img src={ArrowDown} alt="Cart" />
              </div>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
