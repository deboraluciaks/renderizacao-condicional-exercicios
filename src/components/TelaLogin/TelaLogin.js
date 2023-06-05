import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {
  const login = () => {
    // fluxo de login (ainda veremos)
    props.mudarTela("TelaPrincipal")
    console.log(props.login)
  }

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          <Input value={props.login.email} onChange={props.changeEmail}/>
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} value={props.login.senha} onChange={props.changeSenha}/>
        </StyledLabel>

        <SendButton type="submit" onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
