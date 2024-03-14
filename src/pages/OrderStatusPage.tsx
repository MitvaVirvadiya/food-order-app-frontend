import { useGetOrders } from "@/api/orderApi";
import Loading from "@/components/Loading";
import OrderStatusDetails from "@/components/OrderStatusDetails";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const {orders, isLoading} = useGetOrders()

  if(isLoading){
    return <Loading />
  }

  if(!orders || orders.length === 0){
    return <div>There are no orders to display</div>
  }

  return (
      <div className="space-y-10">
        {orders.map((order) => (
            <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
                <OrderStatusHeader order={order}/>
                <div className="grid gap-10 md:grid-cols-2">
                    <OrderStatusDetails order={order}/>
                    <AspectRatio ratio={16/5}>
                        <img src={order.restaurant.imageUrl} alt={order.restaurant.restaurantName} className="w-full h-full object-cover rounded-md" />
                    </AspectRatio>
                </div>
            </div>
        ))}
      </div>
  )
}

export default OrderStatusPage;