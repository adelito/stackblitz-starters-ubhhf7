import React from 'react';

interface Props {
  //type?: 'button' | 'submit' | 'reset' | undefined;
  //onClick?: () => void;
  nome: string;
}

export default function Botao() {
  return (
    <div>
      <button>{this.props.children}</button>
    </div>
  );
}
