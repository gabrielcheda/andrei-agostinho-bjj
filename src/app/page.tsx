import Image from "next/image";
import Link from "next/link";
import { FaShower } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { PiLockers } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { PiSecurityCameraBold } from "react-icons/pi";
import { GiSofa } from "react-icons/gi";
import { MdDirectionsBike } from "react-icons/md";

export default function Home() {
  return (
    <>
      <main className="flex flex-col space-y-8 mb-25">
        <div className="w-full  max-sm:hidden ">
          <Image
            src="https://gabrielcheda.github.io/andrei-agostinho-bjj/PHOTO-2025-03-17-13-43-19.jpg"
            alt={""}
            width={0}
            height={600}
            fill={false}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="opacity-85 w-screen hover:opacity-100 hover:transition-opacity delay-200 duration-300 ease-in-out"
          />
        </div>

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
            <h2 className="text-3xl italic max-sm:text-[24px]">
              Agende sua aula
            </h2>
            <h2 className="text-5xl text-blue-400 italic font-bold max-sm:text-4xl">
              EXPERIMENTAL
            </h2>
            <p className="text-[15px]">
              O Jiu-Jitsu é uma arte marcial que desenvolve força, técnica e
              disciplina, além de ser um excelente exercício para o corpo e a
              mente. Venha experimentar uma aula gratuita e descubra na prática
              como ele pode transformar sua vida! Agende agora e comece sua
              jornada.
            </p>
            <div className="my-5">
              <Link
                key="contatos"
                href="https://wa.me/5511956083860?text=Oi%2C%20quero%20conhecer%20a%20academia!"
                aria-current="page"
                className="text-black hover:bg-blue-400 
                focus:ring-4 
                outline-2
                focus:ring-blue-300 
                font-medium 
                text-xs 
                px-5 
                py-2.5 
                hover:font-bold
                hover:text-white
                 focus:outline-none "
              >
                AGENDE AGORA
              </Link>
            </div>
          </div>
          <Image
            src="https://gabrielcheda.github.io/andrei-agostinho-bjj/lizardo-faixa.png"
            alt={""}
            width={0}
            height={250}
            sizes="50%"
            className="w-72 h-75% mx-6 shadow-2xl rounded-2xl"
          />
        </section>

        <div className="w-full max-sm:hidden ">
          <Image
            src="https://gabrielcheda.github.io/andrei-agostinho-bjj/treino-meninas.jpg"
            alt={""}
            width={0}
            height={600}
            fill={false}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="opacity-85 w-screen hover:opacity-100 hover:transition-opacity delay-200 duration-300 ease-in-out"
          />
        </div>
        <section className="mx-auto max-w-7xl max-sm:width-full sm:my-32 max-sm:max-h-none max-sm:my-5 max-sm:max-w-none md-max:px-2 max-sm:flex-col max-sm:items-center sm:px-6 lg:px-8">
          <div className="space-y-2 max-sm:w-full max-sm:text-center max-sm:px-6">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-5xl text-blue-400 italic font-bold max-sm:text-4xl">
                ESPAÇO
              </h2>
              <p className="w-3/4">
                Treine em um espaço de alto nível, nossa academia oferece um ambiente
                estruturado e acolhedor, onde o Jiu-Jitsu se torna mais do que
                uma arte marcial é um estilo de vida.
              </p>
              <p className="text-2xl font-bold">
                VENHA CONHECER!
              </p>
            </div>
            <div className="flex justify-center flex-col my-5 space-y-6 ">
              <p>Confira nossa infraestrutura:</p>
              <div className="grid grid-cols-3 gap-5">
                <div className="justify-items-center">
                  <PiLockers className="text-blue-400" size={50} />
                  Armários
                </div>
                <div className="justify-items-center">
                  <FaWifi className="text-blue-400" size={50} />
                  WiFi
                </div>
                <div className="justify-items-center">
                  <FaShower className="text-blue-400" size={50} />
                  Chuveiro
                </div>
                <div className="justify-items-center">
                  <GiShoppingCart className="text-blue-400" size={50} />
                  Produtos
                </div>
                <div className="justify-items-center">
                  <PiSecurityCameraBold className="text-blue-400" size={50} />
                  Segurança
                </div>
                <div className="justify-items-center text-center">
                  <GiSofa className="text-blue-400" size={50} />
                  Espaço de espera
                </div>
                <div className="justify-items-center text-center">
                  <MdDirectionsBike className="text-blue-400" size={50} />
                  Estacionamento de bike
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
