import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-right text-surface/75 text-white">
      <div className="mx-6 py-10 text-center">
        <div className="grid-1 grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h6 className="mb-4 flex font-semibold uppercase justify-center  my-6">
              Horários de Funcionamento
            </h6>
            <div className="mb-6">
              <p className="">Seg a sex: 7h às 8h e das 18:30 as 21:30</p>
              <p className="">Sábados: 11h às 13h30 - alternados consultar data.</p>
            </div>
            <p>
              Rua Venâncio Aires, 434- Vila Pompéia / Perdizes - Cep: 05024−030
            </p>
          </div>
          
          <div className="flex sm:justify-center items-center">
            <div className="h-48 w-56">
              <Image
                src={"/logo.png"}
                alt="Logo andrei jiu jitsu"
                fill={true}
                className="!static"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center flex items-center justify-end">
        <div className="flex justify-self-center">
          <span className="mx-2 max-sm:hidden">© 2007 Copyright: </span>
          <p className="font-semibold max-sm:text-left">AndreiBJJ</p>
        </div>
        <div className="flex items-center justify-center p-6  lg:justify-end">
          <div className="flex justify-end">
            <Link
              href="https://www.facebook.com/andreijiujitsu/"
              className="me-6 [&>svg]:h-4 [&>svg]:w-4"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </Link>
            <Link
              href="https://g.co/kgs/App9Lmz"
              className="me-6 [&>svg]:h-4 [&>svg]:w-4"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/equipe_andreibjj/"
              className="me-6 [&>svg]:h-4 [&>svg]:w-4"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
