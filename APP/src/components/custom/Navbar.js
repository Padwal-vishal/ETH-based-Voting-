import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {
    state = {
        location: ""
    }

    componentWillReceiveProps(){
        console.log(this.props)
        this.setState({
            location: this.props.history.location.pathname
        })
    }
    render(){

        if(this.state.location === "/" || this.state.location === "/choose"  || this.state.location === "/vote"  || this.state.location === "/login"){
            return ( 
                <nav className="nav-wrapper  indigo darken-4">
                    <div className="container">
                        <a className="brand-logo">
                            ETH E-Voting 
                        </a>
                        <a href="#" class="brand-logo right">DCU_2023</a>
                    </div>
                </nav>
            )
        }else{
            return(
                <nav className="nav-wrapper  indigo darken-4">
                    <div className="container">
                    <a href="#" class="brand-logo right">DCU_2023</a>
    
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/newelection">New Election</NavLink></li>
                            <li><NavLink to="/elections">Elections</NavLink></li>
                            
                        </ul>
                    </div>
                </nav>
            )
        }

        
    }
}

export default withRouter(Navbar)