/* 
  examples of actions 
    - sex when horny, porn when horny, vent when high energy and low comfort, work when you have high energy and high comfort, verbally abuse when medium anger, physically abuse when high anger, sexually abuse when high horny and was sexually abused, comfort someone is low comfort, calm someone in high energy, energize someone with low energy


  actions can be 
    - earning money, spending time with kids, disciplining kids, teaching kids, playing with kids, doing comfort activity to relive from stress (eg drugs, porn), depressive activity (lie in bed), 
*/

import { Focus } from "./focus.type"

export type Action = Focus & {
  name: string
  workLeft: string
}