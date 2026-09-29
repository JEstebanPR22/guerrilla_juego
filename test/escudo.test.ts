import { Escudo } from "../src/Escudo";
import { Soldado } from "../src/Soldado";
import { Tanque } from "../src/Tanque";

describe("Escudo", () => {
  it("reduce el daño según el porcentaje", () => {
    expect(new Escudo(50).reducirDanio(100)).toBe(50);
    expect(new Escudo(0).reducirDanio(100)).toBe(100);
    expect(new Escudo(100).reducirDanio(100)).toBe(0);
  });

  it("rechaza porcentajes inválidos", () => {
    expect(() => new Escudo(-1)).toThrow();
    expect(() => new Escudo(101)).toThrow();
  });

  it("un soldado con escudo 50% resiste 2 disparos", () => {
    const soldado = new Soldado();
    soldado.equiparEscudo(new Escudo(50));
    soldado.recibirDisparo(100);
    expect(soldado.estaVivo()).toBe(true);
    soldado.recibirDisparo(100);
    expect(soldado.estaVivo()).toBe(false);
  });

  it("un tanque con escudo 50% resiste 4 disparos", () => {
    const tanque = new Tanque();
    tanque.equiparEscudo(new Escudo(50));
    for (let i = 0; i < 3; i++) tanque.recibirDisparo(100);
    expect(tanque.estaVivo()).toBe(true);
    tanque.recibirDisparo(100);
    expect(tanque.estaVivo()).toBe(false);
  });
});