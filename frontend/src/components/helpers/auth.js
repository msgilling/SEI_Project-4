
// get token from local storage
export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('token')
}

// get payload
export const getPayload = () => {
  const token = getTokenFromLocalStorage()
  if (!token) return 
  const splitToken = token.split('.')
  if (splitToken.length < 3) return
  const payloadString = splitToken[1]
  return JSON.parse(atob(payloadString))
}

// check if user is authenticated
export  const userIsAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  // const now = Math.round(Date.now() / 1000)
  return payload
} 


// get userId
export const getUserId = () => {
  const payload = getPayload()
  if (!payload) return 
  return payload.sub
}

// set token to local storage 
export const setTokenToLocalStorage = (token) => {
  window.localStorage.setItem('token', token)
}