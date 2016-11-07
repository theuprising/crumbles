import { objToQueryString } from './url'

// sharer : Config -> {
//   tumblr: String -> String -> String,
//   twitter: String -> String -> String,
//   facebook: String -> String -> String
// }
const sharer = ({facebookAppId}) => {
  const makeSharer = (title, rootUrl, [width, height], queryObjBuilder) => {
    return (urlToShare, msg) => {
      const query = objToQueryString(queryObjBuilder(urlToShare, msg))
      return {
        url: `${rootUrl}?${query}`,
        title,
        dimensions: {
          width,
          height
        }
      }
    }
  }

  const facebook = makeSharer(
    'Facebook', 'https://www.facebook.com/dialog/share', [500, 500],
    (urlToShare, msg) => ({
      app_id: facebookAppId,
      display: 'popup',
      href: urlToShare
      // quote: msg
    })
  )

  const twitter = makeSharer(
    'Twitter', 'https://twitter.com/intent/tweet', [500, 500],
    (urlToShare, msg) => ({
      text: msg,
      url: urlToShare
      // hashtags: 'something,something'
    })
  )

  const tumblr = makeSharer(
    'Tumblr', 'http://www.tumblr.com/widgets/share/tool', [540, 600],
    (urlToShare, msg) => ({
      canonicalUrl: urlToShare,
      posttype: 'link',
      content: urlToShare,
      caption: msg
      // title: ???
      // tags: ???
    })
  )

  const sharers = {
    twitter,
    facebook,
    tumblr
  }

  return Object.freeze({
    sharers
  })
}

export default sharer

