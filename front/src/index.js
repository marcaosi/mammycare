import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import Login from './components/Login/Login'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Login />, document.getElementById('root'))

serviceWorker.unregister()
