import React, {Component} from 'react';

import { Well  } from 'react-bootstrap';



class Header extends Component {
  render(){
    return (
        <div className="header" >
            <Well ><b>Live Bus Location</b><p className="headerP">[ React.JS, Webpack ES6, Babel, React-bootstrap, GoogleMapApi, RestbusApi ]</p></Well>
        </div>
    );
  }
}



module.exports = Header;
