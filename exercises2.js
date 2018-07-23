function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result=[]
  var naik=0
  var turun=0
  for (var i = 0; i < arrPenumpang.length; i++) {
    for (var j = 0; j <rute.length; j++) {
      if (rute[j]===arrPenumpang[i][1]) {
            naik=j
          }
          else if (rute[j]===arrPenumpang[i][2]) {
            turun=j
          }
    }
    var Obj={}
    Obj.penumpang=arrPenumpang[i][0]
    Obj.naikDari=arrPenumpang[i][1]
    Obj.tujuan=arrPenumpang[i][2]
    Obj.biaya=(turun-naik)*20000
    result.push(Obj)
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
