import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return(
      <div>
        {props.profiles.map((profile,index) => <Card {...profile} key={index}/>)}
      </div>
    );
}

export default CardList;