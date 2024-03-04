import CrossImg from "../Assest/crossOG.jpg";
export default function History() {
  return (
    <div className="h-screen w-auto">
      <div
        style={{ "--image-url": `url(${CrossImg})` }}
        className="absolute h-screen w-screen bg-black text-black text-right clip-triangulo-OG  bg-[image:var(--image-url)] bg-no-repeat bg-fixed bg-left bg- z-10"
      ></div>
      <div className="h-screen grid grid-flow-col grid-cols-7 grid-rows-4 items-center justify-items-center">
        <h3 className="h-auto w-auto text-black font-bold z-0 col-start-5 col-end-7 row-start-1 row-end-3 text-4xl mb-10">
        Detrás de nosotros
        </h3>
        <p className=" h-auto w-full row-start-2 row-end-4 col-start-5 col-end-7 text-2xl">
          La inspiración nace por tradición familiar, ya que desde pequeño se
          creció en un ambiente lleno de motos y de competencias de
          motocicletas, por legado familiar en la ciudad de Sogámoso, Boyacá. Es
          una tradición familiar de más de 60 años, comenzó desde el abuelito,
          el cual lo aprendió en Checoslovaquia después de vivir muchos años
          allá, una vez finalizada la guerra de Corea. Ya que fue veterano de la
          guerra, y llegó a Colombia en los 60´s, para comenzar ofreciendo sus
          servicios de arreglo de bicicletas y posterior a ello arreglo de
          motocicletas.
        </p>
      </div>
    </div>
  );
}
