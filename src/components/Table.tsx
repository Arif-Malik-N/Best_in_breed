import React from "react";
import type { TableProps } from "../utils/interfaces";

const Table: React.FC<TableProps> = React.memo(({ columns, dataSource }) => {
  const totalMinWidth = columns.reduce(
    (sum, col) => (col.minWidth ? sum + col.minWidth : sum + 0),
    0
  );

  return (
    <div className="w-full max-h-[500px] overflow-auto pl-3 pr-2 py-2">
      {/* Header */}
      <div
        className="flex font-semibold text-xs px-5"
        style={{ minWidth: `${totalMinWidth}px` }}
      >
        {columns.map(({ key, title, minWidth }) => (
          <div
            key={key}
            style={{ minWidth: `${minWidth}px` }}
            className="xl:flex-1 py-3"
          >
            {title}
          </div>
        ))}
      </div>

      {/* Body */}
      {dataSource.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex bg-gray-100 rounded-xl px-5 py-3 my-1 items-center text-sm min-w-max xl:min-w-full"
          style={{ minWidth: `${totalMinWidth}px` }}
        >
          {columns.map(({ key, minWidth, isIcon, isClickable }) => (
            <div
              key={key}
              style={{ minWidth: `${minWidth}px` }}
              className={`xl:flex-1 ${isIcon ? "flex items-center gap-2" : ""}`}
            >
              {isIcon ? (
                <>
                  <img
                    src={`https://i.pravatar.cc/32?img=${rowIndex + 1}`}
                    alt={row.name || ""}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-brand-blue underline">{row[key]}</span>
                </>
              ) : isClickable ? (
                <a href="#" className="text-brand-blue underline">
                  {row[key]}
                </a>
              ) : (
                row[key]
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});

export default Table;
