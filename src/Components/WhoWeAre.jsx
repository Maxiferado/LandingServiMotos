import tallerT from "../Assest/tallerTriagulo.jpg";
export default function WhoWeAre() {
  return (
    <div className="h-screen bg-white relative">
      <div
        style={{ "--image-url": `url(${tallerT})` }}
        className="absolute h-screen w-screen bg-black text-black text-right clip-triangulo-bot bg-[image:var(--image-url)] bg-cover z-10"
      ></div>
      <div className="absolute w-screen h-screen bg-white flex justify-end clip-triangulo-top z-0">
      <div className="h-screen flex flex-col text-center items-center justify-center gap-5">
        <h3 className="w-1/4 text-black font-bold z-0 bg-slate-300">
          Quienes somos
        </h3>
        <p className="w-1/4 bg-slate-500 ">
          Ha estado en funcionamiento en la ciudad de Cúcuta por más de 25 años,
          Se ofrece el servicio de venta de repuestos originales de marca Hero y
          Honda, junto con el servicio técnico autorizado de motocicletas Hero y
          Honda y servicio técnico de todo tipo de motocicletas.
        </p>
        </div>
      </div>
    </div>
  );
}
