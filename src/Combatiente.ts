export interface Combatiente {
  disparar(objetivo: Combatiente): void;
  recibirDisparo(danio: number): void;
  estaVivo(): boolean;
}