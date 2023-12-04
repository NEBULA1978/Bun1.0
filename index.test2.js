import { describe, it , expect } from 'bun:test'

describe('index', () => {
    expect(true).toBe(true)
})

import { describe, it } from 'bun:test'

describe('index', () => {
    throw new Error('This not workink')
})