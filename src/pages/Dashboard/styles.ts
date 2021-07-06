import styled from 'styled-components';

const GamesContainer = styled.div`
  width: calc(100% - 40px);
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;

  //Tablet
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
  //Smartphone
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default GamesContainer;
