import { useState, useEffect, PropsWithChildren } from "react";
import Hero from "./Hero";
import Slider from "./Slider";

const Main = () => {
  const [heroData, setHeroData] = useState<[] | null>(null);
  const [sliderData, setSliderData] = useState<[] | null>(null);

  useEffect(() => {
    const url = "http://localhost:5000/hero";
    const sliderUrl = "http://localhost:5000/slider";
    fetchData(url, setHeroData);
    fetchData(sliderUrl, setSliderData);
  }, []);

  async function fetchData(
    url: string,
    setter: React.Dispatch<React.SetStateAction<[] | null>>
  ) {
    const res = await fetch(url);
    const data: [] = await res.json();

    setter(data);
  }

  return (
    <div className="Main">
      {(heroData && sliderData) && (
        <>
          <Hero data={heroData} />
          <Slider data={sliderData} />
        </>
      )}
    </div>
  );
};

export default Main;
