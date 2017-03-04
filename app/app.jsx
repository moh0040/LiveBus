var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('Header');
var Footer = require('Footer');
var MapBus = require('MapBus');
import { Grid, Row, Col  } from 'react-bootstrap';


ReactDOM.render(
		<Grid>
          <Row className="show-grid">
            <Col xs={18} md={12}><code>
                <Header/>
                <MapBus/> 
                <Footer/>
            </code></Col>
          </Row>
        </Grid>,

  document.getElementById('app')
);
