import mainLogo from "../Assest/mainLogo.png";
export default function DividerBrands() {
  return (
    <div className="sombra-magica h-20 flex justify-center items-center">
      <ul className="flex w-screen justify-around">
        <a href="/#">
          <li><img className="h-16" src={mainLogo} alt="" /></li>
        </a>
        <a href="/#">
          <li><img  className="h-16"  src={mainLogo} alt="" /></li>
        </a>
        <a href="/#">
          <li><img  className="h-16" src={mainLogo} alt="" /></li>
        </a>
      </ul>
    </div>
  );
}
