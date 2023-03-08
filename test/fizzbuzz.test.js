import { describe, it, expect } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'
describe('fizzbuzz', () => {
  /*
  Escribir una funcion que al pasarle un numero:
  - muestra "fizz" si es multiplo de 3
  - muestra "buzz" si es multiplo de 5
  - muestra "fizzbuzz" si es multiplo de 15
  - muestra el numero si no es multiplo de ninguno de los anteriores
 */

  /*   const fizzbuzz = (num) => {
    if (typeof num !== 'number') throw new Error('error no es un numero')
    if (Number.isNaN(num)) throw new Error('the parameter must be a Number')
    if (num % 15 === 0) return 'fizzbuzz'
    if (num % 3 === 0) return 'fizz'
    if (num % 5 === 0) return 'buzz'

    return num
  }
 */
  it('should be a funcion', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('parameter should be a number', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a especific error message if not a number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('error no es un numero')
  })

  it('should return the number if not multiple of 3 or 5', () => {
    expect(() => fizzbuzz(NaN)).toThrow('the parameter must be a Number')
  })
  it('should return 1 if the number provider is 1 ', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('should return 2 if the number provider is 2 ', () => {
    expect(fizzbuzz(2)).toBe(2)
  })
  it('should return "fizz" if the number provider is 3 ', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })
  it('should return "fizz" if the number provider is multiple of 3 ', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
  })
  it('should return "buzz" if the number provider is multiple of 5 ', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(250)).toBe('buzz')
  })
  it('should return "fizzbuzz" if the number provider is multiple of 3 and 5 ', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
  it('should return "woof" if the number provider is multiple of 7 ', () => {
    expect(fizzbuzz(7)).toBe('woof')
    expect(fizzbuzz(14)).toBe('woof')
  })
  it('should return "fizzwoof" if the number provider is multiple of 3 and 7 ', () => {
    expect(fizzbuzz(21)).toBe('fizzwoof')
  })
  it('should return fizzbazz if number provided is multiple of 3,5 and 7', () => {
    expect(fizzbuzz(105)).toBe('fizzbuzzwoof')
  })
})
