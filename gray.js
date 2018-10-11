const gray = tentimes.then(
  e => e.map(
    e => e.map(
      e => e.reduce((a, b) =>  a + b, 0) / e.length
    )
  )
)
