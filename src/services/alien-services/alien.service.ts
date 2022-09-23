import { runInAction } from "mobx"
import { gameConfig } from "../../game/config/game-config"
import { createAlien } from "../../game/creators/alien.creator"
import { Action } from "../../game/types/action.type"
import { Alien_D } from "../../game/types/alien.type"
import { Behavior } from "../../game/types/behavior"
import { NegativeEmotions_L } from "../../game/types/emotions.type"
import { Percent } from "../../game/types/helper-types.type"
import { Imagination } from "../../game/types/imagination.type"
import { Memory } from "../../game/types/memory.type"
import { twoDec, randomNumber, deleteByProperty, selectRandomOption } from "../../helper-functions"
import { state } from "../../state"
import { gameTimeFrequency } from "../time.service"
import { reduceAngerOptions, reduceSadnessOptions, reduceStressOptions } from "./action.service"


export const listOfNames = ['Daniel', 'Tom', 'Alex', 'Angelo', 'Paul', 'Mark', 'Mat', 'Mike', 'Brad', 'Steve', 'James', 'Harry', 'Kevin', 'Stan', 'Dave', 'Chris', 'Sam', 'Bob', 'Fred', 'Frank', 'Jake', 'Alan', 'Ben', 'Chad', 'Denis', 'Eric', 'Greg', 'Lewis', 'Larry', 'Neil', 'Nathan', 'Norbert', 'Phil', 'Ryan', 'Simon', 'Seth', 'Troy', 'Tyler', 'Zach', 'Gavin', 'Robert', 'Tim', 'Tyson', 'Hugh', 'Ronald', 'Spencer', 'Jason', 'Arnold', 'Tod', 'Shawn', 'Liam', 'Will', 'Oliver', 'Ethan', 'John', 'Luke', 'Dylan', 'Anthony', 'Josh', 'Charles', 'Conner', 'Cameron', 'Adam', 'Ian', 'Evan', 'Henry', 'Owen', 'Isaac', 'Jackson', 'Leo', 'Jonathan', 'Declan', 'Vincent', 'Tristan', 'Dom', 'Patrick', 'Arie', 'Adrian', 'Bruce', 'Miles', 'Garrick', 'Barry', 'Jerry', 'George', 'Julian',  'Andy', 'Peter', 'Parth']




const gc = gameConfig








export function onLocalEvent(alien: Alien_D, event){
  /* if(alienNoticesEvent()){
    const memory = chanceToTriggerMemory()
    if(memory){
      alien.currentThought = memory
    }

  }

  function chanceToTriggerMemory(){
    return alien.memories.map(memory => ({
      memory
      relevanceScore: 
    }))
    .sort
  } */
}



export function doTimeBasedAlienUpdates(){
  const {aliens} = state.game
  aliens.forEach(alien => {

    gameTimeFrequency(1, () => {
      makeAlienGetOlder()
      if(alien.currentFocus){
        reduceTimeOnCurrentFocus()
      }
    })

    gameTimeFrequency(10, () => {
      emotionDecreaseOverTime()
    })


    // functions

    function reduceTimeOnCurrentFocus(){
        alien.currentFocus!.timeLeft -= 1
    }

    
    function emotionDecreaseOverTime(){
      alien.currentEmotions = {
        ...alien.currentEmotions,
        anger: alien.currentEmotions.anger
      } 
    }
    
    function makeAlienGetOlder(){
      const {game} = state
      const {aliens} = game!
      if(alien.daysDead == undefined){  
        alien.age = twoDec(alien.age + 0.1)
        if(alien.age > gc.oldAgeStartsAt){
          chanceToDie()
        }
      } else {
        alien.daysDead += .1
        if(alien.daysDead > 10){
          deleteByProperty(aliens, 'name', alien.name)
          listOfNames.push(alien.name)
        }
      }

      function chanceToDie(){
        const chanceToDie = (alien.age - gc.oldAgeStartsAt) / 10
        const alienDies =  randomNumber({from: 0, to: 100}) < chanceToDie
        console.log('chance to die :>> ', chanceToDie);
        if(alienDies){
          alien.daysDead = 0
        }
      }

    }

  })

}

