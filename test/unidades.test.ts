import { Soldado } from "../src/Soldado";
import { Tanque } from "../src/Tanque";
import { Buque } from "../src/Buque";

describe("Vida de las unidades", () => {
  it("el soldado muere de un disparo", () => {
    const soldado = new Soldado();
    expect(soldado.estaVivo()).toBe(true);
    soldado.recibirDisparo(100);
    expect(soldado.estaVivo()).toBe(false);
  });

  it("el tanque muere con 2 disparos", () => {
    const tanque = new Tanque();
    tanque.recibirDisparo(100);
    expect(tanque.estaVivo()).toBe(true);
    tanque.recibirDisparo(100);
    expect(tanque.estaVivo()).toBe(false);
  });

  it("el buque muere con 3 disparos", () => {
    const buque = new Buque();
    buque.recibirDisparo(100);
    buque.recibirDisparo(100);
    expect(buque.estaVivo()).toBe(true);
    buque.recibirDisparo(100);
    expect(buque.estaVivo()).toBe(false);
  });
});