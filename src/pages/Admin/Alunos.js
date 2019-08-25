import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createAluno, deleteAluno } from "@/store/reducers/alunos";
import { sortByDate } from "@/store/functions";
import Heading from "@/components/Page/Heading";
import Container from "@/components/Page/Container";
import Fieldset from "@/components/Form/Fieldset";
import FieldErrors from "@/components/Form/FieldErrors";

const Alunos = () => {
  const dispatch = useDispatch();
  const alunos = useSelector(state => state.alunos.list);
  const turmas = useSelector(state => state.turmas.list);
  const [errors, setErrors] = React.useState([]);
  const [newAluno, setNewAluno] = React.useState({
    name: "",
    score: 0,
    classroomId: 0
  });

  const handleCreate = async event => {
    event.preventDefault();

    let localErrors = [];

    if (newAluno.name === "") {
      localErrors.push("O campo nome não pode estar vazio!");
    }

    if (newAluno.classroomId === 0) {
      localErrors.push("Escolha uma turma para inserir o aluno!");
    }

    if (localErrors.length === 0) {
      await dispatch(createAluno(newAluno)).catch(err => {
        localErrors.push(err.response.data);
      });
    }

    setErrors(localErrors);
  };

  const handleDelete = id => {
    dispatch(deleteAluno(id));
  };

  return (
    <>
      <Container>
        <Heading title="Alunos" description="Adicione, remova e gerencie os alunos da aplicação" />

        <form onSubmit={handleCreate}>
          <Fieldset legend="Inserir Novo">
            <div className="form-group">
              <label>Nome:</label>
              <input
                type="text"
                className="form-control"
                value={newAluno.name}
                onChange={e => {
                  setNewAluno({ ...newAluno, name: e.target.value });
                }}
                required
              />
            </div>
            <div className="form-group">
              <label>Pontuação:</label>
              <input
                type="number"
                className="form-control"
                value={newAluno.score}
                onChange={e => {
                  setNewAluno({ ...newAluno, score: e.target.value });
                }}
                required
              />
            </div>
            <div className="form-group">
              <label>Turma:</label>
              <select
                className="form-control"
                onChange={e => {
                  setNewAluno({ ...newAluno, classroomId: e.target.value });
                }}
                required
              >
                <option value="0" />
                {turmas &&
                  turmas.map(turma => (
                    <option value={turma.id} key={turma.id}>
                      {turma.name}
                    </option>
                  ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>

            <FieldErrors errors={errors} />
          </Fieldset>
        </form>

        {alunos.length > 0 && turmas.length > 0 && (
          <table className="table text-left">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Score</th>
                <th scope="col">Turma</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {sortByDate(alunos).map(aluno => {
                let cr = turmas.find(turma => turma.id === aluno.classroomId) || {};
                return (
                  <tr key={aluno.id}>
                    <td>{aluno.id}</td>
                    <td>{aluno.name}</td>
                    <td>{aluno.score}</td>
                    <td>{cr.name || "[EXCLUÍDO]"}</td>
                    <td>
                      <div className="btn-group text-xs">
                        <button className="btn btn-link text-red-500" onClick={() => handleDelete(aluno.id)}>
                          EXCLUIR
                        </button>
                        <Link to={`/admin/alunos/${aluno.id}`} className="btn btn-link">
                          ALTERAR
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </Container>
    </>
  );
};

export default Alunos;
