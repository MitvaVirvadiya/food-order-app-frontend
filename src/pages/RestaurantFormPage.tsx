import {
  useCreateRestaurant,
  useGetRestaurant,
  useGetRestaurantOrder,
  useUpdateRestaurant,
} from "@/api/restaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RestaurantForm from "@/forms/restaurant-form/RestaurantForm";

const RestaurantFormPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateRestaurant();
    const { orders } = useGetRestaurantOrder()

  const isEditing = !!restaurant

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent value="orders" className="space-y-5 bg-gray-50 p-10 rounded-lg">
        <h2 className="text-2xl font-bold">{orders?.length} Active Orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order}/>
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <RestaurantForm
          restaurant={restaurant}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default RestaurantFormPage;
