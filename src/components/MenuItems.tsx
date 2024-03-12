import { MenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItem;
  addToCart: (menuItem: MenuItem) => void
};

const MenuItems = ({ menuItem, addToCart }: Props) => {
    return (
        <Card className="cursor-pointer " onClick={() => addToCart(menuItem)}>
            <CardHeader>
                <CardTitle>{menuItem.name}</CardTitle>
            </CardHeader>
            <CardContent>
                ₹{menuItem.price}
            </CardContent>
        </Card> 
    )
};

export default MenuItems;
