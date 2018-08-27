(function (doc, win) {
  let docEl = doc.documentElement // html
  let resizeEvt = 'orientationchange' in window ? 'orientation' : 'resize'
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
  }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
