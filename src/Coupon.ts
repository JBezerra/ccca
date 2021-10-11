export default class Coupon {

    constructor (readonly code: string, readonly percentage: number, readonly expireDate?: Date) {
    }

    isExpired (today: Date = new Date()) {
        return this.expireDate && this.expireDate.getTime() < today.getTime();
    }
}
