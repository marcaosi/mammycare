import React, {Component} from 'react'
import {Link} from 'react-router'
import './procedimentos.css'
import utils from '../../utils'
const axios = require("axios")

class Procedimentos extends Component{
    constructor(props){
        super(props)

        const jwt = localStorage.getItem("jwt").split(".")[1]

        this.state = {
            procedimentos: [],
            jwt,
            errorMessage: ''
        }

        this.delete = this.delete.bind(this)
    }

    componentWillMount = async () => {
        axios.get(`${utils.api}procedimento.php?user=${this.state.jwt}`)
            .then(res => {
                if(res.status === 200 || res.status === 203){
                    console.log(res)
                    const procedimentos = res.data.data ? res.data.data : []
                    this.setState({procedimentos, errorMessage: ''})
                }else{
                    this.setState({errorMessage: 'Falha ao carregar os dados.'})
                }
            })
    }

    delete = (id) => {
        axios.delete(`${utils.api}procedimento.php`, {
            data: JSON.stringify({
                data: {id},
                user: this.state.jwt
            })
        }).then(res => {
            if(res.status = 203){
                let procedimentos = this.state.procedimentos.filter(p => p.id !== id)
                this.setState({procedimentos})
            }
        })
        
    }

    render(){
        return (
            <main className="container-fluid table-responsive">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-sm-9 text-right">
                        <Link to="/procedimentos/novo" className="btn-new">Nova Avaliação</Link>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-sm-9 table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome da Mãe</th>
                                    <th>Nome do bebê</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.procedimentos.length === 0 ? <tr><td colSpan="4" className="text-center">{this.state.errorMessage === '' ? <p>Nenhum dado registrado</p> : <p>{this.state.errorMessage}</p>}</td></tr>: <tr></tr>
                                }
                                {
                                    this.state.procedimentos.map(proc => {
                                        const linkEdit = `/procedimentos/${proc.id}`
                                        return (
                                            <tr key={proc.id}>
                                                <td>{proc.id}</td>
                                                <td>{proc.nommae}</td>
                                                <td>{proc.nombebe}</td>
                                                <td>
                                                    <Link to={linkEdit}>Editar</Link>&nbsp; | &nbsp;
                                                    <Link to="/procedimentos" onClick={() => this.delete(proc.id)}>Excluir</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        )
    }
}

export default Procedimentos