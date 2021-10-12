import CouponRepositoryMemory from "../../infra/repository/memory/CouponRepositoryMemory";

export default class ValideCoupon{

    constructor (readonly couponRepositoryMemory: CouponRepositoryMemory) {

    }

    async execute(input: any): Promise<any> {
        const code = input.couponCode;
        const coupon = await this.couponRepositoryMemory.findByCode(code);
        return !coupon.isExpired();
    }
}