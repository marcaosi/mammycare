import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import App from './App'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import * as serviceWorker from './serviceWorker'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Ilustracoes from './components/Ilustracoes/Ilustracoes';
import Informacoes from './components/Informacoes/Informacoes';
import TiposDeLesoes from './components/TiposDeLesoes/TiposDeLesoes';
import Prevencao from './components/Prevencao/Prevencao';
import Procedimentos from './components/Procedimentos/procedimentos';
import NovoProcedimento from './components/Procedimentos/NovoProcedimento';
import EditarProcedimento from './components/Procedimentos/EditarProcedimento';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/informacoes">
                <IndexRoute component={Informacoes}/>
                <Route path="ilustracoes" component={Ilustracoes}/>
                <Route path="ilustracoes/:id" component={Ilustracoes}/>
                <Route path="tipos_lesoes" component={TiposDeLesoes}/>
                <Route path="tipos_lesoes/:id" component={TiposDeLesoes}/>
            </Route>
            <Route path="/procedimentos">
                <IndexRoute component={Procedimentos}/>
                <Route path="novo" component={NovoProcedimento}/>
                <Route path=":id" component={EditarProcedimento}/>
            </Route>
            <Route path="prevencao" component={Prevencao}/>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="logout" component={Logout} />
    </Router>
), document.getElementById('root'))

serviceWorker.unregister()
