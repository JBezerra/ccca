import ValidateCoupon from "../../src/application/usecase/ValidateCoupon";
import CouponRepositoryMemory from '../../src/infra/repository/memory/CouponRepositoryMemory';

test("Deve validar um coupon válido", async function () {
    const input = {
        couponCode: "VALE20"
    };
    const validateCoupon = new ValidateCoupon(new CouponRepositoryMemory());
    const output = await validateCoupon.execute(input);
    expect(output).toBeTruthy();
});

test("Não deve validar um coupon inválido", async function () {
    const input = {
        couponCode: "VALE20EXPIRADO"
    };
    const validateCoupon = new ValidateCoupon(new CouponRepositoryMemory());
    const output = await validateCoupon.execute(input);
    expect(output).toBeFalsy();
});