// array2table
const array2table = d => d.data.reduce((a, b) => {
    const lastRow = a[a.length - 1]
    const lastCell = lastRow[lastRow.length - 1]
    if (lastCell.length < 4) {
      lastCell.push(b)
    } else if (lastRow.length < d.width) {
      lastRow.push([b])
    } else {
      a.push([[b]])
    }
    return a
  },[[[]]])
const tableRGBA = itadata.then(array2table)

// rgba 2 bool
const tableBool = tableRGBA.then(
  table => table.map(
    row => row.map(
      rgba => rgba[3]
    )
  )
)
