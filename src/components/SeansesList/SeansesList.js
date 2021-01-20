import React from 'react';
import SeanseListItem from './SeanseListItem/SeanseListItem'
import PropTypes from 'prop-types';
const SeanseList = (props) => (
    <ul className="list-group">
        {props.items.map(item => (
            <SeanseListItem key={item.pk} {...item}></SeanseListItem>
        ))}
    </ul>
);

SeanseList.propTypes = {
    item : PropTypes.object
}

export default SeanseList;
