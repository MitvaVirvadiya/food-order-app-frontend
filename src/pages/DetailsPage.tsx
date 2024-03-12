import { useGetRestaurantDetails } from "@/api/restaurantApi";
import Loading from "@/components/Loading";
import MenuItem from "@/components/MenuItems";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { MenuItem as menuItemType } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type cartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailsPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurantDetails(restaurantId);
  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  const addToCart = (menuItem: menuItemType) => {
    setCartItems((prevCartItem) => {
      const existingCartItem = prevCartItem.find(
        (cartItem) => cartItem._id === menuItem._id
      );

      let updatedCart;

      if (existingCartItem) {
        updatedCart = prevCartItem.map((cartItem) =>
          cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCart = [
          ...prevCartItem,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }

      return updatedCart;
    });
  };

  const removeFromCart = (cartItem: cartItem) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.filter((item) => item._id !== cartItem._id)

      return updatedCart
    })
  }

  if (isLoading || !restaurant) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <img
          src={restaurant.imageUrl}
          alt={restaurant.restaurantName}
          className="w-full h-full rounded-md object-cover"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
          <span className="text-2xl font-bold tracking-tight">Menu</span>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItem menuItem={menuItem} addToCart={() => addToCart(menuItem)}/>
          ))}
        </div>
        <div>
          <Card>
            <OrderSummary
              restaurant={restaurant}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
