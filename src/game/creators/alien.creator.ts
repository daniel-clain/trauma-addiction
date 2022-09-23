
import { randomNumber } from "../../helper-functions"
import { listOfNames } from "../../services/alien-services/alien.service"
import { behaviors } from "../config/behaviours"
import { Alien_D } from "../types/alien.type"

type CreateAlienProps = {
  [P in keyof Alien_D]?: Alien_D[P]
}

export const createAlien = (args: CreateAlienProps) => {
  
  const alien: Alien_D = {    
    name: listOfNames.splice(0, 1)[0]!,
    pain: 0,
    power: 0,
    position: {
      left: randomNumber({from: 0, to: 100}), 
      bottom: randomNumber({from: 0, to: 100})
    },
    age: 1,
    color: randomNumber({from: 0, to: 360}),
    modelBase: randomNumber({from: 1, to: 2}),
    offspring: [],
    memories: [],
    requirementsSet: {},
    knownBehaviors: behaviors,
    currentEmotions: {
      anger: 0,
      stress: 0,
      sadness: 0
    },
    ...args
  }

  
  return alien

}
