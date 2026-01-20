import { useNavigate } from "react-router-dom";
import loveBird from "../assets/bird_mail_icon.svg";
export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => {
          navigate("/main");
        }}
      >
        <div className=" flex flex-col items-center space-y-10 m-[20%] p-[5%] hover:cursor-pointer">
          <img className="animate-bounce" src={loveBird}></img>
          <h1 className="text-2xl">Clica</h1>
        </div>
      </div>
    </>
  );
}
