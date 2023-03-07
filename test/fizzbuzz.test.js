import { describe, it, expect } from 'vitest'

const fizzbuzz = (number) => {
	if (typeof number !== 'number') {
		throw new Error('Parameter provider tobe a number')
	}
}

describe('fizzbuzz', () => {
	it('should be a function', () => {
		expect(typeof fizzbuzz).toBe('function')
	})
	it('should throw if not a number is provider as parameter', () => {
		expect(() => fizzbuzz()).toThrow('Parameter provider tobe a number')
	})
})
