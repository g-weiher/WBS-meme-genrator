import { useState } from "react";

const MemeList = ({ memes, onSelect }) => {
  const [page, setPage] = useState(0);
  const pageSize = 20;

  return (
    <div>
      <div className="meme-list">
        {memes
          .slice(page * pageSize, page * pageSize + pageSize)
          .map((meme) => (
            <div
              key={meme.id}
              className="meme-card"
              onClick={() => onSelect(meme)}
            >
              <img src={meme.url}></img>
            </div>
          ))}
      </div>
      <div className="meme-list-controls">
        <button disabled={page <= 0} onClick={() => setPage(page - 1)}>
          -
        </button>
        {page}
        <button
          disabled={pageSize * (page + 1) >= memes.length}
          onClick={() => setPage(page + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default MemeList;
