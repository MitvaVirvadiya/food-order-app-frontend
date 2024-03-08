import { usesearchRestaurants } from "@/api/restaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { restaurants } = usesearchRestaurants(city);

  return (
    <div>
      <h1>
        user search by {city} -{" "}
        <span>
          {restaurants?.data.map((restaurant) => (
            <span>
              {restaurant.restaurantName}, {restaurant.city}{" "}
            </span>
          ))}
        </span>{" "}
      </h1>
    </div>
  );
};

export default SearchPage;
