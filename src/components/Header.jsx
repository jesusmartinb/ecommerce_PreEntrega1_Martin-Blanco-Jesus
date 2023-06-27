const Header = () => {
  return (
    <div className="header 3xl:flex 2xl:flex-row 2xl:justify-around">
        <div className="contactar lg:flex lg:flex-row lg:justify-around 2xl:min-w-[900px]">
            <div className="tel my-4 lg:my-0"><i className="fa-solid fa-phone"></i> 630831440
            </div>
            <div className="mail my-4 lg:my-0"><i className="fa-solid fa-envelope"></i> info@cyberdietoterapia.com</div>
            <div className="horario my-4 lg:my-0"><i className="fa-solid fa-clock"></i> L - V de 9:00 a 14:00 y de 17:00 a 20:00</div>
        </div>
        <div className="bienvenida lg:flex lg:flex-row lg:justify-around  2xl:min-w-[600px]">
            <div className="bienve text-2xl my-4">Bienvenido <span id="nombre-usuario" className="name"></span></div>
            <div className="cuenta my-4 text-2xl"><i className="fa-solid fa-user"></i> <button className="cursor-pointer" id="open_modal_register">Mi Cuenta</button></div>
        </div>
    </div>
  )
}

export default Header
