import { Percent } from "./helper-types.type"


export type Addiction_L = 'Drug' | 'Food' | 'Shopping' | 'Sex' | 'Gaming' | 'Work' | 'Gambling' | 'Power' | 'Hatred' | 'Suffering'

export type AddictionSet = {
  [property in Addiction_L]?: Percent
}