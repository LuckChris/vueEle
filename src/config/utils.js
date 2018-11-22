
// 存储localStorage

export const setLS = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

// 获取localStorage
export const getLS = name => {
  if (!name) return
  window.localStorage.getItem(name)
}

// 删除localStorage
export const removeLS = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
