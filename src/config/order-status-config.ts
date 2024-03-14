import { OrderStatus } from "@/types";

type orderStatus = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const orderStatusList: orderStatus[] = [
  { label: "Placed", value: "placed", progressValue: 0 },
  { label: "Paid", value: "paid", progressValue: 25 },
  { label: "In Progress", value: "inProgress", progressValue: 50 },
  { label: "Out for Delivery", value: "outForDelivery", progressValue: 75 },
  { label: "Delivered", value: "delivered", progressValue: 100 },
];
