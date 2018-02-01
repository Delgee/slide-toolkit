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
})
