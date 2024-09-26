
import PropTypes from 'prop-types';
function TrashButton({ counter }) {
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
TrashButton.propTypes = {
    counter: PropTypes.number
};
export default TrashButton;