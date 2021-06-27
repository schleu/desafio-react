import styled from 'styled-components';

const Container = styled.div`
  background: #f0f0f5;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  .name {
    h2 {
      color: #3d3d4d;
    }
  }
  .price {
    width: 120px;
    font-style: normal;
    font-size: 24px;
    line-height: 34px;
    color: #39b100;
    margin: 0 20px 0 auto;
    b {
      font-weight: 600;
    }
    p {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  button {
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    border: none;
    transition: 0.1s;

    svg {
      color: #3d3d4d;
    }

    &:hover {
      color: #c30000;
    }
  }
`;

export default Container;
