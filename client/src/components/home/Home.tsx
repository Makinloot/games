import { useState, useEffect, PropsWithChildren } from "react";
import Hero from "./Hero";
import Slider from "./Slider";
import Loading from "../Loading";
import { IGameListResults } from "../../dataTypes";

const Home = (): JSX.Element => {
  const [heroData, setHeroData] = useState<IGameListResults[] | null>(null);
  const [sliderData, setSliderData] = useState<IGameListResults[] | null>(null);

  useEffect(() => {
    const url = "/api/hero";
    const sliderUrl = "/api/slider";
    fetchData(url, setHeroData);
    fetchData(sliderUrl, setSliderData);
  }, []);

  async function fetchData(
    url: string,
    setter: React.Dispatch<React.SetStateAction<IGameListResults[] | null>>
  ) {
    const res = await fetch(url);
    const data = await res.json();

    setter(data);
  }

  if (heroData && sliderData) {
    const heroResults = heroData[0].results;
    const sliderResults = sliderData[0].results;
    return (
      <div className="Home">
        <Hero data={heroResults} />
        <Slider data={sliderResults} />
      </div>
    );
  } else return <Loading />;
};

export default Home;
