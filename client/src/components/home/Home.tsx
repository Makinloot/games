import { useState, useEffect, PropsWithChildren } from "react";
import Hero from "./Hero";
import Slider from "./Slider";
import Loading from "../Loading";
import { gameDataType } from "../../typesDesc";

const Home = () => {
  const [heroData, setHeroData] = useState<gameDataType[] | null>(null);
  const [sliderData, setSliderData] = useState<gameDataType[] | null>(null);

  useEffect(() => {
    const url = "http://localhost:5000/hero";
    const sliderUrl = "http://localhost:5000/slider";
    fetchData(url, setHeroData);
    fetchData(sliderUrl, setSliderData);
  }, []);

  async function fetchData(
    url: string,
    setter: React.Dispatch<React.SetStateAction<gameDataType[] | null>>
  ) {
    const res = await fetch(url);
    const data: gameDataType[] = await res.json();

    setter(data);
  }

  if (heroData && sliderData) {
    return (
      <div className="Home">
        <Hero data={heroData} />
        <Slider data={sliderData} />
      </div>
    );
  } else return <Loading />;
};

export default Home;
