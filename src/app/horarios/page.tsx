import ZoomImage from "@/components/zoom-image";

export default function Horarios() {
  return (
    <main className="w-1/2 h-1/2">
      <ZoomImage
        src={"/horarios-andrei.jpg"}
        alt={"Grade de horários Andrei BJJ"}
      />
      {/* <Image width={300} height={300} className="h-screen w-screen" /> */}
    </main>
  );
}
