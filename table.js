const tableDom = gray.then(
  e => '<table>' + e.map(
    e => '<tr>' + e.map(
      e => `<td style="background:rgba(0,0,0,${e/255})"></td>`
    ).join('')  + '</tr>'
  ).join('') + '</table>'
)
