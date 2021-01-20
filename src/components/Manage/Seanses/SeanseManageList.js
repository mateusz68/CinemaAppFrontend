import React from 'react';
import SeanseManageListItem from './SeanseManageListItem';
import PropTypes from 'prop-types'

const SeanseManageList = (props) =>(
    <ul className="list-group">
        {props.seanses.map(seanse => (
            <SeanseManageListItem key={seanse.pk} seanse={seanse} showEditForm={props.showEditForm} showDeleteForm={props.showDeleteForm}/>
        ))}
    </ul>
);

SeanseManageList.propTypes = {
    seanse : PropTypes.object,
    showEditForm : PropTypes.func,
    showDeleteForm : PropTypes.func
}

export default SeanseManageList;
