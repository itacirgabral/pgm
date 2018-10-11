const pgm = gray.then(
  e => e.map(
    e => e.map(
      e => String(255 - Math.round(e))
    )
  )
).then(e => {
  let pre = 'P2\n#Itacir.pgm\n'
  pre += e[0].length + ' ' + e.length + '\n'
  pre += '255\n'
  return pre + e.map(e => e.join(' ')).join('\n')
})
