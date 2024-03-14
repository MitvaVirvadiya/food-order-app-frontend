import { Order } from "@/types";
import { Progress } from "./ui/progress";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getEstimatedDelivery = () => {
    const date = new Date(order.createdAt);

    date.setMinutes(date.getMinutes() + order.restaurant.estimatedDeliveryTime);

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hour}:${paddedMinutes}`;
  };

  return (
    <>
      <h1 className="text-4xl font-bold flex flex-col md:flex-row md:justify-between gap-5 tracking-tighter">
        <span>Order Status: {order.status}</span>
        <span>Expected by: {getEstimatedDelivery()}</span>
      </h1>
      <Progress className="animate-pulse" value={50}/>
    </>
  );
};

export default OrderStatusHeader;
