import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  /* Força o Container ter 100% do Viewport Height */
  height: 100vh;

  > header {
    height: 144px;
    width: 100vw;
    background: #28262e;

    display: flex;
    align-items: center;

    > div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        margin-left: 30px;
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -173px auto 0px;

  /* O form vai ocuparar até 700px, oq sobrar será da img */
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
      color: #f4ede8;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  width: 186px;
  height: 186px;
  position: relative;

  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border: 0;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background-color: ${shade(0.2, '#ff9000')};
    }
  }
`;
