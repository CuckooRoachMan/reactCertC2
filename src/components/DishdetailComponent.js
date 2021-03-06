import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

  function RenderComments({comments}){

    const commentsConst = comments.map((comment)=>{
      return(
        <div key={comment.id}>
        <ul className="list-unstyled">
          <li className="">{comment.comment}</li>
          <li className="">{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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

  function RenderDish({dish}){
    if (dish!=null) {
      return(
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem >
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active >
                {dish.name}
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{dish.name}</h3><hr/>
            </div>
          </div>


          <div className="row ">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
            </div>

          </div>

        </div>

      )
    } else {
      return(<div></div>)
    }
  }


const DishDetail = (props) => {

  const {
    dish
  } = props;
    return (
      <>
      <RenderDish dish={dish}/>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments}/>
        </div>
      </>

    );
  }




export default DishDetail;
