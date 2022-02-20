import { useReducer, useState } from 'react'
import '../styles/globals.css'
import { CartState } from '../components/CartState'
import { PopularState } from '../components/PopularState'
import { ScrollState } from '../components/ScrollState'

const cartOperations = (state, directive) => {
  const { action, newItem } = directive
  switch (action) {
    case 'addItem':
      let existingItem = state.filter(cartItem => cartItem.id === newItem.id)[0]
      if (existingItem) {
        return [...state.filter(cartItem => cartItem.id !== existingItem.id), {
          ...existingItem,
          quantity: existingItem.quantity + 1
        }]
      } else {
        return [...state, newItem]
      }
    case 'removeItem':
      return state.filter(cartItem => cartItem.id !== newItem.id)
    case 'increment':
      existingItem = state.filter(cartItem => cartItem.id === newItem.id)[0]
      return [
        ...state.filter(cartItem => cartItem.id !== newItem.id),
        {
          ...existingItem,
          quantity: existingItem.quantity + 1
        }
      ]
    case 'decrement':
      existingItem = state.filter(cartItem => cartItem.id === newItem.id)[0]
      return [
        ...state.filter(cartItem => cartItem.id !== newItem.id),
        {
          ...existingItem,
          quantity: existingItem.quantity - 1
        }
      ]
    case 'clear':
      return []
    default:
      return
  }
}

const dispatchToPopular = (state, newResults) => {
  if (Object.keys(state).length !== 0) {
    return {
      ...state,
      page: newResults.page,
      results: [...state.results, ...newResults.results]
    }
  } else {
    return newResults
  }
}


function MyApp({ Component, pageProps }) {
  const [cartContents, modifyCart] = useReducer(cartOperations, [])
  const [popular, updatePopular] = useReducer(dispatchToPopular, {})
  const [scrollPosition, setScrollPosition] = useState(0)

  return (
    <CartState.Provider value={{ cartContents, modifyCart }}>
      <PopularState.Provider value={{ popular, updatePopular }}>
        <ScrollState.Provider value={{ scrollPosition, setScrollPosition }}>
          <Component {...pageProps} />
        </ScrollState.Provider>
      </PopularState.Provider>
    </CartState.Provider>
  )
}

export default MyApp