export function doTimeBasedAlienAlgorithms(){
  const {aliens} = state.game
  aliens.forEach(alien => {

    const {currentEmotions, name, memories} = alien

    gameTimeFrequency(1, () => {
      if(alien.currentFocus){
        feelIncreasedEmotionFromCurrentFocus()
      }
    })

    gameTimeFrequency(5, () => {
      if(!alien.currentFocus){
        chanceToTakeAction()
      }
    })

    gameTimeFrequency(10, () => {
      if(alien.age > gc.teenStartsAt){
        chanceToHaveBadMemory()
      }
    })

    



    /* functions */
    function feelIncreasedEmotionFromCurrentFocus(){
      const {focusTarget} = alien.currentFocus!
      const memory = 'age' in focusTarget ? focusTarget as Memory : null
      if(memory){
        console.log(`${name} is having a memory`, memory);

        const emotionKeys = (Object.keys(memory.emotionSet) as NegativeEmotions_L[])

        emotionKeys.forEach((emotionKey) => {
          const currentVal = alien.currentEmotions[emotionKey]
          const memoryVal = memory.emotionSet[emotionKey]
          if(currentVal >= 100 || !memoryVal) return

          let increment
          if(currentVal < memoryVal){
            increment = (memoryVal - currentVal)/10 * 4

            const encounterVal = memory.originalEncounter.emotionSet[emotionKey]
            if(memoryVal < encounterVal){
              memory.emotionSet[emotionKey] = twoDec(memory.emotionSet[emotionKey] + 1)
            } else {              
              memory.emotionSet[emotionKey] = twoDec(memory.emotionSet[emotionKey] + 0.1)
            }
          } else {
            increment = .5
          }


          alien.currentEmotions[emotionKey] = twoDec(currentVal + increment)
        })       
        
      }

      
      const imagination = 'clarity' in focusTarget ? focusTarget as Imagination : null
      if(imagination){
        console.log(`${name} is having an imagination`, imagination);
      }
      
      const action = 'timeLeft' in focusTarget ? focusTarget as Action : null
      if(action){
        const ventingBehavior = 'ventEmotions' in action ? action as Behavior : null
        if(ventingBehavior){
          console.log(`${name} venting by ${ventingBehavior.name}`)
          const emotionKeys = (Object.keys(ventingBehavior.emotionSet) as NegativeEmotions_L[])

          emotionKeys.forEach((emotionKey) => {
            const currentVal = alien.currentEmotions[emotionKey]
            const ventingVal = ventingBehavior.emotionSet[emotionKey]
            let decrement = (currentVal/100 * ventingVal)
            alien.currentEmotions[emotionKey] = twoDec(currentVal - decrement)
          })
        }
      }

    }

    

    function chanceToTakeAction(){
      const {anger, sadness, stress} = currentEmotions
      let ventingOptions: any[] = []
      if(alienIsFertile(alien)){
        checkChanceToHaveBaby()
      }
      if(anger && anger > gc.furiousThreshold){
        console.log(`${name} is really furious`);
        ventingOptions = [...ventingOptions, ...reduceAngerOptions(alien)]
        
      }
      if(sadness && sadness > gc.depressionThreshold){
        console.log(`${name} is really depressed`);
        ventingOptions = [...ventingOptions, ...reduceSadnessOptions(alien)]
      }
      if(stress && stress > gc.anxietyThreshold){
        console.log(`${name} is really anxious`);
        ventingOptions = [...ventingOptions, ...reduceStressOptions(alien)]
      }
      if(ventingOptions.length){
        const chosenOption = selectRandomOption(ventingOptions)
        runInAction(() => {          
          console.log(`${name}' venting option is`, chosenOption);
          alien.currentFocus = chosenOption
        })
      }
      

        
      function checkChanceToHaveBaby(){
        const {age, offspring} = alien
        if(
          age > gc.youngAdultStartsAt && 
          offspring.length < 2
        ){
          if(alien.hasTriedToHaveABabyRecently){
            alien.hasTriedToHaveABabyRecently -= 1
          }
          else {
            chanceToHaveBaby()
            alien.hasTriedToHaveABabyRecently = 20
          }
          
        }
        function chanceToHaveBaby(){
          const chance = 1.5 - alien.offspring.length
          if(chance > 0){
            const otherAlien = aliens.filter(a => a.name != alien.name).filter(alienIsFertile)
            .find(_ => randomNumber({from: 0, to: 100}) < chance)

            if(otherAlien){
              alien.position = {left: otherAlien.position.left - 10, bottom: otherAlien.position.bottom}
              const babyAlien = createAlien({position: {left: alien.position.left + 5, bottom: alien.position.bottom - 5}, color: alien.color})
              state.game!.aliens.push(babyAlien)
              alien.offspring.push(babyAlien)
              otherAlien.offspring.push(babyAlien)
              console.log(`${alien.name} has had a baby with ${otherAlien.name} named ${babyAlien.name}`);
            }
          }
        }
      }

      function alienIsFertile(alien){
        return alien.age >= gc.youngAdultStartsAt && alien.age < gc.oldAgeStartsAt
      }
    }

    function chanceToHaveBadMemory(){
      
      const badMemories = memories.filter(({emotionSet}) => {
        const {anger, sadness, stress} = emotionSet
        if(
            anger && anger > 8 ||
            sadness && sadness > 8 ||
            stress && stress > 8
        ) return true
        else return false
      })

      const badMemory = badMemories.find(badMemory => {
        const {age, originalEncounter, emotionSet} = badMemory
        const memoryIntensity = getMemoryIntensity(badMemory)
        const chanceToRemember = 10 - age
        const memoryRemembered = randomNumber({from: 0, to: 100}) <=  chanceToRemember
        return memoryRemembered
      })
      if(badMemory){
        alien.currentFocus = {
          focusTarget: badMemory,
          timeLeft: 10
        }
      }

    
    }

    function emotionChangeOverTimeBasedOnOtherEmotions(){

    }

  })
}

function getMemoryIntensity({emotionSet}: Memory): Percent{

  const highestIntensityEmotion = Object.keys(emotionSet).sort((a,b) => emotionSet[a] - emotionSet[b])[0]!
  return emotionSet[highestIntensityEmotion]

}

/* alien.emotionsSet = {
  sad: <Percent>((emotionsSet.sad || 0) + 1),
  depressed: <Percent>((emotionsSet.depressed || 0) + 1),
  anxious: <Percent>((emotionsSet.anxious || 0) + 1),
  fear: <Percent>((emotionsSet.fear || 0) + 1),
  stressed: <Percent>((emotionsSet.stressed || 0) + 1),
  bored: <Percent>((emotionsSet.bored || 0) + 1),
  weak: <Percent>((emotionsSet.weak || 0) + 1),
  ...emotionsSet
} */

/* 
alien experience situation
  - support survival / detract survival
  
 */