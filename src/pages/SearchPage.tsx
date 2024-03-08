import { usesearchRestaurants } from "@/api/restaurantApi";
import Loading from "@/components/Loading";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { restaurants, isLoading } = usesearchRestaurants(city);

  if (isLoading) {
    return <Loading />;
  }

  if (!restaurants?.data || !city) {
    return <span>No Data Found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div>Cuisines here</div>
      <div id="main-content" className="flex flex-col gap-5">
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
            <SearchResultInfo total={restaurants.pagination.total} city={city}/>
            <h1>Dropdown here</h1>
        </div>
        {restaurants.data.map((restaurant) => (
            <SearchResultCard restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
