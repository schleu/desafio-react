import styled from 'styled-components';

const Container = styled.div`
  background: #c3c3c3;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 150px;
    }
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
    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #303030;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
            img {
              width: 40px;
            }
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
            color: #fff;

            img {
              width: 20px;
            }
          }
        }
      }
    }
  }
`;

export default Container;
