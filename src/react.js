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
 * @name react.mountable
 *
 * @sig (DOM -> Side Effects) -> Component
 *
 * @desc
 * Turn a non-react-aware function that expects a domnode
 * to mount into into a Component
 *
 * @example
 * const mountItalic = el => {
 *   el.innerHTML = '<em>Hello!</em>'
 * }
 *
 * const Italic = mount(mountItalic)
 *
 * render(<Italic />, document.body)
 */

export const mountable = mountFn => {
  let div
  return React.createClass({
    componentDidMount: function () { this.forceUpdate() },
    render: () => {
      if (div) mountFn(div)
      return <div ref={el => { div = el }} />
    }
  })
}

