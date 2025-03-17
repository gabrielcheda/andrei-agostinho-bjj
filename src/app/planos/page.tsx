import ZoomImage from "@/components/zoom-image";

export default function Planos() {
  return (
    <main className="w-1/4 h-1/4 my-6">

      <ZoomImage
        src={"/planos-modalidades.png"}
        alt="Contem os valores dos planos"
      />
    </main>
  );
}
