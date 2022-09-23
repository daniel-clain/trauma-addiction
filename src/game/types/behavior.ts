import { Action } from "./action.type"
import { EmotionsSet } from "./emotions.type"

export type Behavior_L = 'distract self' | 'swear and yell' | 'smash something' | 'have a bath' | 'go for a jog' | 'do a workout' | 'rest in bed' | 'watch tv' | 'get massage' | 'talk with people'

export type Behavior = Action &{
  name: Behavior_L
  emotionSet: EmotionsSet
}
