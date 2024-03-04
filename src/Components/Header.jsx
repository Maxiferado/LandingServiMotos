import mainLogo from "../Assest/mainLogo.png";
import backImage from "../Assest/bannerMain.jpg"
export default function Header() {
  return (
    <header style={{'--image-url': `url(${backImage})`}}  className="h-screen bg-[image:var(--image-url)]">
      <nav className="flex justify-between">
        <img className="h-24 ml-10 mt-2" src={mainLogo} alt="Servimotos Libertadores Logo" />
        <ul class="flex gap-10 m-10">
          <li>
            <a className="font-bold text-white text-xl hover:text-black" href="/#">¿Quienes Somos?</a>
          </li>
          <li>
            <a className="font-bold text-white text-xl hover:text-black" href="/#">Servicios</a>
          </li>
          <li>
            <a className="font-bold text-white text-xl hover:text-black" href="/#">Repuestos</a>
          </li>
          <li>
            <a className="font-bold text-white text-xl hover:text-black" href="/#"> Tips para tú moto</a>
          </li>
          <li>
            <a className="font-bold text-white text-2xl  bg-[#cc4700ff] rounded-md p-2 hover:text-black hover:bg-[#e27c44]" href="/#">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
