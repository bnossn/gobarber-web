import styled from 'styled-components';

export const Container = styled.div`
  /* Todo position absolute dentro deste container
    será relativo ao container e nao à tela.
  */
  position: relative;

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    /* deixa o span inicialmente transparente */
    opacity: 0;
    transition: opacity 0.4s;
    /* Esconde o elemento até da DOM mesmo se transparente */
    visibility: hidden;

    position: absolute;
    /* só 100%, o tooltip ficou muito baixo
      com o calc do CSS, deslocamos 100% + 12px
    */
    bottom: calc(100% + 12px);
    /* Hack: Centralizar o tooltip ao icone */
    left: 50%;
    transform: translateX(-50%);

    color: #312e38;

    /* Setinha, ideia retirada do google */
    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      /* Hack: Centralizar */
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
