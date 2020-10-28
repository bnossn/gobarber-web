import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  /* Força o Container ter 100% do Viewport Height */
  height: 100vh;

  display: flex;
  /* Faz com que os itens do container tbm tenham tamanho total do Viewport*/
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* O form vai ocuparar até 700px, oq sobrar será da img */
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
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

  /* sem '>' esta estilização prejudica a estilização do <a> do form */
  /* utilizamos o '>' para dizer que queremos estilizar SÓ os <a> que estão
     diretamente dentro do meu 'Content' e não também os <a> dos subcomponentes
     do meu 'Content' */
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  /* Faz ocupar todo espaço disponivel para ele */
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  /* cover faz ela dar 'strech' para ocupar todo espaço disponivel */
  background-size: cover;
`;
