import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from "react-bootstrap-icons";

const DeleteForm = (props) => {
    const { deleteSeanse, onClose, seanse } = props;
    return (
        <div className="alertForm bg-secondary text-white rounded p-3">
            <span className="closeButton">
                <Icon.XCircleFill color="white" size={18} onClick={() => onClose()} />
            </span>
            <div>
                <Icon.Info size={60} color="white" />
                Czy napewno chcesz usunąć ten seans?
            </div>
            <div className="text-center">
                <Button variant="primary" className="m-2" onClick={() => onClose()}>Nie</Button>
                <Button variant="danger" className="m-2"
                    onClick={() => {
                        deleteSeanse(seanse.pk);
                        onClose();
                    }}>Tak</Button>
            </div>
        </div>
    );
};

export default DeleteForm;