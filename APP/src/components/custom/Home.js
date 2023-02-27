import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponents: false
        }
    }


    render(){
        return (
            <div className="container" style={{ display: "flex", 
            backgroundImage: "url(" + "https://www.dcu.ie/sites/default/files/styles/widescreen_television/public/2020-10/campus_img6.webp?itok=VAqxEffU" + ")",
            backgroundPosition: 'center',
          //  backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '100%',
            //position: "absolute",
            alignItems: "center", 
            maxWidth: "1000px", 
            
            justifyContent: "center", 
            height: "100vh", 
            width: "100vw",
            margin: "0 auto" }} >
                <ul className="collection with-header">
                <li className="collection-header"><h5>Election User Type</h5></li>
                    <li className="collection-item"><div><h5>Voter<Link to="/choose" className="secondary-content"><i className="material-icons">send</i></Link></h5></div></li>
              
                </ul>
            </div>
        )
    }
}

export default Home

//<li className="collection-item"><div><h5>Admin<Link to="/login" className="secondary-content"><i className="material-icons">send</i></Link></h5></div></li>
