import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, _id) => {
        return <SearchResult result={result} key={_id} />;
      })}
    </div>
  );
};
