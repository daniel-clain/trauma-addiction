
import { runInAction } from "mobx"
import { twoDec } from "../helper-functions"
import { state } from "../state"
import { doTimeBasedAlienAlgorithms, doTimeBasedAlienUpdates } from "./alien-services/alien.service"

let timeout

export function pause(){
  runInAction(() => {
    state.game!.paused = true
  })
  clearTimeout(timeout)
}
export function unpause(){
  
  if(state.game!.paused == false) 
    throw 'should not have tried to unpause while unpaused'
  
  runInAction(() => {
    state.game!.paused = false
  })
  timeout = setInterval(onTimePasses, 100)
}


export function onTimePasses(){
  const {game} = state
  const {time} = game!

  runInAction(() => {
    addTime()
    doTimeBasedAlienAlgorithms()
    doTimeBasedAlienUpdates()
  })
  

  /* implementation */

  function addTime(){    
    game!.time = twoDec(time + .1)
  }
}

export function gameTimeFrequency(frequency: number, action){
  const isOnFrequency = state.game.time % frequency == 0
  if(isOnFrequency) action()
}
