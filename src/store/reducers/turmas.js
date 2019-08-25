import api from "@/services/api";

const initialState = {
  list: []
};

export const FETCH_TURMAS = "FETCH_TURMAS";
export const fetchTurmas = () => dispatch => {
  return api.get("/classroom").then(({ data }) => dispatch({ type: FETCH_TURMAS, payload: data }));
};

export const CREATE_TURMA = "CREATE_TURMA";
export const createTurma = name => dispatch => {
  return api.post("/classroom", { name }).then(() => dispatch(fetchTurmas()));
};

export const DELETE_TURMA = "DELETE_TURMA";
export const deleteTurma = id => dispatch => {
  return api.delete(`/classroom/${id}`).then(() => {
    dispatch({ type: DELETE_TURMA, payload: id });
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TURMAS:
      return { ...state, list: action.payload };

    case DELETE_TURMA: {
      const list = state.list.filter(el => el.id !== action.payload);
      return { ...state, list };
    }

    default:
      return state;
  }
};
