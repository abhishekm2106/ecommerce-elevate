import './product.scss'

const Product = ({ title, price, image }) => {
    return (
        <div className='card' >
            <h3>{title}</h3>
            <div className='price'><span className='price-text'>Price</span> {price}</div>
            <div className='image-div'>
                <img src={image} alt="" />
            </div>

        </div>
    )
}

export default Product;