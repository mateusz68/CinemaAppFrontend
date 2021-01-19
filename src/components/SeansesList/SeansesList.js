import React from 'react';
import SeanseListItem from './SeanseListItem/SeanseListItem'

const SeanseList = (props) => (
    <ul className="list-group">
        {props.items.map(item => (
            <SeanseListItem key={item.pk} {...item}></SeanseListItem>
        ))}
    </ul>
);


export default SeanseList;
