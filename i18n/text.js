import __ from './helper'

export default locale => ({path, args = []}) =>
  <span dangerouslySetInnerHTML={{__html: __(locale)(path, args)}} />

