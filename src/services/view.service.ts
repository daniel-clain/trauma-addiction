import { gameConfig } from "../game/config/game-config";
import { Alien_D } from "../game/types/alien.type";

const gc = gameConfig

export function isFurious(alien: Alien_D){
  return alien.currentEmotions.anger > gc.furiousThreshold
}
export function isDepressed(alien: Alien_D){
  return alien.currentEmotions.sadness > gc.depressionThreshold
}
export function isAnxious(alien: Alien_D){
  return alien.currentEmotions.stress > gc.anxietyThreshold
}