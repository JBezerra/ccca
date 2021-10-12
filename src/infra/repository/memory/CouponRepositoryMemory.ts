import Coupon from "../../../domain/entity/Coupon";
import CouponRepository from "../../../domain/repository/CouponRepository";

export default class CouponRepositoryMemory implements CouponRepository{
    coupons: Coupon[];

    constructor () {
        this.coupons = [
            new Coupon("VALE20", 20, new Date("2021-11-10")),
            new Coupon("VALE20EXPIRADO", 20, new Date("2021-09-10"))
        ]
    }

    async findByCode(code: string): Promise<Coupon> {
        const coupon = this.coupons.find(coupon => coupon.code === code);
        if(!coupon){
            throw new Error("Coupon not found")
        }
        return coupon;
    }
}