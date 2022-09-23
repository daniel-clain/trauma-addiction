import { runInAction } from "mobx";

import { state } from "../state";
import { testGame } from "../testing/test-game";

export function initialSetup(){
  if(state.testMode){
    loadTestGame()
  }
}

export function loadTestGame() {
  runInAction(() => {
    state.game = testGame
  })
}
