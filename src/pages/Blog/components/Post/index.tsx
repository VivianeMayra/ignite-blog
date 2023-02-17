import { PostContainer } from "./styles"

export function Post() {
  return (
    <PostContainer to="/post/1">
      <div>
        <strong>Coffe-Delivery</strong>
        <span>Há 1 semana</span>
      </div>
      <p>
        A aplicação de hoje foi um e-commerce de cafés, no qual os clientes
        podem selecionar as bebibas desejadas, fazer a escolha da sua forma de
        pagamento e cadastrar em um formulário bem intuitivo e prático o
        endereço para a entrega do seu pedido!
      </p>
    </PostContainer>
  )
}
