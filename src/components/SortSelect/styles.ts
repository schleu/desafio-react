import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #c3c3c3;
  padding: 30px 0;
  margin: -300px auto 150px;

  div {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    select {
      width: 100%;
      height: 40px;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
    }
  }
`;

export default Container;
