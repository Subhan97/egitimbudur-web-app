import React from 'react';

import { connect } from 'react-redux';

import { userInit } from 'store/userReducer'





class LoginView extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: ""

        }
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    passwordChange(e) {
        this.setState({
            password: e.target.value
        })
    }


    onUserCLick() {
        //HTTP CALL
        console.log(this.state)
        const user = {
            name:"Melih kork",
            email: "mk@count.lt",
            age: 33,
            gender:"male"
        }
        this.props.loginUserData(user);

    }

    render() {


        const onViewChange = this.props.onViewChange;


        return (<div>
            <form className="form-inline">
                <div className="form-group mb-2">
                    <input type="e-mail" className="form-control" id="staticEmail2" value={this.state.email} onChange={this.emailChange.bind(this)} />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Sifre" value={this.state.password} onChange={this.passwordChange.bind(this)} />
                </div>
                <button type="button" className="btn btn-primary mb-2" onClick={this.onUserCLick.bind(this)}>Giris</button>
                <a href="#" onClick={e => {
                    e.preventDefault()
                    onViewChange(3);
                }}>Sifreni unuttun ?</a>
            </form>
            <p>Henuz uye olmadinizmi?<br />
                        Ucrersiz uye olmag icin <a href="#" onClick={e => {
                    e.preventDefault()
                    onViewChange(2);
                }}>tiklayiniz</a>

            </p>

        </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUserData: (user) => dispatch(userInit(user))
    }
}
export default connect(undefined, mapDispatchtoProps)(LoginView)
// export default LoginView;