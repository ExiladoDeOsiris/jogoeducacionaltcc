import React from "react";
import Header from "../../components/Header/index";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const Selecao = () => {
  return (
    <>
      <div className="container" align="center">
        <div className="butao" align="center">
          <Header />

          <div class="row">
            <div class="col">
              <Button as={Link} to="/historia" className="Button ">
                História
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/portugues" className="Button ">
                Português
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/biologia" className="Button ">
                Biologia
              </Button>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <Button as={Link} to="/artes" className="Button ">
                Artes
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/fisica" className="Button ">
                Física
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/matematica" className="Button ">
                {""}
                Matemática{" "}
              </Button>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <Button as={Link} to="/quimica" className="Button ">
                {""}
                Química{" "}
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/sociologia" className="Button ">
                {""}
                Sociologia{" "}
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/filosofia" className="Button ">
                {""}
                Filosofia{" "}
              </Button>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <Button as={Link} to="/filosofia" className="Button ">
                {""}
                Filosofia{" "}
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/edfisica" className="Button ">
                {""}
                Ed. Física{" "}
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/ingles" className="Button ">
                {""}
                Inglês{" "}
              </Button>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <Button as={Link} to="/geografia" className="Button ">
                {""}
                Geografia{" "}
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/edfisica" className="Button ">
                {""}
                Indefinido{" "}
              </Button>
            </div>
            <div class="col">
              <Button as={Link} to="/ingles" className="Button ">
                {""}
                Indefinido{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selecao;
