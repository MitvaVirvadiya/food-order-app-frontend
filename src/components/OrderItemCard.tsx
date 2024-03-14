import { Order } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { orderStatusList } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
    const getDeliverTime = () => {
        const date = new Date(order.createdAt)

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${hours}:${paddedMinutes}`
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="grid md:grid-cols-4 gap-4 justify-between mb-3">
                    <div>
                        Customer Name:
                        <span className="font-normal ml-2">{order.deliveryDetails.name}</span>
                    </div>
                    <div>
                        Delivery Details:
                        <span className="font-normal ml-2">{order.deliveryDetails.address}, {order.deliveryDetails.city}</span>
                    </div>
                    <div>
                        Time:
                        <span className="font-normal ml-2">{getDeliverTime()}</span>
                    </div>
                    <div>
                        Total Amount:
                        <span className="font-normal ml-2">₹{order.totalAmount}</span>
                    </div>
                </CardTitle>
                <Separator />
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    {order.cartItems.map((item) => (
                        <span>
                            <Badge variant="outline" className="mr-2">{item.quantity}</Badge>
                            {item.name}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="status">What is the status of this order</Label>
                    <Select >
                        <SelectTrigger id="status">
                            <SelectValue placeholder="Order Status" />
                        </SelectTrigger>
                        <SelectContent>
                            {orderStatusList.map((status) => (
                                <SelectItem value={status.value}>{status.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
};

export default OrderItemCard;
