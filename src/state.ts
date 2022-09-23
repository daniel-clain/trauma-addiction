
import { observable } from "mobx";
import { createGame } from "./game/creators/game.creator";
import { Game_D } from "./game/types/game.type.";

export type MainState = {
  game: Game_D
  testMode: boolean
}

export const state: MainState = observable({
  testMode: true,
  game: createGame({aliens: []})
})
