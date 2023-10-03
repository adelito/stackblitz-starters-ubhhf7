function Lista() {
  const tarefa = [
    { tarefa: 'React', tempo: '02:30:00' },
    { tarefa: 'Componentes', tempo: '01:30:00' },
    { tarefa: 'Props', tempo: '00:30:00' },
    { tarefa: 'TypeScript', tempo: '05:30:00' },
  ];
  return (
    <div>
      <aside>
        <h1>Lista de Tarefas</h1>
        <ul>
          {tarefa.map((item, index) => (
            <li>
              {item.tarefa} - {item.tempo}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default Lista;
