import React from "react";
import { useState } from "react";

function Teste() {
  const [nameTudo, setNameTudo] = useState(false);
  const [nameConfirmado, setNameConfirmado] = useState(false);
  const [namePendente, setNamePendente] = useState(false);
  const [nameCancelado, setNameCancelado] = useState(false);
  const [nameExpirado, setNameExpirado] = useState(false);

  const listaTudo = [
    {
      tipo: "Roupas",
      idCompra: "12345",
      cashback: "10%",
      saldo: "R$ 50,00",
      utilizado: "R$ 0,00",
      criadoEm: "2022-01-01",
      status: "Concluído",
    },
    {
      tipo: "Eletrônicos",
      idCompra: "54321",
      cashback: "5%",
      saldo: "R$ 100,00",
      utilizado: "R$ 20,00",
      criadoEm: "2022-02-15",
      status: "Em andamento",
    },
    {
      tipo: "Alimentos",
      idCompra: "67890",
      cashback: "8%",
      saldo: "R$ 25,00",
      utilizado: "R$ 5,00",
      criadoEm: "2022-03-28",
      status: "Pendente",
    },
  ];

  const listaConfirmado = [
    {
      tipo: "Roupas",
      idCompra: "12345",
      cashback: "10%",
      disponivel: "R$ 50,00",
      em: "Trânsito",
      status: "Concluído",
    },
    {
      tipo: "Livros",
      idCompra: "67890",
      cashback: "15%",
      disponivel: "R$ 75,00",
      em: "Estoque",
      status: "Pendente",
    },
    {
      tipo: "Eletrônicos",
      idCompra: "54321",
      cashback: "5%",
      disponivel: "R$ 100,00",
      em: "Entrega",
      status: "Em andamento",
    },
    {
      tipo: "Comida",
      idCompra: "24680",
      cashback: "12%",
      disponivel: "R$ 35,00",
      em: "Trânsito",
      status: "Concluído",
    },
    {
      tipo: "Cosméticos",
      idCompra: "13579",
      cashback: "7%",
      disponivel: "R$ 60,00",
      em: "Estoque",
      status: "Pendente",
    },
  ];

  function setTable(key) {
    switch (key) {
      case "tudo":
        setNameTudo(true);
        break;
      case "confirmado":
        setNameConfirmado(true);
        break;
      case "pendente":
        setNamePendente(true);
        break;
      case "cancelado":
        setNameCancelado(true);
        break;
      case "expiração":
        setNameExpirado(true);
        break;

      default:
    }
  }

  return (
    <>
      <button
        name="tudo"
        onClick={(ev) => setTable(ev.target.name)}
        className={setNameTudo ? "underlineTudo" : ""}
      >
        Tudo
      </button>
      <button
        name="confirmado"
        onClick={(ev) => setTable(ev.target.name)}
        className={setNameConfirmado ? "underlineConf" : ""}
      >
        Confirmado
      </button>
      <button name="pendente" onClick={(ev) => setTable(ev.target.name)}>
        {" "}
        className={setNamePendente ? "underlinePen" : ""}
        Pendente
      </button>
      <button
        name="cancelado"
        onClick={(ev) => setTable(ev.target.name)}
        className={setNameCancelado ? "underlineCan" : ""}
      >
        Cancelado
      </button>
      <button
        name="expiração"
        onClick={(ev) => setTable(ev.target.name)}
        className={setNameExpirado ? "underlineEx" : ""}
      >
        Expiração
      </button>

      {nameTudo && (
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Id compra</th>
              <th>Cashback</th>
              <th>Saldo utilizado</th>
              <th>Criado em</th>
              <th>Status</th>
            </tr>
          </thead>
          {listaTudo.map((dado) => (
            <tbody>
              <tr>
                <td>{dado.tipo}</td>
                <td>{dado.idCompra}</td>
                <td>{dado.cashback}</td>
                <td>{dado.saldo}</td>
                <td>{dado.criadoEm}</td>
                <td>{dado.status}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}

      {nameConfirmado && (
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Id compra</th>
              <th>Cashback</th>
              <th>Disponível em</th>
              <th>Status</th>
            </tr>
          </thead>
          {listaConfirmado.map((dado) => (
            <tbody>
              <tr>
                <td>{dado.tipo}</td>
                <td>{dado.idCompra}</td>
                <td>{dado.cashback}</td>
                <td>{dado.disponivel}</td>
                <td>{dado.status}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </>
  );
}

export { Teste };
