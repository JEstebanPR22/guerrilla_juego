export class Escudo {
  constructor(private readonly porcentaje: number) {
    if (porcentaje < 0 || porcentaje > 100) {
      throw new Error("el porcentaje debe ser entre 0 y 100");
    }
  }

  reducirDanio(danio: number): number {
    return (danio * (100 - this.porcentaje)) / 100;
  }
}