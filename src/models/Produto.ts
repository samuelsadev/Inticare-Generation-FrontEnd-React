import Categoria from './Categoria';
import Usuario from './Usuario'

export default interface Produto {
  id: number;
  nomeProduto: string;
  descricao: string;
  preco: number;
  quantidade: number;
  foto_produto: string; // Alterado para o nome correto da propriedade
  categoriaModel: Categoria | null;
  usuarioModel: Usuario | null;
}
