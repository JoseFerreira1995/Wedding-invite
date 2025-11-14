import Card from "@/components/card";
import image from "../assets/4W8A9005.jpg";
import bgImage from "../assets/4W8A9242.jpg";
import { Calendar1Icon, MapPlusIcon, MessageCircleIcon } from "lucide-react";

export default function MainPage() {
  return (
    <>
      <section>
        <div className="relative">
          <div className="absolute sm: inset-0 mt-10">
            <h1 className="text-center text-amber-200 text-6xl">Inês e José</h1>
          </div>
          <div>
            <img className="w-full object-cover" src={bgImage}></img>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-10 mt-20 sm: flex-col">
          <div className=" bg-blue-200">
            <h2 className="text-center text-4xl m-5">
              Queremos convidar-vos para os nosso casamento!
            </h2>
            <p className="m-5 p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              error, quidem a molestiae ipsam laborum pariatur unde illum
              reiciendis? Velit sunt nulla veniam eveniet minima necessitatibus
              maiores reiciendis sapiente obcaecati?
            </p>
          </div>
          <div>
            <img className=" size-125" src={image}></img>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-5 sm: flex-col m-10 ">
          <div className="bg-blue-50 hover:bg-blue-100 active:scale-110">
            <Card title="Dia 11 de Julho" description="14h30"></Card>
            <Calendar1Icon></Calendar1Icon>
          </div>
          <div className="bg-blue-50 hover:bg-blue-100 active:scale-110">
            <Card title="Local" description="Quinta da Mota"></Card>
            <MapPlusIcon></MapPlusIcon>
          </div>
          <div className="bg-blue-50 hover:bg-blue-100 active:scale-110">
            <Card
              title="Confirmação"
              description="Até dia 30 de abril de 2026"
            ></Card>
            <MessageCircleIcon></MessageCircleIcon>
          </div>
        </div>
      </section>
    </>
  );
}
