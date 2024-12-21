import "@/stories/atoms/pagination/pagination.scss";
const Pagination = () => {
  return (
    <div className="pagination">
      <button className="prev">&lt;</button>
      <ul>
        <li className="page-item  active">1</li>
        <li className="page-item">2</li>
        <li className="page-item">3</li>
        <li className="page-item">4</li>
        <li className="page-item">5</li>
        <li className="page-item">6</li>
        <li className="page-item">7</li>
        <li className="page-item dots">...</li>
        <li className="page-item">
          <a href="#" className="page-link">
            36
          </a>
        </li>
      </ul>
      <button className="next">&gt;</button>
    </div>
  );
};

export default Pagination;
