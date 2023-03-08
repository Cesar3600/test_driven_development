export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('error no es un numero')
  if (Number.isNaN(number)) throw new Error('the parameter must be a Number')

  let output = ''

  const multipliers = { 3: 'fizz', 5: 'buzz', 7: 'woof' }

  Object.entries(multipliers).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) return (output += word)
  })

  return output === '' ? number : output
}
