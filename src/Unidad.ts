import { Combatiente } from "./Combatiente";

export abstract class Unidad implements Combatiente {
  protected vida: number;

  constructor(vidaInicial: number) {
    this.vida = vidaInicial;
  }

  recibirDisparo(danio: number): void {
    this.vida = Math.max(0, this.vida - danio);
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}