import React from "react";
import { useDispatch } from "react-redux";
import { fetchAlunos } from "@/store/reducers/alunos";
import { fetchTurmas } from "@/store/reducers/turmas";

const App = props => {
  const dispatch = useDispatch();
  dispatch(fetchAlunos());
  dispatch(fetchTurmas());
  return <>{props.children}</>;
};

export default App;
