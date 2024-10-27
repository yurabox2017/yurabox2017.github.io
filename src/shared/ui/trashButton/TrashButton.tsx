import React from 'react';
import ITrashButton from 'src/entities/interfaces/ITrashButton';


export const TrashButton = ({ counter }: ITrashButton) => {

  const TrashButtonComponent = (
    < button disabled className="btn btn-primary" >
      в корзину
    </button >
  )
  const CounterComponent = (
    <div className="input-group mb-3">
      <span className="input-group-text">-</span >
      <input type="text" className="form-control" value={counter} />
      <span className="input-group-text">+</span>
    </div >
  )
  return counter == 0 ?  TrashButtonComponent:CounterComponent
    
};
