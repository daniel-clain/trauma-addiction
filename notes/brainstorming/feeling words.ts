export type NegativeEmotions_L = 'disgusted' | DepressedSynonyms | FearSynonyms | AngrySynonyms | LonelySynonyms | GuiltSynonyms | PainSynonyms | BitterSynonyms | EnviousSynonyms | HurtfulSynonyms


type DepressedSynonyms = 'depressed' | 'glum' | 'gloomy' | 'sulky' | 'miserable' | 'helpless' | 'disappointed' | 'negative' | 'pessimistic'

type SadSynonyms = 'sad' | 'tearful' 

type WeakSynonyms = 'exhausted' | 'weak' | 'small' | 'shy' | 'cowardly'

type EmptySynonyms =  'empty' | 'tired' | 'listless' | 'void' | 'nihilistic' | 'bored' | 'cold' | 'bleak' | 'hopeless' | 'doubtful' | 'impartial' | 'disenchanted' | 'indifferent'


type FearSynonyms = 'fearful' | 'stressed' | 'anxious' | 'nervous' | 'suspicious' | 'paranoid' | 'panicked' | 'worried'

type AngrySynonyms = 'angry' | 'irritated' | 'aggravated' | 'frustrated' | 'aggressive' | 'grumpy' | 'grouchy' | 'mad' | 'disgruntled' | 'hostile' | 'irate' | 'annoyed' | 'peeved' | 'enraged' | 'infuriated' | 'fuming' | 'offended' 


type SelfConsciousSynonyms = 'guilty' | 'embarrassed' | 'humiliated' | 'dirty' | 'shame' 
// blame others = anger
// blame self = depression


type LonelySynonyms = 'lonely' | 'separate' | 'exiled' | 'rejected'
type PainSynonyms = 'bad' | 'awful' | 'dreadful' | 'shit' | 'miserable' | 'tormented' | 'tortured' | 'pained' | 'agonized'  
type BitterSynonyms = 'bitter' | 'sour' | 'resentful' | 'sarcastic'
type EnviousSynonyms = 'envious' | 'jealous'
type HurtfulSynonyms = 'evil' | 'sadistic' | 'hurtful' | 'nasty' | 'obnoxious' | 'oppressive' | 'hateful' | 'repugnant' | 'unpleasant'
type NegativeEmotion = {
  category: 'anger' | 'sad' | 'fear' | 'disgust'
}