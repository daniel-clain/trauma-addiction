import { Alien_D } from "./alien.type"


export type Game_D = {
  time: number
  level: number
  aliens: Alien_D[]
  paused: boolean
  selectedAlien?: Alien_D
  
}
