import React from 'react';

import Container from './styles';

interface IHeaderProps {
  handleSortBy: (sortBy: string) => void;
}

const SortSelect: React.FC<IHeaderProps> = ({ handleSortBy }: IHeaderProps) => (
  <Container>
    <div>
      Sort:
      <select onChange={e => handleSortBy(e.target.value)}>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="score">Score</option>
      </select>
    </div>
  </Container>
);

export default SortSelect;
