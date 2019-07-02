import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './Util.css'
import './Main.css'
import utils from '../../utils'

class Login extends Component{
    
    render(){
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <FormBox />
                    </div>
                </div>
            </div>
        )
    }
}

class FormBox extends Component{
    constructor(){
        super()

        this.state = {
            loginHidden : false,
            signUpHidden : true
        }
    }

    componentDidMount(){
        PubSub.subscribe('changeForm', () => {
            this.setState({
                loginHidden : !this.state.loginHidden,
                signUpHidden : !this.state.signUpHidden
            })
        })
    }

    render(){
        return (
            <div>
                {!this.state.loginHidden && <FormLogin />}
                {!this.state.signUpHidden && <FormSignUp />}
            </div>
        )
    }
}

class FormSignUp extends Component{

    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            profession: '',
            password: '',
            validate: ''
        }
    }

    salvaAlteracao(nomeInput, event){
        this.setState({[nomeInput]:event.target.value})
    }

    submitForm(event){
        event.preventDefault()

        if(this.validateForm()){
            const dados = {
                name: this.state.name,
                email: this.state.email,
                profession: this.state.profession,
                password: this.state.password
            }

            fetch(`${utils.api}user.php`, {
                method: 'post',
                body: JSON.stringify(dados)
            }).then(res => {
                if(res.ok){
                    return res.text()
                }else{
                    return false
                }
            }).then(data => {
                if(data === false){
                    this.setState({validate: `Impossível salvar usuário.`, showValidate: true})
                }else{
                    this.changeForm()
                }
            })
        }
    }

    validateForm(){
        let check = true

        Object.keys(this.state).forEach(key => {
            if(key !== 'validate'){
                if(this.validateField(key) === false){
                    this.showValidate(key)
                    check = false
                }
            }
        })

        return check
    }
    
    showValidate(key){
        //console.log(key)
        this.setState({validate: `O campo ${key} deve ser preenchido corretamente`, showValidate: true})
        //console.log(this.state)
    }

    hideValidate(key){
        this.setState({validate: '', showValidate: false})
    }

    validateField(field){
        if(field === 'email'){
            if(this.state[field].match(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
                return false;
            }
        }else{
            if(this.state[field] === ''){
                return false;
            }
        }

        return true;
    }

    changeForm(event){
        if(event){
            event.preventDefault()
        }
        PubSub.publish('changeForm')
    }
    render(){
        return (
            <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" id="form-sign-up" onSubmit={this.submitForm.bind(this)}>
                <span className="login100-form-title">
                    Registrar
                </span>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Por favor informe o seu nome">
                    <p className="text-danger">{this.state.validate}</p>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Por favor informe o seu nome">
                    <input className="input100" type="text" name="name" value={this.state.name} onChange={this.salvaAlteracao.bind(this, 'name')} placeholder="Nome" />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Por favor informe o seu e-mail">
                    <input className="input100" type="text" name="email" value={this.state.email} onChange={this.salvaAlteracao.bind(this, 'email')} placeholder="E-mail" />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Por favor informe a sua profissão">
                    <input className="input100" type="text" name="profession" value={this.state.profession} onChange={this.salvaAlteracao.bind(this, 'profession')} placeholder="Profissão" />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Por favor digite a senha">
                    <input className="input100" type="password" name="pass"  value={this.state.password} onChange={this.salvaAlteracao.bind(this, 'password')} placeholder="Senha" />
                    <span className="focus-input100"></span>
                </div>

                <div className="container-login100-form-btn">
                    <button type="submit" className="login100-form-btn">
                        Enviar
                    </button>
                </div>

                <div className="flex-col-c p-t-40 p-b-40">
                    <span className="txt1 p-b-9">
                        Já tem uma conta?
                    </span>

                    <button onClick={this.changeForm.bind(this)} className="txt3">
                        Entrar
                    </button>
                </div>
            </form>
        )
    }
}

class FormLogin extends Component{

    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    salvaAlteracao(nomeInput, event){
        this.setState({[nomeInput]:event.target.value})
    }

    changeForm(event){
        event.preventDefault()
        PubSub.publish('changeForm')
    }

    login(event){
        event.preventDefault()
        
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        fetch(`${utils.api}login.php`, {
            method: 'post',
            body: JSON.stringify(user)
        }).then(res => {
            if(res.ok){
                return res.json()
            }else{
                return false
            }
        }).then(data => {
            if(data === false){
                this.setState({validate: "Impossível efetuar acesso com dados fornecidos.", showValidate: true})
            }else{
                localStorage.setItem("jwt", data)
            }
        }).catch(err => {
            this.setState({validate: 'Erro inesperado, tente novamente.', showValidate: true})
        })
    }

    render(){
        return (
            <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" id="form-login" onSubmit={this.login.bind(this)}>
                <div className="wrap-input100 validate-input m-b-16" data-validate="Por favor informe o seu nome">
                    <p className="text-danger">{this.state.validate}</p>
                </div>
                <span className="login100-form-title">
                    Entrar
                </span>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Por favor informe o E-mail">
                    <input className="input100" type="text" name="username" placeholder="E-mail" value={this.state.email} onChange={this.salvaAlteracao.bind(this, 'email')} />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Por favor digite a senha">
                    <input className="input100" type="password" name="pass" placeholder="Senha" value={this.state.password} onChange={this.salvaAlteracao.bind(this, 'password')} />
                    <span className="focus-input100"></span>
                </div>

                <div className="text-right p-t-13 p-b-23">
                    <a href="/login" className="txt2">
                        Esqueci a senha
                    </a>
                </div>

                <div className="container-login100-form-btn">
                    <button type="submit" className="login100-form-btn">
                        Entrar
                    </button>
                </div>

                <div className="flex-col-c p-t-170 p-b-40">
                    <span className="txt1 p-b-9">
                        Não tem uma conta?
                    </span>

                    <a href="/login" onClick={this.changeForm.bind(this)} className="txt3">
                        Regisrar agora
                    </a>
                </div>
            </form>
        )
    }
}

export default Login