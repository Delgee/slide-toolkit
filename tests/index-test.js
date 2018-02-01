import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('it should be true', (done) => {
    expect(1).toEqual(1)
    done()
  })
})
