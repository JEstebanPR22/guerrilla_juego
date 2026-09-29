import { Soldado } from "../src/Soldado";
import { Tanque } from "../src/Tanque";
import { Buque } from "../src/Buque";
import { Ametralladora } from "../src/Ametralladora";
import { Escudo } from "../src/Escudo";

describe("Disparar", () => {
  it("un tanque dispara y mata a un soldado", () => {
    const objetivo = new Soldado();
    new Tanque().disparar(objetivo);
    expect(objetivo.estaVivo()).toBe(false);
  });

  it("un buque dispara dos veces y destruye a un tanque", () => {
    const tanque = new Tanque();
    const buque = new Buque();
    buque.disparar(tanque);
    expect(tanque.estaVivo()).toBe(true);
    buque.disparar(tanque);
    expect(tanque.estaVivo()).toBe(false);
  });

  it("sin municiones el disparo no hace daño", () => {
    const tirador = new Soldado();
    for (let i = 0; i < 6; i++) tirador.disparar(new Soldado());
    const objetivo = new Soldado();
    tirador.disparar(objetivo);
    expect(objetivo.estaVivo()).toBe(true);
  });

  it("una unidad muerta no puede disparar", () => {
    const tirador = new Soldado();
    tirador.recibirDisparo(100);
    const objetivo = new Soldado();
    tirador.disparar(objetivo);
    expect(objetivo.estaVivo()).toBe(true);
  });

  it("el escudo reduce el daño de un disparo real", () => {
    const tirador = new Soldado();
    tirador.equiparArma(new Ametralladora());
    const objetivo = new Soldado();
    objetivo.equiparEscudo(new Escudo(50));
    tirador.disparar(objetivo);
    expect(objetivo.estaVivo()).toBe(true);
    tirador.disparar(objetivo);
    expect(objetivo.estaVivo()).toBe(false);
  });
});