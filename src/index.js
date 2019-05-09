import ReactDOM from 'react-dom'
import 'normalize.css'
import './styles/reset.css'
import 'flex.css/dist/data-flex.css'
import * as serviceWorker from './serviceWorker'
import router from './router'

ReactDOM.render(router, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to Register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
