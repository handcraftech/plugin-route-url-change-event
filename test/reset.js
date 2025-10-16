import { expect } from 'chai'

window.onbeforeunload = null
// Expose expect from Chai directly (bundled via Rollup resolver)
window.expect = expect
