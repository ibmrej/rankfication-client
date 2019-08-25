import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createTurma, deleteTurma } from "@/store/reducers/turmas";
import { sortByDate } from "@/store/functions";
import Heading from "@/components/Page/Heading";
import Container from "@/components/Page/Container";
import Fieldset from "@/components/Form/Fieldset";
import FieldErrors from "@/components/Form/FieldErrors";

const Turmas = () => {
  const dispatch = useDispatch();
  const turmas = useSelector(state => state.turmas.list);
  const [newTurma, setNewTurma] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const handleCreate = async event => {
    event.preventDefault();
    const localErrors = [];

    if (newTurma === "") {
      localErrors.push("O campo nome não pode estar vazio");
    }

    if (localErrors.length === 0) {
      await dispatch(createTurma(newTurma)).catch(err => {
        localErrors.push(err.message);
      });
    }

    setErrors(localErrors);
  };

  const handleDelete = id => {
    dispatch(deleteTurma(id));
  };

  return (
    <>
      <Container>
        <Heading title="Turmas" />
        <form onSubmit={handleCreate}>
          <Fieldset legend="Inserir Novo">
            <div className="form-group">
              <label>Nome:</label>
              <input
                type="text"
                className="form-control"
                value={newTurma}
                onChange={e => setNewTurma(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>

            <FieldErrors errors={errors} />
          </Fieldset>
        </form>

        {turmas.length > 0 && (
          <table className="table text-left">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {sortByDate(turmas).map(turma => {
                return (
                  <tr key={turma.id}>
                    <td>{turma.id}</td>
                    <td>{turma.name}</td>
                    <td>
                      <div className="btn-group text-xs">
                        <button className="btn btn-link text-red-500" onClick={() => handleDelete(turma.id)}>
                          EXCLUIR
                        </button>
                        <Link to={`/admin/turmas/${turma.id}`} className="btn btn-link">
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

export default Turmas;
