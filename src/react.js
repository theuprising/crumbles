import { map, addIndex } from 'ramda'

const mapWithIndex = addIndex(map)

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

