export default class Item {

    constructor (readonly idItem: number, readonly category: string, readonly description: string, readonly price: number, readonly width?: number, readonly height?: number, readonly depth?: number, readonly weight?: number) {
    }

    convertCentimetersToMeters (value: number) {
        return value/100;
    }

    getVolume () {
        const {width, height, depth} = this;
        if(width && height && depth){
            return this.convertCentimetersToMeters(width) *
            this.convertCentimetersToMeters(height) *
            this.convertCentimetersToMeters(depth);
        }
        return 0;
    }

    getDensity () {
        return this.weight ? this.weight/this.getVolume() : 0;
    }

    getShipping () {
        const DISTANCE = 1000;
        const shippingPrice = DISTANCE * this.getVolume() * (this.getDensity() / 100)
        return shippingPrice > 10 ? shippingPrice : 10;
    }
}
