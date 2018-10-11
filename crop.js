// border
const bzero =  {
    i: {
      smaller: Infinity,
  
      bigger: -Infinity
    },
    j: {
      smaller: Infinity,
      bigger: -Infinity
    }
  }
  function hurd (s) {
    const i = function (i) {
      if (s.i.smaller > i) {
        s.i.smaller = i
      }
      if (s.i.bigger < i) {
        s.i.bigger = i
      }
      return r
    }
  
    const j = function (j){
      if (s.j.smaller > j) {
        s.j.smaller = j
      }
      if (s.j.bigger < j) {
        s.j.bigger = j
      }
      return r
    }
  
    const border = function (){
      return s
    }
  
    const r = {i, j, border}
  
    return r
  }
  const borders = table => table.reduce(
    (a, b, i) =>
      b.reduce(
        (s, n, j) =>
          !!n
            ? hurd(s)
                .i(i)
                .j(j)
                .border()
            : s,
        a
      ),bzero)
  
  const border = tableBool.then(borders)
  
  // crop
  const cropped = Promise.all([tableBool, border]).then(
    ([table, border]) => table.filter(
      (undefined, i) => border.i.smaller < i &&  i < border.i.bigger 
    ).map(row => row.filter(
      (undefined, j) => border.j.smaller < j && j < border.j.bigger
    ))
  )
