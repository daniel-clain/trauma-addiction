import { Percent } from "./helper-types.type"

export type NegativeEmotions_L = 'anger' | 'sadness' | 'stress'

export type EmotionsSet = {
  [property in NegativeEmotions_L]: Percent
}

/* 
  some emotions raise stress
  some emotions drain energy
  some emotions build energy
  some emotions can become painful
  different emotions words represent either synonyms or different levels of intensity of the same dynamic
  emotions should be separated by not being on the same dynamic, eg irate is not on the same tynamic as 
*/
