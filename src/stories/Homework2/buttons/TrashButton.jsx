

function TrashButton({ counter }) {
    return (
        (counter == 0 ?
            <button disabled className="btn btn-primary">в корзину</button> :
            <div class="input-group mb-3">
                <span class="input-group-text">-</span>
                <input type="text" class="form-control" value={counter} />
                <span class="input-group-text">+</span>
            </div>
        )
    )
}
export default TrashButton;