/** @jsxImportSource @emotion/react */
"use client";

import { Style } from "./Style";

type propsType = {
  page: number;
  handler: (page: number) => void;
};

const Pagination = ({ page, handler }: propsType) => {
  return (
    <div className="pagination" css={Style}>
      <button className="prev" style={{ opacity: page === 1 ? "0.2" : 1 }}>
        &lt;
      </button>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return (
            <li
              key={index}
              className={item === page ? "page-item active" : "page-item"}
            >
              <button
                onClick={() => {
                  if (item < 3) {
                    handler(item);
                  }
                }}
              >
                {item}
              </button>
            </li>
          );
        })}
        <li className="page-item dots">...</li>
        <li className="page-item">
          <a href="#" className="page-link">
            36
          </a>
        </li>
      </ul>
      <button className="next" style={{ opacity: page === 2 ? "0.2" : 1 }}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
