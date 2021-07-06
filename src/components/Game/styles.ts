import styled, { css } from 'styled-components';

interface IFoodPlateProps {
  available: boolean;
}

const Container = styled.div<IFoodPlateProps>`
  width: 100%;
  background: #f0f0f5;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  header {
    background: #fff;
    border: solid 1px #f0f0f5;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    ${props =>
      !props.available &&
      css`
        opacity: 0.3;
      `};

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 30px;
    margin-right: auto;
    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 8px 8px 0px;
    transition: background 0.3s;
    &:hover {
      background: #d3d3d6;
    }
    div.icon-container {
      display: flex;

      button {
        width: 100%;
        height: 100%;
        background: transparent;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 6px;
        }
      }
    }
  }

  //Smartphone
  @media screen and (max-width: 670px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    header {
      width: 100%;
      margin: 10px;
    }

    section.body {
      padding: 30px;
      margin-right: auto;
    }

    section.footer {
      width: 100%;
      display: flex;
      justify-content: left;
      align-items: center;
      border-radius: 8px 8px 8px 8px;
    }
  }
`;

export default Container;
