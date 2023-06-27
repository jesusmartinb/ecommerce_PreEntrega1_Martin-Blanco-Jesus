const CartWidget = () => {
  return (
    <div className="carrito text-2xl font-medium xl:flex xl:flex-row cursor-pointer relative">
        <i className="fa-solid fa-cart-shopping xl:flex xl:flex-row"></i><span className="bg-white inline-block w-8 rounded-full absolute top-[-22px] left-7">3</span><span className="ms-8">Mi Carrito</span>
    </div>
  )
}

export default CartWidget
