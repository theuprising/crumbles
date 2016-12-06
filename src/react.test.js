/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'

test('react.withState', () => {
  const { withState } = require('./react')

  const Counter = ({state: {n}, setState}) =>
    <div>
      <span>{n}</span>
      <button onClick={() => setState({n: n + 1})}>
        Increment
      </button>
    </div>

  const StatefulCounter = withState({initialState: {n: 0}})(Counter)

  const counterA = mount(
    <StatefulCounter />
  )
  const counterB = mount(
    <StatefulCounter />
  )

  expect(counterA.text()).toEqual('0Increment')

  expect(counterB.text()).toEqual('0Increment')

  counterA.find('button').simulate('click')
  expect(counterA.text()).toEqual('1Increment')

  counterB.find('button').simulate('click')
  expect(counterB.text()).toEqual('1Increment')
})

