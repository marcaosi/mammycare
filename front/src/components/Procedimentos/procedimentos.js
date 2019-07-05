import React, {Component} from 'react'
import {Link} from 'react-router'
import './procedimentos.css'
import utils from '../../utils'

class Procedimentos extends Component{
    constructor(props){
        super(props)

        this.state = {
            procedimentos: []
        }

        this.delete = this.delete.bind(this)
    }

    componentWillMount = () => {
        fetch(`${utils.api}procedimento.php`)
            .then(res => {
                if(res.ok){
                    return res.json()
                }
            })
            .then(body => {
                this.setState({procedimentos:body.data})
            })
    }

    delete = (id) => {

        fetch(`${utils.api}procedimento.php`, {
            method: 'delete',
            body: JSON.stringify({
                id
            })
        })
            .then(res => {
                if(res.ok){
                    return res.json()
                }else{
                    console.log('erro')
                }
            })
            .then(body => {
                const procedimentos = this.state.procedimentos.filter(procedimento => procedimento.id !== id)
                this.setState({procedimentos})
            })
    }

    render(){
        return (
            <main className="container-fluid table-responsive">
                <div className="row justify-content-md-center">
                    <div className="col-9">
                        <table className="table table-striped">
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
                                    this.state.procedimentos.length === 0 ? <tr><td colSpan="4"><p className='text-center'>Nenhum dado registrado</p></td></tr>: ''
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