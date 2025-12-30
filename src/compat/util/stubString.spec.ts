import type { stubString as stubStringLodash } from 'lodash'
import { describe, expect, expectTypeOf, it } from 'vitest'
import { stubString } from './stubString'

describe('stubString', () => {
  it('should return an empty string', () => {
    expect(stubString()).toEqual('')
  })

  it('should match the type of lodash', () => {
    expectTypeOf(stubString).toEqualTypeOf<typeof stubStringLodash>()
  })
})
