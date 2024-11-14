import React from 'react';
import ITrashButton from 'src/entities/interfaces/ITrashButton';

export const TrashButton = ({ counter }: ITrashButton) => {
  if (!counter) {
    return (
      <button disabled className="btn btn-primary">
        в корзину
      </button>
    );
  }

  return (
    <div className="input-group mb-3">
      <span className="input-group-text">-</span>
      <input type="text" className="form-control" value={counter} readOnly />
      <span className="input-group-text">+</span>
    </div>
  );
};
