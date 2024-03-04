import tallerT from "../Assest/tallerTriagulo.jpg";
export default function WhatWeBest() {
  return (
    <div className="h-screen bg-white relative">
      <div
        style={{ "--image-url": `url(${tallerT})` }}
        className="absolute h-screen w-screen bg-black text-black text-right clip-triangulo-top-r bg-[image:var(--image-url)] bg-cover z-10"
      ></div>
      <div className="absolute w-screen h-screen bg-white  clip-triangulo-bot-r  z-0">
        <div className="h-screen grid grid-flow-col grid-cols-7 grid-rows-4 items-center justify-items-center">
          <h3 className="h-auto w-auto text-black font-bold z-0 col-start-1 col-end-5 row-start-1 row-end-3 text-4xl mb-10">
            ¿Quienes somos?
          </h3>
          <p className=" h-auto w-full row-start-2 row-end-4 col-start-2 col-end-5 text-2xl">
            Ha estado en funcionamiento en la ciudad de <b>Cúcuta</b> por más de
            <b>25 años</b>, Se ofrece el servicio de venta de repuestos
            originales de marca Hero y Honda, junto con el servicio técnico
            autorizado de motocicletas Hero y Honda y servicio técnico de todo
            tipo de motocicletas.
          </p>          
        </div>
      </div>
    </div>
  );
}
