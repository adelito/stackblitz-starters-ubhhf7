import { FC } from 'react';
import Formulario from './components/Formulario/Formulario';
import Lista from './components/Lista/Lista';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Sistema de Tarefas de: {name}!</h1>
      <p>Formulario de Cadastro de Tarefas</p>
      <div>
        <Formulario />
        <Lista />
      </div>
    </div>
  );
};
