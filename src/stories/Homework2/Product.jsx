import TrashButton from "./buttons/TrashButton";
function Product({ title, price, description }) {
    return (
        <div className="card text-center" style={{ width: '300px'}}>
            <img src="/free-icon-household-7029117.png" className="card-img-top" alt="..." style={{ objectFit: "none" }} />
            <div class="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
                <p className="card-text">{description}</p>
                <TrashButton counter={0} />
            </div>
        </div>
    );
}

export default Product;