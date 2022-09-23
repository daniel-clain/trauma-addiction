import { EmotionsSet } from "./emotions.type"

export type Focus = {
  name: string
  emotionSet: EmotionsSet
}
export type CurrentFocus = {
  focusTarget: Focus
  timeLeft: number
}