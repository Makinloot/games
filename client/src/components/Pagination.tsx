import { useParams } from "react-router-dom";

type TPagination = {
  count: number;
  next: string | null;
  previous: string | null;
  endpoint: string;
}

const Pagination: React.FC<TPagination> = ({ count, next, previous, endpoint } ): JSX.Element | null => {
  const { page } = useParams();
  const pagesLength = Math.floor(count / 10) + 1;
  console.log('count', pagesLength)

  return (
    <div className="Pagination flex-row">

      {Number(page) - 1 > 0 ? <a href={`${endpoint}${Number(page) - 1}`}><i className="fa-solid fa-left-long"></i></a> : null }

      {Number(page) - 4 > 0 ? <a href={`${endpoint}${Number(page) - 4}`}>{Number(page) - 4}</a> : null }
      {Number(page) - 3 > 0 ? <a href={`${endpoint}${Number(page) - 3}`}>{Number(page) - 3}</a> : null }
      {Number(page) - 2 > 0 ? <a href={`${endpoint}${Number(page) - 2}`}>{Number(page) - 2}</a> : null }
      {Number(page) - 1 > 0 ? <a href={`${endpoint}${Number(page) - 1}`}>{Number(page) - 1}</a> : null }

      <a href={`${endpoint}${page}`} className="active">
        {page}
      </a>

      {Number(page) + 1 <= pagesLength ? <a href={`${endpoint}${Number(page) + 1}`}>{Number(page) + 1}</a> : null }
      {Number(page) + 2 <= pagesLength ? <a href={`${endpoint}${Number(page) + 2}`}>{Number(page) + 2}</a> : null }
      {Number(page) + 3 <= pagesLength ? <a href={`${endpoint}${Number(page) + 3}`}>{Number(page) + 3}</a> : null }
      {Number(page) + 4 <= pagesLength ? <a href={`${endpoint}${Number(page) + 4}`}>{Number(page) + 4}</a> : null }

      {Number(page) + 1 < pagesLength ? <a href={`${endpoint}${Number(page) + 1}`}><i className="fa-solid fa-right-long"></i></a> : null }

    </div>
  );
};

export default Pagination;
