import { Pistola } from "../src/Pistola";
import { Ametralladora } from "../src/Ametralladora";

describe("Armas", () => {
  it("la pistola descuenta municiones en cada uso", () => {
    const pistola = new Pistola();
    expect(pistola.getMuniciones()).toBe(6);
    expect(pistola.usar()).toBe(100);
    expect(pistola.getMuniciones()).toBe(5);
  });

  it("la pistola no hace daño sin municiones", () => {
    const pistola = new Pistola();
    for (let i = 0; i < 6; i++) pistola.usar();
    expect(pistola.tieneMunicion()).toBe(false);
    expect(pistola.usar()).toBe(0);
  });

  it("la ametralladora tiene 30 municiones", () => {
    const ametralladora = new Ametralladora();
    expect(ametralladora.getMuniciones()).toBe(30);
    ametralladora.usar();
    expect(ametralladora.getMuniciones()).toBe(29);
  });
});