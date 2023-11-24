import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {

  const { name, description, price,  quantity ,sku, images} = product;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [metal, setMetal] = useState('Oro');
  const [opinion, setOpinion] = useState(0);
  const [buy, setBuy] = useState(false);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleMetalChange = (e) => {
    setMetal(e.target.value);
  };

  const handleOpinionChange = (newOpinion) => {
    setOpinion(newOpinion);
  };

  const handleBuyChange = () => {
    setBuy(true);
  };


  return (

    <div className="product-detail">

      <div className="product-images">

        <div className="main-image">
          <img src={`images/${selectedImage}`} alt={name} />
        </div>

        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={`images/${image}`}
              alt={name}
              className={selectedImage === image ? 'thumbnail selected' : 'thumbnail'}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>

      </div>

      <div className="product-info">

        <h1>{name}</h1>

        <p className="description">{description}</p>
        <br />
        <p className="price">Precio: ${price}</p>
        <br />
        <p>Cantidad disponible: {quantity}</p>
        <br />
        <p className="sku">SKU: {sku}</p>
        <br />

        <div>
          <label>
            Oro
            <input
              type="radio"
              value="Oro"
              checked={metal === 'Oro'}
              onChange={handleMetalChange}
            />
          </label>
          <label>
            Plata
            <input
              type="radio"
              value="Plata"
              checked={metal === 'Plata'}
              onChange={handleMetalChange}
            />
          </label>
        </div>
        <br />

        <div>
          <p>Opiniones de los usuarios:</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= opinion ? 'star-filled' : 'star'}
                onClick={() => handleOpinionChange(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

          <div className='buy'>
            <button className="button" onClick={handleBuyChange}>
              comprar 
            </button>
            {buy && <p>¡Gracias por su compra!</p>}
          </div>

      </div>

    </div>
  );
};

export default ProductDetail;
