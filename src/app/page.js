import Header from "@/components/header/Header";
import Books from "@/components/home/Books";
import Main from "./Main/page";
import ASide from "@/components/home/ASide";

export default function Home() {
  return (
    <div className="">
      
      {/* <ASide /> */}

      <div>   
        <Header />
      {/* <ASide /> */}

        <Main />
      </div>
      
    </div>
  );
}
