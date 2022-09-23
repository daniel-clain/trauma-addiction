import { createAlien } from "../game/creators/alien.creator";
import { createGame } from "../game/creators/game.creator";
import { numberLoop, randomNumber } from "../helper-functions";

export const testGame = createGame({
  aliens: [
    ...numberLoop(2, () => createAlien({
      age: randomNumber({from: 1, to: 30})
    })),
    ...numberLoop(3, () => createAlien({
      age: randomNumber({from: 1, to: 30}),
      memories: [
        {
          name: 'dog died memory',
          age: 0,
          originalEncounter: {
            name: 'dog died',
            emotionSet: {
              anger: 0,
              sadness: 80,
              stress: 0
            }
          },
          emotionSet: {
            anger: 0,
            sadness: 90,
            stress: 0
          }
        }
      ]
    })),
    ...numberLoop(5, () => createAlien({
      age: randomNumber({from: 1, to: 30}),
      memories: [
        {
          age: 0,
          name: 'someone might attack me',
          originalEncounter: {
            name: 'attacked',
            emotionSet: {
              anger: 0,
              sadness: 0,
              stress: 90
            }
          },
          emotionSet: {
            anger: 0,
            sadness: 0,
            stress: 60
          }
        }
      ]
    })),
    ...numberLoop(2, () => createAlien({
      age: randomNumber({from: 1, to: 30}),
      memories: [
        {
          age: 0,
          name: 'i hate meth heads',
          originalEncounter: {
            name: 'meth heads stole my bike',
            emotionSet: {
              anger: 70,
              sadness: 0,
              stress: 0
            }
          },
          emotionSet: {
            anger: 90,
            sadness: 0,
            stress: 0
          }
        }
      ]
    }))
  ]
})