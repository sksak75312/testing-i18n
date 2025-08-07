import { vi } from 'vitest'

describe('FakeTime', () => {

  beforeAll(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

})