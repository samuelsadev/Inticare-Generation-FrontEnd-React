import React from 'react';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProduto.css'
import FormularioProduto from '../formularioProduto/FormularioProduto';

function ModalProduto() {
  return (
    <>
      <Popup 
      trigger={<button className='home-button'>Novo Produto</button>} modal>
        <div>
          <FormularioProduto />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;