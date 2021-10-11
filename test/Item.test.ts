import Item from "../src/Item";

test("Deve criar um item", function () {
    const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000);
    expect(item.idItem).toBe(1);
});

test("Deve criar um item e calcular o volume", function () {
    const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3);
    const volume = item.getVolume();
    expect(volume).toBe(0.03);
});

test("Deve criar um item e calcular a densidade", function () {
    const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3);
    const volume = item.getDensity();
    expect(volume).toBe(100);
});

test("Deve criar um item e calcular o frete", function () {
    const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3);
    const volume = item.getShipping();
    expect(volume).toBe(30);
});

test("Deve criar um item e calcular o frete mínimo", function () {
    const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 10, 10, 10, 1);
    const volume = item.getShipping();
    expect(volume).toBe(10);
});