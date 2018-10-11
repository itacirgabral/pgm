const tentimes = cropped.then(
  e => e.map(
    e => e.map(e => [e])
  )
).then(e => e.reduce((a, b, i) => {
  lst = a.slice(-1)[0]
  if (i % 3) {
    lst.forEach((e, i) => e.push(...b[i]))
  } else {
    a.push(b)
  }
  return a
}, []).map(
  e => e.reduce((a, b, i) => {
    lst = a.slice(-1)[0]
    if (i % 3) {
      lst.push(...b)
    } else {
      a.push(b)
    }
    return a
  }, [])
)
)
