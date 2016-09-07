require('./l10n.min')
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App'

//Add alias for l10n
String.prototype.loc = function () {
  return this.toLocaleString()
}

ReactDOM.render(<App />, document.getElementById('root'))
