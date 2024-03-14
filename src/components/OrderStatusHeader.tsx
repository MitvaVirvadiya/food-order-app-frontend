import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { orderStatusList } from "@/config/order-status-config";

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

  const getOrderStatusInfo = () => {
    return (
      orderStatusList.find((status) => status.value === order.status) || orderStatusList[0]
    )
  }

  return (
    <>
      <h1 className="text-4xl font-bold flex flex-col md:flex-row md:justify-between gap-5 tracking-tighter">
        <span>Order Status: {getOrderStatusInfo().label}</span>
        <span>Expected by: {getEstimatedDelivery()}</span>
      </h1>
      <Progress className="animate-pulse" value={getOrderStatusInfo().progressValue}/>
    </>
  );
};

export default OrderStatusHeader;
