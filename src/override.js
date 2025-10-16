import UrlChangeEvent from './UrlChangeEvent'
import { cacheURL, cacheIndex, updateCacheState } from './stateCache'
import { originPushState, originReplaceState } from './constants'

window.history.pushState = function (state, title, url) {
  const nowURL = new URL(url || '', window.location.href)
  const notCanceled = window.dispatchEvent(
    new UrlChangeEvent({
      newURL: nowURL,
      oldURL: cacheURL,
      action: 'pushState',
    })
  )

  if (notCanceled) {
    originPushState({ _index: cacheIndex + 1, ...state }, title, url)
    updateCacheState()
  }
}

window.history.replaceState = function (state, title, url) {
  const nowURL = new URL(url || '', window.location.href)
  const notCanceled = window.dispatchEvent(
    new UrlChangeEvent({
      newURL: nowURL,
      oldURL: cacheURL,
      action: 'replaceState',
    })
  )

  if (notCanceled) {
    originReplaceState({ _index: cacheIndex, ...state }, title, url)
    updateCacheState()
  }
}
