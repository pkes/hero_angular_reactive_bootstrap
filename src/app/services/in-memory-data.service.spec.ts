import { TestBed } from '@angular/core/testing'
import { InMemoryDataService } from './services/in-memory-data.service'

describe('InMemoryDataService', () => {
  let service: InMemoryDataService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(InMemoryDataService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
