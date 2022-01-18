import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap';



class DishDetail extends Component {


  renderComments(comments){

    const commentsConst = comments.map((comment)=>{

      return(
        <div key={comment.id}>
        <ul className="list-unstyled">
          <li className="">{comment.comment}</li>
          <li className="">-- {comment.author},{comment.date}</li>
        </ul>
        </div>
      )


    });
    if(comments!=null){
      return(
        <div>
        <h4>
        Comments
        </h4>
          {commentsConst}
        </div>


      );
    }

    else {
      return(
        <div></div>
      );
    }
  }
  render() {

    return (
      <div className="row">

        <div className="col-5 m-1">
          <Card>
            <CardImg width="100%" src={this.props.image} alt={this.props.name}/>
            <CardBody>
              <CardTitle>{this.props.name}</CardTitle>
              <CardText>{this.props.description}</CardText>
            </CardBody>
          </Card>
        </div>

        <div className="col-5 m-1">
          {this.renderComments(this.props.comments)}
        </div>

      </div>


    );
  }
}


export default DishDetail;
