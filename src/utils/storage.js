const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return (data)
  }
}
const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
const removeItem = key => {
  window.localStorage.removeItem(key)
}

export {
  getItem,
  setItem,
  removeItem
}
