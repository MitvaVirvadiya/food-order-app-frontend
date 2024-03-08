import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  return (
    <div>
      <h1>user search by {city}</h1>
    </div>
  );
};

export default SearchPage;
