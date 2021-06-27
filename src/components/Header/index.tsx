import React from 'react';

import Container from './styles';

import Logo from '../../assets/logo.png';
import CartIcon from '../../assets/cart-icon.svg';
import ArrowDown from '../../assets/arrow-down-icon.svg';

interface IHeaderProps {
  handleSortBy: (sortBy: string) => void;
}

const Header: React.FC<IHeaderProps> = ({ handleSortBy }: IHeaderProps) => (
  <Container>
    <header>
      <img src={Logo} alt="Game Store" />
      <div>
        Sort:
        <select onChange={e => handleSortBy(e.target.value)}>
          <option value="title">Title</option>
          <option value="price">Price</option>
          <option value="score">Score</option>
        </select>
      </div>
      <nav>
        <div>
          <button type="button">
            <div className="text">
              <img src={CartIcon} alt="Cart" />
            </div>
            <div className="icon">
              <img src={ArrowDown} alt="Cart" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
