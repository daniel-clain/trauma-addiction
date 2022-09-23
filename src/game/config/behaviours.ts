import { Behavior } from "../types/behavior"



export const behaviors: Behavior[] = [
  {
    name: 'distract self',
    emotionSet: {
      anger: 40,
      sadness: 40,
      stress: 10,
    }
  },
  {
    name: 'swear and yell',
    emotionSet: {
      anger: 70,
      sadness: 10,
      stress: 10,
    },
    timeLeft: 10
  },
  {
    name: 'smash something',
    emotionSet: {
      anger: 80,
      sadness: 10,
      stress: 0,
    },
    timeLeft: 10
  },
  {
    name: 'have a bath',
    emotionSet: {
      anger: 10,
      sadness: 10,
      stress: 50,
    },
    timeLeft: 10
  },
  {
    name: 'go for a jog',
    emotionSet: {
      anger: 50,
      sadness: 10,
      stress: 50,
    },
    timeLeft: 10
  },
  {
    name: 'do a workout',
    emotionSet: {
      anger: 70,
      sadness: 10,
      stress: 50,
    },
    timeLeft: 10
  },
  {
    name: 'rest in bed',
    emotionSet: {
      anger: 0,
      sadness: 80,
      stress: 40,
    },
    timeLeft: 10
  },
  {
    name: 'watch tv',
    emotionSet: {
      anger: 20,
      sadness: 70,
      stress: 30,
    },
    timeLeft: 10
  },
  {
    name: 'talk with people',
    emotionSet: {
      anger: 40,
      sadness: 60,
      stress: 50,
    },
    timeLeft: 10
  }
]