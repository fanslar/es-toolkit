import type { stubObject as stubObjectLodash } from 'lodash'
import { describe, expect, expectTypeOf, it } from 'vitest'
import { stubObject } from './stubObject'

describe('stubObject', () => {
  it('should return an empty object', () => {
    expect(stubObject()).toEqual({})
  })

  it('should match the type of lodash', () => {
    expectTypeOf(stubObject).toEqualTypeOf<typeof stubObjectLodash>()
  })
})
