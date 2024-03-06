import { useCreateRestaurant } from "@/api/restaurantApi";
import RestaurantForm from "@/forms/restaurant-form/RestaurantForm";

const RestaurantFormPage = () => {
  const { createRestaurant, isLoading } = useCreateRestaurant();
  
  return <RestaurantForm  onSave={createRestaurant} isLoading={isLoading}/>
}

export default RestaurantFormPage;