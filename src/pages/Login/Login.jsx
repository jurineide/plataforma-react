
import {Form, Button, } from "react-bootstrap"
import "./Login.css";
export function Login(){
    return(
      <body>
        <div className="login">      

    <Form className="formulario">
      <Form.Group className="text-center mb-3" controlId="formBasicEmail">
        <Form.Label className="nome">Endereço de Email</Form.Label>
        <Form.Control className="caixa" type="email" placeholder="Digite aqui seu email" />        
      </Form.Group>

      <Form.Group className=" text-center  mb-3" controlId="formBasicPassword">
        <Form.Label className="nome">Senha</Form.Label>
        <Form.Control className="caixa" type="password" placeholder="Digite aqui sua senha" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="botão"type="checkbox" label="Lembrar-me" />
      </Form.Group>

      <Button className="botão2" variant="secondary" type="submit">
        Cadastrar/Entrar
      </Button>
      
      <Button className="botão" variant="secondary" type="submit">
        Entrar com o Google
      </Button>
    </Form>            
        </div>
        </body>
    )
}
