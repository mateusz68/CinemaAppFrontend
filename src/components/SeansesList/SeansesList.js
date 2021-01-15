import React from 'react';
import * as MovieApi from './../../api/MovieApi';
import SeanseListItem from './SeanseListItem/SeanseListItem'

const SeanseList = (props) =>(
    <ul className="list-group">
        {console.log(props.items)}
        {props.items.map(item => (
            <SeanseListItem key={item.pk} {...item}></SeanseListItem>
        ))}
    </ul>
);


export default SeanseList;
