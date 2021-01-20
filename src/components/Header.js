import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component { 

  constructor() {
    super();

    this.state = {
      isNavOpen: false
    }
  }

  buttonClicked(){
   this.setState({
     isNavOpen : !this.state.isNavOpen
   })
  }

  render() {
    console.log('RENDERING')
    return (
      <header>
        <nav className=" container navbar navbar-expand-lg justify-content-between ">
          <a className="navbar-brand" href="#">
            Egitimbudur
            </a>
          <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" style={{ displey:this.state.isNavOpen ? "block" : "none"}}>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d" href="#">Disabled</a>
              </li>
            </ul>
          </div>



        </nav>

      </header>
    )
  }
}




export default Header;