import React from 'react';
import { useTransition } from 'react-spring';

import Toasts from './Toast';

import { ToastMessage } from '../../hooks/Toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {/* As props passadas pelo useTransition, são itens de estilização. */}
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toasts key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;