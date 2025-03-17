import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <>
      <main className="flex flex-col space-y-8 mb-25">
        <section
          className="mx-auto max-w-7xl 
        max-sm:width-full 
        max-sm:max-h-none 
        max-sm:my-5 
        max-sm:max-w-none 
        md-max:px-2 
        W-1/2 
        flex 
        max-sm:flex-col 
        max-sm:items-center 
        sm:px-6 
        lg:px-8 
        justify-center
        sm:my-32"
        >
          <div className="space-y-2 max-sm:w-full max-sm:text-center max-sm:px-6">
            <div className="max-sm:w-full max-sm:text-center max-sm:px-6">
              <h2 className="text-5xl text-blue-400 italic font-bold max-sm:text-4xl">
                Andrei Agostinho
              </h2>
              <h2 className="text-3xl italic max-sm:text-[24px]">
                Fundador e head coach
              </h2>
              <p className="text-[15px] mb-6">
                Andrei Agostinho é um renomado professor e competidor de
                Jiu-Jitsu brasileiro, detentor da faixa-preta 5º grau. Líder da
                equipe Andrei Jiu-Jitsu, filiada à Barbosa Jiu-Jitsu B9, ele é
                reconhecido por sua habilidade técnica e contribuições ao
                esporte.
              </p>
              <p className="text-[15px] mb-6">
                Ao longo de sua carreira, Andrei conquistou diversos títulos
                importantes. No Campeonato Paulista de 2021, por exemplo, ele
                disputou a final, evidenciando sua consistência em competições
                de alto nível.Além disso, no Mundial de Jiu-Jitsu de 2009,
                Andrei se destacou ao conquistar o título, reforçando sua
                reputação no cenário nacional.{" "}
              </p>

              <p className="text-[15px] mb-6">
                Como instrutor, Andrei compartilha seu conhecimento por meio de
                aulas e seminários. Ele demonstrou técnicas avançadas, como
                finalizações a partir da meia-guarda, contribuindo para o
                desenvolvimento de outros praticantes. Em entrevistas, Andrei
                discute sua trajetória no Jiu-Jitsu e oferece insights sobre as
                regras competitivas atuais, evidenciando seu compromisso com a
                evolução do esporte.
              </p>

              <div className="italic font-bold">
                <p>Campeonato Sul-Americano de 2024 🏆</p>
                <p>Campeonato Paulista: 🏆 🏆 🏆</p>
                <p>Campeonato Sul-Americano: 🏆</p>
                <p>Curitiba: 🏆</p>
              </div>
              <div className="my-6">
                <p>Para saber mais visite nosso canal no youtube:</p>
                <p>
                  <Link
                    href="https://www.youtube.com/@andreijiujitsu8720"
                    target="_blank"
                    className="hover:text-blue-400 underline"
                  >
                    https://www.youtube.com/@andreijiujitsu8720
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <Image
            src="https://gabrielcheda.github.io/andrei-agostinho-bjj/andrei-sozinho.jpg"
            alt={""}
            width={0}
            height={250}
            sizes="50%"
            className="w-72 h-full mx-6 shadow-2xl"
          />
        </section>
      </main>
    </>
  );
}
