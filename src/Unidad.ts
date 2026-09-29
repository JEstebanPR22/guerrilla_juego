import { Combatiente } from "./Combatiente";
import { Escudo } from "./Escudo";
import { Arma } from "./Arma";
import { Pistola } from "./Pistola";

export abstract class Unidad implements Combatiente {
  protected vida: number;
  protected escudo?: Escudo;
  protected arma: Arma;

  constructor(vidaInicial: number, arma: Arma = new Pistola()) {
    this.vida = vidaInicial;
    this.arma = arma;
  }

  equiparEscudo(escudo: Escudo): void {
    this.escudo = escudo;
  }

  equiparArma(arma: Arma): void {
    this.arma = arma;
  }

  disparar(objetivo: Combatiente): void {
    if (!this.estaVivo()) return;
    objetivo.recibirDisparo(this.arma.usar());
  }

  recibirDisparo(danio: number): void {
    const danioFinal = this.escudo ? this.escudo.reducirDanio(danio) : danio;
    this.vida = Math.max(0, this.vida - danioFinal);
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}