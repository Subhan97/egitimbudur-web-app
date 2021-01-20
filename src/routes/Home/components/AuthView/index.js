import React, { Component } from 'react';

import LoginView from './LoginView'
import SignUpView from './SignUPView'
import PasswordReset from './PasswordReact'

class AuthView extends Component {

    //1:Giris ekrani;
    //2.Kayit Ekrani;
    //3.Sifre reset ekrani


    constructor(){
        super();

        this.state = {
            currentView : 1
        }
    }

    changeView(newView){
        this.setState({
            currentView: newView
        })
    }

    render() {
        return this.state.currentView ===1
        ?<LoginView onViewChange={this.changeView.bind(this)} />
        :this.state.currentView ===2
        ?<SignUpView onViewChange={this.changeView.bind(this)} />
        :<PasswordReset onViewChange={this.changeView.bind(this)} />    
    }

}

export default AuthView;