import { useState } from "react";
import { IResults } from "../../dataTypes";

const GameAdditions = ({ additionsData }: { additionsData: IResults[] }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="Game-additions" onClick={() => setOpen(!open)}>
        <h3>DLC packs for this game</h3>
        <i className="fa-solid fa-caret-down"></i>
        <div
          className={
            open ? "Game-additions-wrapper active" : "Game-additions-wrapper"
          }
        >
          {additionsData.map((item) => {
            const { name, id } = item;
            return (
              <a href={`/game/${id}`} key={id}>
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GameAdditions;
