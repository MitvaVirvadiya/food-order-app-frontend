import { useCreateRestaurant, useGetRestaurant } from "@/api/restaurantApi";
import RestaurantForm from "@/forms/restaurant-form/RestaurantForm";

const RestaurantFormPage = () => {
  const { createRestaurant, isLoading } = useCreateRestaurant();
  const { restaurant } = useGetRestaurant();

  return <RestaurantForm restaurant={restaurant} onSave={createRestaurant} isLoading={isLoading} />;
};

export default RestaurantFormPage;
