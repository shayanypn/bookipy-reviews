import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
export const mockStore = configureStore(middlewares)

