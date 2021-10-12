import SimulateFreight from "../../src/application/usecase/SimulateFreight";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";

test("Deve simular um frete válido", async function () {
    const input = {
        cpf: "847.903.332-05",
        orderItems: [
            {
                idItem: 1,
                quantity: 1
            },
            {
                idItem: 2,
                quantity: 1
            },
            {
                idItem: 3,
                quantity: 3
            }
        ]
    };
    const simulateFreight = new SimulateFreight(new ItemRepositoryMemory());
    const output = await simulateFreight.execute(input);
    expect(output).toBe(260);
});