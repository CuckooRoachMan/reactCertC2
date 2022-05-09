import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import {Link} from 'react-router-dom';


  function RenderLeader({leaders}){
    let styles = {
      marginRight: '20px'
    };
    const leadersConst= leaders.map( (leader) => {
        return (
          <div key={leader.id}>
            <Media>
            <img src= {leader.image} style={styles} ></img>
            <Media body>
              <h5><p><b>{leader.name}</b></p></h5>
              <p>{leader.designation}</p>
              <p>{leader.description}</p>
            </Media>

            </Media>
          </div>
        )
    }

    );
    return (
      <div>
      {leadersConst}
      </div>
    );
  };


const LeaderdetailComponent = (props) => {


  const{
    leaders
    }=props;

    console.log(leaders);
  return(
    <div>
      <RenderLeader leaders={leaders}/>
    </div>

  )
}

export default LeaderdetailComponent;
