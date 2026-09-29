export interface Combatiente {
  recibirDisparo(danio: number): void;
  estaVivo(): boolean;
}