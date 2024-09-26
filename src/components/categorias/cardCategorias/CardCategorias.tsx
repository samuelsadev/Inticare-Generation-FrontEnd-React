import React from 'react';
import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriasProps {
  categorias: Categoria[];
}

function CardCategorias({ categorias }: CardCategoriasProps) {
  return (
    <div className="space-y-2">
      <ul className="list-disc pl-5">
        {categorias.map((categoria) => (
          <li key={categoria.id} className="flex items-center justify-between p-1 bg-white rounded-lg">
            <Link to={`/produtos/categoria/${categoria.id}`} className="text-xl font-bold text-[#6C757D] hover:underline">{categoria.nome}
            </Link>
            <div className="flex items-center space-x-2 mt-4">
              <Link
                to={`/editarCategoria/${categoria.id}`}
                className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                Editar
              </Link>
              <Link
                to={`/deletarCategoria/${categoria.id}`}
                className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                Deletar
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardCategorias;
