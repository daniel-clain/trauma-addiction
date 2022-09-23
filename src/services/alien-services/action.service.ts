import { Alien_D } from "../../game/types/alien.type"

export function reduceAngerOptions(alien: Alien_D){
  return alien.knownBehaviors.filter(behavior => {
    return behavior.emotionSet.anger > 30
  })
}

export function reduceSadnessOptions(alien: Alien_D){
  return alien.knownBehaviors.filter(behavior => {
    return behavior.emotionSet.sadness > 30
  })
  /* 
    fix the negative problems
  */
}

export function reduceStressOptions(alien: Alien_D){
  return alien.knownBehaviors.filter(behavior => {
    return behavior.emotionSet.stress > 30
  })
}
