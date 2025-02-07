import React, { memo, useState } from 'react';
import { CartButton } from '../cartButton';
import { RootState } from 'src/features/store/store';
import { useSelector } from 'react-redux';
import { Product as ProductEntity } from 'src/entities/types/product';
import Modal from '../modals/modal/Modal';
import { FormProduct } from './formProduct/FormProduct';
import { useDeleteProductMutation } from 'src/services/api/productApi.slice';

export const Product = memo(function ShortProduct(product: ProductEntity) {
  const [visible, setVisible] = useState(false);
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const cartItems = useSelector((s: RootState) => s.rootReducer.cart.items);
  const isAdmin = useSelector((s: RootState) => s.rootReducer.user?.profile?.isAdmin);
  const item = cartItems.find((item) => item.id === product.id);

  const handleEditProduct = () => {
    setVisible(true);
  };
  const handleDeleteProduct = () => {
    deleteProduct(product.id);
  };
  const handleClosed = () => {
    setVisible(false);
  };

  const modal = (
    <Modal header="Редактировать товар" visible={visible} onClose={handleClosed}>
      <FormProduct product={product} setUnVisible={handleClosed} />
    </Modal>
  );

  return (
    <>
      <div className="card text-center" style={{ width: '15rem', height: '25rem' }}>
        <img
          src={product.photo ?? '/no-pictures.png'}
          className="card-img-top"
          alt="..."
          style={{ objectFit: 'contain', height: '10rem' }}
        />
        <div className="card-body">
          <h5 className="card-title">Название: {product.name}</h5>
          <div className="overflow-y-hidden" style={{ height: '100px' }}>
            <p className="card-subtitle ">Описание: {product.desc}</p>
          </div>
        </div>
        <div className=" pb-2">
          <p className="card-text text-muted ">Цена: {product.price}</p>
          {isAdmin ? (
            <div className="btn-group">
              <button className="btn btn-secondary btn-sm" disabled={isLoading} onClick={handleEditProduct}>
                Редактировать
              </button>
              <button className="btn btn-danger btn-sm" disabled={isLoading} onClick={handleDeleteProduct}>
                Удалить
              </button>
            </div>
          ) : (
            <CartButton id={product.id} quantity={item?.quantity ?? 0} />
          )}
        </div>
      </div>
      {visible && modal}
    </>
  );
});
