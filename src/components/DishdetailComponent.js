import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap';



class DishDetail extends Component {

  

  render() {

    return (

      <row className="row">
        <Card>
          <CardImg width="100%" src={this.props.image} alt={this.props.name}/>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>{this.props.description}</CardText>
          </CardBody>
        </Card>
      </row>


      //<h1>{this.props.name}</h1>
    );
  }
}


export default DishDetail;
