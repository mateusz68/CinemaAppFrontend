import React from 'react';
import SeanseManageListItem from './SeanseManageListItem';

const SeanseManageList = (props) =>(
    <ul className="list-group">
        {props.seanses.map(seanse => (
            <SeanseManageListItem key={seanse.pk} seanse={seanse} showEditForm={props.showEditForm} showDeleteForm={props.showDeleteForm}/>
        ))}
    </ul>
);

export default SeanseManageList;
