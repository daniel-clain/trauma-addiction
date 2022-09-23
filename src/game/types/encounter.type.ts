
import { Alien_D } from "./alien.type"
import { Focus } from "./focus.type"

export type Encounter = Focus & {
  name: string,
  cause?: Alien_D
}