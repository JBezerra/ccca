import Order from "../../domain/entity/Order";
import ItemRepositoryMemory from "../../infra/repository/memory/ItemRepositoryMemory";
import SimulateFreightInput from "../dto/SimulateFreightInput";

export default class SimulateFreight {

    constructor (readonly itemRepository: ItemRepositoryMemory) {

    }

    async execute(input: SimulateFreightInput): Promise<number> {
        const { cpf, orderItems } = input;
        const order = new Order(cpf);
        for(const orderItem of orderItems){
            const item = await this.itemRepository.findById(orderItem.idItem)
            order.addItem(item, orderItem.quantity);
        }
        return order.getFreight();
    }
}