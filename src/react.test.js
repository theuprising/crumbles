/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'

test('react.withState', () => {
  const { withState } = require('./react')

  const Counter = ({state: {count}, setState}) =>
    <div>
      <span>{count}</span>
      <button onClick={() => setState({count: count + 1})}>
        Increment
      </button>
    </div>

  const StatefulCounter = withState({count: 0})(Counter)

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

test('react.withLifecycle', () => {
  const { withLifecycle } = require('./react')
  expect(true).toBe(false)
}

test('react.withRef', () => {
  const { withRef } = require('./react')
  expect(true).toBe(false)
}

