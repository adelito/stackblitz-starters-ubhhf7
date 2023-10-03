import Botao from '../Botao/Botao';

export default function Formulario() {
  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="tarefa">Tarefa</label>
          </div>
          <div>
            <input
              type="text"
              name="tarefa"
              id="tarefa"
              placeholder="Informe sua nova tarefa"
              required
            />
          </div>
          <div>
            <label htmlFor="tempo">Tempo</label>
          </div>
          <div>
            <input
              type="time"
              step={1}
              name="tempo"
              id="tempo"
              placeholder="Informe o tempo de estudo"
              required
            />
          </div>
          <div>
            <Botao nome="Teste"></Botao>
          </div>
        </div>
      </form>
    </div>
  );
}
