import React from 'react';

interface Props {
  //type?: 'button' | 'submit' | 'reset' | undefined;
  //onClick?: () => void;
  nome: string;
}

export default function Botao({ nome }: Props) {
  return (
    <div>
      <button>{this.props.children}</button>
    </div>
  );
}
