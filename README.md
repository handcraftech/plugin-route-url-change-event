# URL Changel Event
a wrapper event that listen & control URL changes

## Installation
you can install with ```npm install @handcraftech/plugin-route-url-change-event```
```javascript
    /* in ES 5 */
    require('@handcraftech/plugin-route-url-change-event')
    /* in ES 6 */
    import '@handcraftech/plugin-route-url-change-event'
```
or
```html
    <script src="url-change-event.js"></script>
```
> Due to override some history method, you should import this lib before your code.

## Usage
```javascript
window.addEventListener('urlchange', function(e) {
    // your code here
})
```
### UrlChangeEvent instance
Properties
* ```oldURL``` {__URL__} - the url before change.
* ```newURL``` {__URL__ | __null__} - the url after change. __WARNING:__ when event.action is __beforeunload__, this value is null.
* ```action``` {[pushState|replaceState|popstate|beforeunload]} - the action that causes the url to change.

Method
* ```preventDefault``` - prevent url change

## License
MIT licensed
