import styled from 'styled-components';

const CartContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
  color: #0f0f0f;
  .totaisCart {
    margin: 0 100px 0 auto;
  }

  .subtotalCart {
    display: flex;
    justify-content: space-between;
    color: #39b100;
    span {
      color: #1f1f1f;
    }
  }
  .totalExtra {
    display: flex;
    justify-content: space-between;
    color: #39b100;
    span {
      color: #1f1f1f;
    }
  }
  .totalCart {
    display: flex;
    justify-content: space-between;
    color: #39b100;
    span {
      color: #1f1f1f;
    }
  }
`;

export default CartContainer;
