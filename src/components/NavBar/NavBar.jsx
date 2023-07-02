import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <div className="flex flex-col gap-y-8 xl:flex xl:flex-row xl:justify-between items-center">
      <div className="logo xl:flex xl:flex-row">
        <h1 className="text-3xl font-black cursor-pointer">Herbolario <br /><span className="marca">Cyberdietoterapia</span></h1>
      </div>
      <nav className="w-full xl:w-auto">
        <ul className="flex flex-col gap-y-2 md:w-full md:flex-row md:justify-between lg:justify-around text-2xl xl:gap-x-12 2xl:gap-x-24 font-medium">
          <li><a className="cursor-pointer">Todas las Categorías</a></li>
          <li><a className="cursor-pointer">Control Peso</a></li>
          <li><a className="cursor-pointer">Plantas</a></li>
          <li><a className="cursor-pointer">Blog Noticias</a></li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  )
}

export default NavBar
