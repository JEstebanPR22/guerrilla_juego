import { crearEstadoJuego } from "../src/index";

describe("guerrilla juego", () => {
  test("inicializa el estado del juego", () => {
    expect(crearEstadoJuego()).toEqual({
      fase: "inicio",
      jugadores: 0,
    });
  });
});
