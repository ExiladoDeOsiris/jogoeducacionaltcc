import React, { useState, useEffect } from "react";
import Header from "../../components/Header/index";
import {
  Table,
  Dropdown,
  DropdownButton,
  Container,
  Card
} from "react-bootstrap";

const Usuarios = () => {
  const [Lista, setLista] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [qtdadeItensPagina, setQtdadeItensPagina] = useState(5);
  const [total, setTotal] = useState(0);
  const [qtdadePaginas, setQtdadePaginas] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let _url = `https://7c7ol.sse.codesandbox.io/api/usuarios?_page=${pagina}&_limit=${qtdadeItensPagina}`;
      const page = await fetch(_url);
      let _total = parseInt(await page.headers.get("x-total-count"), 10);
      setTotal(_total);
      setQtdadePaginas(Math.ceil(_total / qtdadeItensPagina));
      const data = await page.json();
      setLista(data);
    }
    fetchData();
  }, [qtdadeItensPagina, pagina]);

  return (
    <>
      <Card className="bg-dark text-white">
        <Card.ImgOverlay>
          <Header />
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr
                  className="h5 text-light"
                  style={{ backgroundColor: "rgb(3, 15, 32)" }}
                >
                  <td>ID</td>
                  <td>NOME</td>
                  <td>CPF</td>
                  <td>EMAIL</td>
                  <td>CELULAR</td>
                </tr>
              </thead>

              <tbody>
                {Lista.map((element, index) => {
                  return (
                    <tr
                      key={index}
                      style={{ backgroundColor: "rgb(255, 255, 255)" }}
                      className=""
                    >
                      <td>{element.id}</td>
                      <td>{element.usu_nome}</td>
                      <td>{element.usu_cpf}</td>
                      <td>{element.usu_email}</td>
                      <td>{element.usu_celular}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="W-100 d-flex justify-content-between aling-items-center">
              <DropdownButton
                id="dropdown-pagina"
                title={`Página:  ${pagina}`}
                variant="primary"
              >
                {Array.from({ length: qtdadePaginas }).map((element, index) => {
                  return (
                    <Dropdown.Item
                      as="button"
                      onClick={(evt) => setPagina(index + 1)}
                      className="W-100 d-flex justify-content-center"
                    >
                      {index + 1}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
              <span>
                Exibindo {Lista.length} de {total}
              </span>
              <DropdownButton
                variant="primary"
                id="dropdown-qtdade-item-pag"
                title={`Itens por página:   ${qtdadeItensPagina}`}
              >
                <Dropdown.Item
                  as="button"
                  onClick={(evt) => setQtdadeItensPagina(5)}
                  className="W-100 d-flex justify-content-center"
                >
                  5
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={(evt) => setQtdadeItensPagina(10)}
                  className="W-100 d-flex justify-content-center"
                >
                  10
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={(evt) => setQtdadeItensPagina(15)}
                  className="W-100 d-flex justify-content-center"
                >
                  15
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={(evt) => setQtdadeItensPagina(20)}
                  className="W-100 d-flex justify-content-center"
                >
                  20
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={(evt) => setQtdadeItensPagina(50)}
                  className="W-100 d-flex justify-content-center"
                >
                  50
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Usuarios;
