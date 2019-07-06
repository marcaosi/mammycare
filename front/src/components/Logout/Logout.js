import React, { Component } from 'react'
import {browserHistory} from 'react-router'

class Logout extends Component{

    componentDidMount(){
        localStorage.removeItem("jwt")
        browserHistory.push("/login")
    }

    render(){
        return (<div></div>)
    }
}

export default Logout