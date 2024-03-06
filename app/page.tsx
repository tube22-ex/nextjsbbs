import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";

//export const port = "http://localhost:3000";

async function  getBBSAllData(){
  const url = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000'
  console.log(`https://${url}/api/post`);
  const response = await fetch(`https://${url}/api/post`,{
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
