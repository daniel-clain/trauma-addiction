
export const is = val => ({
  if: condition => condition ? val : '',
  in: (array: any[]) => array.includes(val) ? val : ''
})


export function randomNumber({from,to}){
  return Math.round(Math.random()*(to-from) + from)
}

export function randomPercent(){
  return Math.round(Math.random()*100)
}

export function numberLoop(amount, func: (number: number | null) => void): any[] {
  let returnVal: any[] = []
  for(let number = 1; number <= amount; number++){
    returnVal.push(func(number || null))
  }
  return returnVal
}


export function twoDec(num: number){
  return (Math.round((num) * 100) / 100)
}

export function ifResult(val, nextFunction){
  val && nextFunction(val)
}

export function deleteByProperty(array: any[], prop: string, val:any){
  const index = array.findIndex(item => item[prop] == val)
  array.splice(index, 1)
}

export function loopObjKeys(obj: {}, func: (prop) => void){
  Object.keys(obj).forEach(k => func(obj[k]))
}

export function hasProperties(object){
  return !!Object.keys(object).length
}


export function selectRandomOption<T>(array: T[]): T{
  const randomNum = randomNumber({from: 0, to: array.length - 1})
  return array.find((item, index) => {
    return randomNum == index
  })!
}