import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Ranking from "@/pages/Ranking";
import Turmas from "@/pages/Admin/Turmas";
import Alunos from "@/pages/Admin/Alunos";
import AlunosUpdate from "@/pages/Admin/Alunos/Update";
import NotFound from "@/pages/NotFound";

const Routes = props => (
  <BrowserRouter>
    {props.children}
    <Switch>
      <Route path="/" component={Ranking} exact />
      <Route path="/admin/turmas" component={Turmas} exact />
      <Route path="/admin/alunos" component={Alunos} exact />
      <Route path="/admin/alunos/:id" component={AlunosUpdate} exact />
      <Route path="" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
