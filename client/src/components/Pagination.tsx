import { useParams, Link } from "react-router-dom";

type TPagination = {
  count: number;
  endpoint: string;
}

const Pagination: React.FC<TPagination> = ({ count, endpoint } ): JSX.Element | null => {
  const { page } = useParams();
  const pagesLength = Math.floor(count / 10) + 1;

  return (
    <div className="Pagination flex-row">

      {/* first page */}
      {Number(page) !== 1 ? <Link to={`${endpoint}/1`}><i className="fa-solid fa-angles-left"></i></Link> : null }

      {/* prev page */}
      {Number(page) - 1 > 0 ? <Link to={`${endpoint}/${Number(page) - 1}`}><i className="fa-solid fa-angle-left"></i></Link> : null }

      {/* prev pages */}
      {Number(page) - 2 > 0 ? <Link to={`${endpoint}/${Number(page) - 2}`}>{Number(page) - 2}</Link> : null }
      {Number(page) - 1 > 0 ? <Link to={`${endpoint}/${Number(page) - 1}`}>{Number(page) - 1}</Link> : null }

      {/* current page */}
      <Link to={`${endpoint}/${page}`} className="active">{page}</Link>

      {/* next pages */}
      {Number(page) + 1 <= pagesLength ? <Link to={`${endpoint}/${Number(page) + 1}`}>{Number(page) + 1}</Link> : null }
      {Number(page) + 2 <= pagesLength ? <Link to={`${endpoint}/${Number(page) + 2}`}>{Number(page) + 2}</Link> : null }

      {/* next page */}
      {Number(page) + 1 <= pagesLength ? <Link to={`${endpoint}/${Number(page) + 1}`}><i className="fa-solid fa-angle-right"></i></Link> : null }

      {/* last page */}
      {Number(page) !== pagesLength ? <Link to={`${endpoint}/${pagesLength}`}><i className="fa-solid fa-angles-right"></i></Link> : null }

    </div>
  );
};

export default Pagination;
