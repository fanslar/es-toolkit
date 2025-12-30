import { describe, expect, it } from 'vitest'
import { startCase } from './startCase'

describe('startCase', () => {
  it('should capitalize each word', () => {
    expect(startCase('--foo-bar--')).toBe('Foo Bar')
    expect(startCase('fooBar')).toBe('Foo Bar')
    expect(startCase('__FOO_BAR__')).toBe('Foo Bar')
  })

  it('should handle compound words', () => {
    expect(startCase('createElement')).toBe('Create Element')
    expect(startCase('iPhone')).toBe('I Phone')
    expect(startCase('XMLHttpRequest')).toBe('Xml Http Request')
  })

  it('should handle various delimiters', () => {
    expect(startCase('_abc_123_def')).toBe('Abc 123 Def')
    expect(startCase('__abc__123__def__')).toBe('Abc 123 Def')
    expect(startCase('ABC-DEF')).toBe('Abc Def')
    expect(startCase('ABC DEF')).toBe('Abc Def')
  })

  it('should handle empty strings', () => {
    expect(startCase('')).toBe('')
  })

  it('should handle strings with only delimiters', () => {
    expect(startCase('_-_-_-_')).toBe('')
  })

  it('should work with numbers', () => {
    expect(startCase('12abc 12ABC')).toBe('12 Abc 12 Abc')
  })

  it('should handle consecutive uppercase letters', () => {
    expect(startCase('ABC')).toBe('Abc')
    expect(startCase('ABCdef')).toBe('Ab Cdef')
  })

  it('should handle combinations of numbers and letters', () => {
    expect(startCase('123ABC')).toBe('123 Abc')
    expect(startCase('a1B2c3')).toBe('A 1 B 2 C 3')
  })

  it('should handle special characters', () => {
    expect(startCase('foo@bar')).toBe('Foo Bar')
    expect(startCase('test*case')).toBe('Test Case')
  })

  it('should handle long strings', () => {
    expect(startCase('thisIsAVeryLongStringWithManyWordsAndNumbers123')).toBe(
      'This Is A Very Long String With Many Words And Numbers 123',
    )
  })

  it('should handle whitespace characters', () => {
    expect(startCase('  foo  bar  ')).toBe('Foo Bar')
    expect(startCase('\tfoo\nbar')).toBe('Foo Bar')
  })

  it('should convert the non-first characters to lowercase', () => {
    expect(startCase('FOO BAR')).toBe('Foo Bar')
    expect(startCase('FOO BAR BAZ')).toBe('Foo Bar Baz')
  })

  it('should correctly handle accented letters', () => {
    expect(startCase('lunedì 18 set')).toBe('Lunedì 18 Set')
  })
})
