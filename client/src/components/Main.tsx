import { useState, useEffect, PropsWithChildren } from "react";
import Hero from "./Hero";

const Main = () => {

  const [heroData, setHeroData] = useState(null);

  console.log('lmao', heroData)
  
  useEffect(() => {
    fetchData();
  }, []);
  
  async function fetchData() {
    const url = 'http://localhost:5000/hero'
    const res = await fetch(url);
    const data = await res.json();

    setHeroData(data);
  }

  return (
    <div className="Main">
      <div className="container">
        {heroData &&
          <Hero data={heroData} />
        }
      </div>
    </div>
  )
}

export default Main