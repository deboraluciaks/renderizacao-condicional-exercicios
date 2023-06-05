import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import TelaCadastroEnd from "./components/TelaCadastroEndereco/TelaCadastroEndereco";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {


  const [telaAtual, setTelaAtual] = useState("TelaLogin")

  const mudarTela = (novaTela) => {
    setTelaAtual(novaTela)
  }

  //LOGIN

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const changeSenha = (event) => {
    setSenha(event.target.value);
  }
  const changeEmail = (event) => {
    setEmail(event.target.value);
  }

  //CADASTRO

  const [nome, setNome] = useState("");
  const [end, setEnd] = useState("");
  const [num, setNum] = useState("");
  const [comp, setComp] = useState("");
  const [tel, setTel] = useState("");

  const changeNome = (event) => {
    setNome(event.target.value);
  }
  const changeEnd = (event) => {
    setEnd(event.target.value);
  }
  const changeNum = (event) => {
    setNum(event.target.value);
  }
  const changeComp = (event) => {
    setComp(event.target.value);
  }
  const changeTel = (event) => {
    setTel(event.target.value);
  }

  const login = {
    email: email,
    senha: senha
  }
  const cadastro = {
    nome: nome,
    email: email,
    senha: senha,
    end: end,
    num: num,
    comp: comp,
    tel: tel
  }



  const renderizaTela = () => {
    switch (telaAtual) {
      case "TelaLogin":
        return <TelaLogin 
        login={login}
        changeEmail={changeEmail}
        changeSenha={changeSenha}
        mudarTela={mudarTela} />;

      case "TelaCadastro":
        return <TelaCadastro 
        cadastro={cadastro}
        changeNome={changeNome}
        changeEmail={changeEmail}       
        changeSenha={changeSenha}
        mudarTela={mudarTela} />;

      case "TelaEnd":
        return <TelaCadastroEnd 
        cadastro={cadastro}
        changeEnd={changeEnd}
        changeNum={changeNum}
        changeComp={changeComp}
        changeTel={changeTel}
        mudarTela={mudarTela}/>

      case "TelaPrincipal":
        return <TelaPrincipal mudarTela={mudarTela} />

      default:
        return <p>Tela inválida</p>
    }
  }

  return (
    <MainContainer >
      <GlobalStyled />

      {renderizaTela()}
    </MainContainer>
  );
}

export default App;