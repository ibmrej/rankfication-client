import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import api from "@/services/api";
import { fetchAlunos, updateAluno } from "@/store/reducers/alunos";
import Container from "@/components/Page/Container";
import Heading from "@/components/Page/Heading";
import Fieldset from "@/components/Form/Fieldset";
import FieldErrors from "@/components/Form/FieldErrors";

const Update = props => {
  const dispatch = useDispatch();
  const alunos = useSelector(state => state.alunos.list);
  const turmas = useSelector(state => state.turmas.list);
  const [currentAluno, setCurrentAluno] = React.useState({
    name: "",
    classroomId: 0,
    score: 0
  });
  const [shouldRedirect, setShouldRedirect] = React.useState(false);
  const [alunoTitle, setAlunoTitle] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const { id } = props.match.params;

  React.useEffect(() => {
    api.get(`/student/${parseInt(id)}`).then(({ data }) => {
      setAlunoTitle(data.name);
      setCurrentAluno(data);
      setShouldRedirect(data ? false : true);
    });
  }, [alunos, id]);

  const handleUpdate = event => {
    event.preventDefault();
    const localErrors = [];

    if (currentAluno.name === "") {
      localErrors.push("O campo nome não pode estar vazio!");
    }

    if (currentAluno.classroomId === 0) {
      localErrors.push("Escolha uma turma para inserir o aluno!");
    }

    if (localErrors.length === 0) {
      api
        .put(`/student/${currentAluno.id}`, currentAluno)
        .then(() => dispatch(updateAluno(currentAluno)))
        .then(() => dispatch(fetchAlunos()))
        .catch(err => localErrors.push(err.response.data));
    }

    setErrors(localErrors);
  };

  return (
    <>
      {shouldRedirect && <Redirect to="" />}
      {!!currentAluno && (
        <>
          <Container>
            <Heading title={alunoTitle} description={`Atualize as informações e clique em "Salvar"`} />
            <form onSubmit={handleUpdate}>
              <Fieldset legend="Alterar dados">
                <div className="form-group">
                  <label>Nome:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentAluno.name}
                    onChange={e => {
                      setCurrentAluno({ ...currentAluno, name: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Pontuação:</label>
                  <input
                    type="number"
                    className="form-control"
                    value={currentAluno.score}
                    onChange={e => {
                      setCurrentAluno({ ...currentAluno, score: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Turma:</label>
                  <select
                    className="form-control"
                    value={currentAluno.classroomId}
                    onChange={e => {
                      setCurrentAluno({ ...currentAluno, classroomId: e.target.value });
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
                  Salvar
                </button>

                <FieldErrors errors={errors} />
              </Fieldset>
            </form>
          </Container>
        </>
      )}
    </>
  );
};

export default Update;
