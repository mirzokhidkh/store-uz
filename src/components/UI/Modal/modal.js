import React from 'react';

const Modal = (props) => (Form) => {
    const {title} = props;
    return (
        <div className="modal fade" id="auth">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">
                            {title}
                        </h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        {
                            Form
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;