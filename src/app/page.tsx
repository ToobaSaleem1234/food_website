import Hero from "./components/hero";
import Signin from "./components/signin";
import Signout from "./components/signout";
import Payment from "./components/payment";
import Menu from "./components/menu";


export default function Home() {
  return (
    <div className="bg-slate-300">
      <Hero />
      <Menu />
      <Signin />
      <Signout/>
      <Payment/>
    </div>
  );
}
