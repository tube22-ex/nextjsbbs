import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";

//export const port = "http://localhost:3000";

async function  getBBSAllData(){
  const response = await fetch(`${process.env.PORT}/api/post`,{
    cache: "no-store",
  })
  
  const bbsAllData: BBSData[] = await response.json();

  return bbsAllData
}

export default async function Home() {

  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
