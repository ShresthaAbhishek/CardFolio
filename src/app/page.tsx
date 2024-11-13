import {CreditCard} from "./components/Card";
import { Navbar } from "./components/Card/navBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <CreditCard/>
    </main>
  );
}
