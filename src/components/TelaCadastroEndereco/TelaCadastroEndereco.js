import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "../TelaCadastro/styled";

function TelaCadastroEnd (props){
    const cadastrar = () => {
        // fluxo de cadastro (ainda veremos)
        props.mudarTela("TelaPrincipal")
        console.log(props.cadastro)
    }
    const mostrarTelaLogin = () => {
        props.mudarTela("TelaLogin")
    }
    

    return (
        <FormContainer>
            <h1>Cadastro</h1>

            <Form>
                <StyledLabel htmlFor="endereço">
                Endereço:
                <Input id="endereço" value={props.cadastro.end} onChange={props.changeEnd}/>
                </StyledLabel>

                <StyledLabel htmlFor="numero">
                Num:
                <Input id="numero" value={props.cadastro.num} onChange={props.changeNum}/>
                </StyledLabel>

                <StyledLabel htmlFor="complemento">
                Complemento:
                <Input id="complemento" value={props.cadastro.comp} onChange={props.changeComp}/>
                </StyledLabel>

                <StyledLabel htmlFor="telefone">
                Telefone:
                <Input id="telefone" value={props.cadastro.tel} onChange={props.changeTel} />
                </StyledLabel>

                <SendButton onClick={cadastrar}>Cadastrar</SendButton>

                <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
            </Form>
    </FormContainer>
    )
}




export default TelaCadastroEnd;