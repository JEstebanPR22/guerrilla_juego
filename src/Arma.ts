export abstract class Arma {
  constructor(
    protected municiones: number,
    protected readonly danio: number
  ) {}

  tieneMunicion(): boolean {
    return this.municiones > 0;
  }

  getMuniciones(): number {
    return this.municiones;
  }

  usar(): number {
    if (!this.tieneMunicion()) return 0;
    this.municiones--;
    return this.danio;
  }
}