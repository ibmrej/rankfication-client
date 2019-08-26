import api from "@/services/api";

const initialState = {
  list: []
};

export const FETCH_ALUNOS = "FETCH_ALUNOS";
export const fetchAlunos = () => dispatch => {
  return api.get("/student").then(response => {
    const { data } = response;
    data = data.sort((a, b) => b.score - a.score);
    dispatch({ type: FETCH_ALUNOS, payload: data });
  });
};

export const CREATE_ALUNO = "CREATE_ALUNO";
export const createAluno = aluno => dispatch => {
  return api.post("/student", aluno).then(() => dispatch(fetchAlunos()));
};

export const UPDATE_ALUNO = "UPDATE_ALUNO";
export const updateAluno = aluno => dispatch => {
  return api.put(`/student/${aluno.id}`, aluno).then(() => dispatch(fetchAlunos()));
};

export const DELETE_ALUNO = "DELETE_ALUNO";
export const deleteAluno = id => dispatch => {
  return api.delete(`/student/${id}`).then(() => {
    dispatch({ type: DELETE_ALUNO, payload: id });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALUNOS: {
      const list = action.payload.sort((a, b) => b.score - a.score);
      return { ...state, list };
    }

    case DELETE_ALUNO: {
      const list = state.list.filter(el => el.id !== action.payload);
      return { ...state, list };
    }

    default:
      return state;
  }
};
