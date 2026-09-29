import { Buque } from "../src/Buque";
import { Escudo } from "../src/Escudo";
import { Soldado } from "../src/Soldado";
import { Tanque } from "../src/Tanque";

describe("guerrilla juego", () => {
  test("el soldado inicia con vida y sigue vivo", () => {
    const soldado = new Soldado();

    expect(soldado.estaVivo()).toBe(true);
    expect(soldado["vida"]).toBe(100);
  });

  test("el tanque pierde vida al recibir un disparo", () => {
    const tanque = new Tanque();

    tanque.recibirDisparo(50);

    expect(tanque.estaVivo()).toBe(true);
    expect(tanque["vida"]).toBe(150);
  });

  test("el buque queda sin vida después de un disparo fuerte", () => {
    const buque = new Buque();

    buque.recibirDisparo(500);

    expect(buque.estaVivo()).toBe(false);
    expect(buque["vida"]).toBe(0);
  });

  test("el escudo reduce el daño recibido", () => {
    const escudo = new Escudo(50);

    expect(escudo.reducirDanio(100)).toBe(50);
    expect(() => new Escudo(101)).toThrow("el porcentaje debe ser entre 0 y 100");
  });
});
