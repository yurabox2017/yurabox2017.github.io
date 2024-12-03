import React from 'react';
function TrashProduct() {
  return (
    <div className="card text-center" style={{ width: '300px' }}>
      <img
        src="/free-icon-cleaning-9717764.png"
        className="card - img - top"
        alt="..."
        style={{ objectFit: 'none', height: '300px' }}
      />
      <div className="card-body">
        <button className="btn btn-danger">удалить</button>
      </div>
    </div>
  );
}
export default TrashProduct;
