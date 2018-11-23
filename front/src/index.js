import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import App from './App'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import * as serviceWorker from './serviceWorker'
import Login from './components/Login/Login'
import Ilustracoes from './components/Ilustracoes/Ilustracoes';
import Informacoes from './components/Informacoes/Informacoes';
import TiposDeLesoes from './components/TiposDeLesoes/TiposDeLesoes';

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
        </Route>
        <Route path="/login" component={Login} />
    </Router>
), document.getElementById('root'))

serviceWorker.unregister()
