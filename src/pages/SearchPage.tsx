import { usesearchRestaurants } from "@/api/restaurantApi";
import Loading from "@/components/Loading";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type searchState = {
  searchQuery: string;
  page: number
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<searchState>({
    searchQuery: "",
    page: 1,
  });
  const { restaurants, isLoading } = usesearchRestaurants(searchState, city);

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }))
  }

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
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeholder="Search by restaurant name or cuisine"
          onReset={resetSearch}
        />
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <SearchResultInfo total={restaurants.pagination.total} city={city} />
          <h1>Dropdown here</h1>
        </div>
        {restaurants.data.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} />
        ))}
        <PaginationSelector page={restaurants.pagination.page} pages={restaurants.pagination.pages} onPageChange={setPage} />
      </div>
    </div>
  );
};

export default SearchPage;
