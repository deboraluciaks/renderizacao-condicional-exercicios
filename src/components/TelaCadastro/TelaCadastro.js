import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  const mostrarTelaEnd = () => {
    props.mudarTela("TelaEnd")
  }

  const mostrarTelaLogin = () => {
    props.mudarTela("TelaLogin")
  }

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" value={props.cadastro.nome} onChange={props.changeNome}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" value={props.cadastro.email} onChange={props.changeEmail}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" value={props.cadastro.senha} onChange={props.changeSenha}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>

        <SendButton onClick={mostrarTelaEnd}>Próximo</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
