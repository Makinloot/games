import { useParams } from 'react-router-dom';

const Game = () => {
  
  const { id } = useParams();

  return (
    <div>
      <div className="container">
        GAME LMAO GAME LMAO
      </div>
    </div>
  )
}

export default Game