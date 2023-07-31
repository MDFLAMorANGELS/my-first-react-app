import React from 'react';

const Customer = (props) => {
    const { firstName, lastName, avatar, job, phoneNumber } = props.data;
  
    return (
    <li class="card col-12 col-sm-9 col-md-5 col-xl-3 m-3 rounded-4" >
        <img class="card-img-top rounded-top-4" src={avatar} alt="Card  cap"/>
        <div class="card-body">
          <h5 class="card-title">{firstName} {lastName}</h5>
          <p class="card-text">{job}</p>
          <a href={`mailto:${lastName}.${firstName}@gmail.com`} class="btn btn-primary me-3">contact Mail</a>
          <a href={`tel:${phoneNumber}`} class="btn btn-primary">Contact Phone</a>
        </div>
    </li>
    );
  };

export default Customer;