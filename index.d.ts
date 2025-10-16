interface IOption {
  oldURL: URL
  newURL: URL | null
  action: 'pushState' | 'replaceState' | 'popstate' | 'beforeunload'
}

export type UrlChangeEvent = Event & IOption

declare global {
  interface Window {
    addEventListener(
      type: 'urlchange',
      callback: (event: UrlChangeEvent) => void,
      options?: boolean | AddEventListenerOptions
    ): void

    removeEventListener(
      type: 'urlchange',
      callback: (event: UrlChangeEvent) => void,
      options?: boolean | AddEventListenerOptions
    ): void
  }
}
