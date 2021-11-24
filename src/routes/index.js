import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/index";
import Usuarios from "../pages/usuarios/index";
import Historia from "../pages/jogar/historia/index";
import Portugues from "../pages/jogar/portugues/index";
import Biologia from "../pages/jogar/biologia/index";
import Artes from "../pages/jogar/artes/index";
import Fisica from "../pages/jogar/fisica/index";
import Matematica from "../pages/jogar/matematica/index";
import Quimica from "../pages/jogar/quimica/index";
import Sociologia from "../pages/jogar/sociologia/index";
import Filosofia from "../pages/jogar/filosofia/index";
import EdFisica from "../pages/jogar/edfisica/index";
import Ingles from "../pages/jogar/ingles/index";
import Geografia from "../pages/jogar/geografia/index";
import Selecao from "../pages/selecao/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/historia" component={Historia} />
      <Route exact path="/portugues" component={Portugues} />
      <Route exact path="/biologia" component={Biologia} />
      <Route exact path="/artes" component={Artes} />
      <Route exact path="/fisica" component={Fisica} />
      <Route exact path="/matematica" component={Matematica} />
      <Route exact path="/quimica" component={Quimica} />
      <Route exact path="/sociologia" component={Sociologia} />
      <Route exact path="/filosofia" component={Filosofia} />
      <Route exact path="/edfisica" component={EdFisica} />
      <Route exact path="/ingles" component={Ingles} />
      <Route exact path="/geografia" component={Geografia} />
      <Route exact path="/selecao" component={Selecao} />
      <Route exact path="/usuarios" component={Usuarios} />
    </Switch>
  );
};

export default Routes;
