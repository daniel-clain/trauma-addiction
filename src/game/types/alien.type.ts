import { AddictionSet } from "./addiction.type";
import { EmotionsSet } from "./emotions.type";
import { Percent } from "./helper-types.type";
import { Memory } from "./memory.type";
import { Position } from "./position.type";
import { Behavior } from "./behavior";
import { CurrentFocus } from "./focus.type";


export type Alien_D = {
  name: string
  position: Position
  age: number
  currentFocus?: CurrentFocus
  
  currentEmotions: EmotionsSet
  memories: Memory[]

  internalStrength: Percent
  senseOfControl: Percent
  pain: Percent

  currentAddictions?: AddictionSet

  knownBehaviors: Behavior[]

  offspring: Alien_D[]

  color: number
  modelBase: number
  daysDead?: number
  hasTriedToHaveABabyRecently?: number
  requirementsSet: RequirementsSet // when a baby

}

type Requirement_L = 'love' | 'play' | 'discipline' | 'encouragement'

type RequirementsSet = {
  [property in Requirement_L]?: Percent
}

