import SameSeriesDesktop from "./SameSeriesDesktop";
import SameSeriesSlider from "./SameSeriesSlider";

const SameSeries = ({ data }: { data: [] }) => {
  const { width } = document.body.getBoundingClientRect();

  if (data && data.length > 0 && width >= 1024) {
    return (
      <>
        {data.length > 0 && width >= 1024 ? (
          <SameSeriesDesktop data={data} />
        ) : null}
      </>
    );
  }

  return <SameSeriesSlider data={data} />;
};

export default SameSeries;
