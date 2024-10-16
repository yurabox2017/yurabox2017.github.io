import React from 'react';
import PropTypes from 'prop-types';
import ITrashButton from '../../../Interfaces/ITrashButton';

function TrashButton({ counter }: ITrashButton) {
    return (
        (counter == 0 ?
            <button disabled className="btn btn-primary">в корзину</button> :
            <div className="input-group mb-3">
                <span className="input-group-text">-</span>
                <input type="text" className="form-control" value={counter} />
                <span className="input-group-text">+</span>
            </div>
        )
    );
}
export default TrashButton;