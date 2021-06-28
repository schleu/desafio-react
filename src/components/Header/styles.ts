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
    .Logo {
      font-size: 30px;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #1f1f1f;
        img {
          width: 50px;
          padding-right: 10px;
        }
      }
    }

    nav {
      div {
        font-weight: 600;
        border-radius: 8px;
        border: 0;
        background: transparent;
        color: #1f1f1f;

        a {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          align-items: center;

          .text {
            display: block;
            img {
              width: 25px;
              color: red;
            }
            span {
              position: absolute;
              top: 20px;
            }
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;

            img {
              width: 15px;
            }
          }
        }
      }
    }
  }
`;

export default Container;
