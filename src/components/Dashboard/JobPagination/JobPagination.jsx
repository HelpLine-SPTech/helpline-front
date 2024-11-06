import React, { useCallback, useEffect, useState } from "react";
import "./JobPagination.css";

function JobPagination({ currentPage, totalPages, pageSize, onPageSizeChange, query, setQuery }) {
  const [pages, setPages] = useState([]);

  const isLastPage = currentPage >= totalPages;
  const isFirstPage = currentPage <= 1;

  const createPagination = useCallback((maxVisiblePages) => {
    const pagination = [];
    if (totalPages <= 1) {
      pagination.push(1);
      setPages(pagination);
      return;
    }

    maxVisiblePages = Math.min(Math.max(1, maxVisiblePages), totalPages);
    let start = currentPage - Math.floor(maxVisiblePages / 2);
    let end = currentPage + Math.floor(maxVisiblePages / 2);

    if (start < 1) {
      start = 1;
      end = Math.min(totalPages, start + maxVisiblePages - 1);
    }
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pagination.push(i);
    }
    setPages(pagination);
  }, [currentPage, totalPages]);

  const previous = () => {
    setQuery(query => {
      query.set('page', currentPage - 1)
      return query
    })
  }

  const next = () => {
    setQuery(query => {
      query.set('page', currentPage + 1)
      return query
    })
  }

  useEffect(() => {
    createPagination(7);
  }, [createPagination]);

  return (
    <div className="d-flex">
      <select
        name="page-size"
        className="page-size-input mr-2"
        onChange={onPageSizeChange}
        value={pageSize}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <ul className="pagination">
        <li
          className={`pagination-element font-league ${isFirstPage ? "pagination-element-disabled" : ""}`}
          onClick={(e) => !isFirstPage && previous()}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            Anterior
          </span>
        </li>
        {pages.map((page, i) => (
          <li
            key={i}
            className={`pagination-element font-league ${page === currentPage ? "current-page" : ""}`}
            onClick={(e) => setQuery(query => {
              query.set('page', page); 
              return query 
            })}
          >
            <span
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                lineHeight: 1.8,
              }}
            >
              {page}
            </span>
          </li>
        ))}
        <li
          className={`pagination-element font-league ${isLastPage ? "pagination-element-disabled" : ""}`}
          onClick={(e) => !isLastPage && next()}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            Próximo
          </span>
        </li>
      </ul>
    </div>
  );
}

export default JobPagination;
