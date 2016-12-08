import React from 'react'
import R from 'ramda'

const mapWithIndex = R.addIndex(R.map)

// combine : ...Component -> Any -> Component
export const combine = (...containers) => state => (
  <div>
    {
      mapWithIndex(
        (C, index) =>
          <C {...state} key={index} />,
        containers
      )
    }
  </div>
)

/**
 * @name DEPRECATED react.manageState
 *
 * @desc
 * Higher-order component abstraction for adding state management to a dumb component.
 *
 * - state
 * - setState
 *
 * takes two props also:
 * - Component
 * - initialState
 *
 * @example
 * const Counter = ({state, setState}) =>
 *   <div>
 *     {state}
 *     <button onClick={() => setState(state + 1)}>
 *       Increment
 *     </button>
 *   </div>
 *
 * const ManagedCounter = manageState({Component: Counter, initialState: 0})
 *
 * <ManagedCounter />
 */
export const manageState = ({Component, initialState}) => {
  console.warn('crumbles: react.manageState is deprecated. use react.withState instead.')
  return React.createClass({
    getInitialState: R.always(initialState),
    render: function () {
      return <Component
        {...this.props}
        state={this.state}
        setState={state => this.setState(state)}
      />
    }
  })
}

/**
 * @name react.withState
 *
 * @desc
 * Higher-order component abstraction for adding state management to a dumb component.
 *
 * provides these props:
 * - state
 * - setState
 *
 * @example
 * const Counter = ({state, setState}) =>
 *   <div>
 *     {state}
 *     <button onClick={() => setState({count: state.count + 1})}>
 *       Increment
 *     </button>
 *   </div>
 *
 * const manageCounterState = withState({count: 0})
 * const ManagedCounter = manageCounterState(Counter)
 * <ManagedCounter />
 */
export const withState = initialState => Component =>
  React.createClass({
    getInitialState: R.always(initialState),
    render: function () {
      return <Component
        {...this.props}
        state={this.state}
        setState={state => this.setState(state)}
      />
    }
  })

/**
 * @name react.withLifecycle
 *
 * @desc
 * Higher-order component abstraction for adding lifecycle methods to a dumb component.
 *
 */
export const withLifecycle = lifecycle => Component =>
  React.createClass({
    ...{
      render: function () {
        return <Component {...this.props} />
      },
      ...lifecycle
    }
  })

/**
 * @name react.withRef
 *
 * @desc
 * Higher-order component abstraction for building a dumb component with a ref to itself
 *
 * passes a new prop into the component: `el`, which is the ref.
 *
 * @example
 * const Dummy = ({el}) => <span>Ref is: <pre>{el}</pre></span>
 * const DummyWithSelfRef = withRef(Dummy)
 */

export const withRef = (() => {
  const ownProps = ['state', 'setState']
  const omitOwnProps = R.omit(ownProps)

  return R.pipe(
    withState({el: null}),
    Component => props => {
      const { state, setState } = props
      return (
        <Component
          ref={el => setState({el})}
          el={state.el}
          {...omitOwnProps(props)}
        />
      )
    }
  )
})()

