import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    private cpf: Cpf;
    private coupon: Coupon | undefined;
    private orderItems: OrderItem[];
    private shipping: number = 0;


    constructor (cpf: string, readonly issueDate: Date = new Date()) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    addItem(item: Item, quantity: number) {
        this.shipping += item.getShipping() * quantity;
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    }

    addCoupon (coupon: Coupon) {
        if(!coupon.isExpired(this.issueDate)){
            this.coupon = coupon;
        }
    }

    getTotal() {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total -= (total * this.coupon.percentage) / 100;
        }
        return total;
    }

    getShippingTotal() {
        return this.shipping;
    }
}
