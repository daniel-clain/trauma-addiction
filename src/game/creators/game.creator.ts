import { Alien_D } from "../types/alien.type"
import { Game_D } from "../types/game.type."

export const createGame = ({aliens}: {aliens: Alien_D[]}): Game_D => {

  const game: Game_D = {
    time: 0,
    level: 0,
    paused: true,
    aliens: aliens || [],
    selectedAlien: undefined
  }

  return game
}