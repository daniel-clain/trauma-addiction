
import { Encounter } from "./encounter.type"
import { Focus } from "./focus.type"

export type Memory = Focus & {
  age: number
  originalEncounter: Encounter
}