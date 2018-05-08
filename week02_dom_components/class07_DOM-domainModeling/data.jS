// NIKE - shoes

const shoesPayload = [
  {
    id: 2342,
    status: "PROD",
    size: "10.5W",
    sponsor: {
      id: "92349284",
      name: "Michael Jordan",
      bankACH: {
        routingNumber: "293-2382388242-322",
        accountNumber: "203902392093"
      }
    },
    inventoryCount: 123
  }
];

// shoesPayload[0].sponsor.bankACH.routingNumber

//   word cloud

// SHOES>>>>
// id: GUID  (Globally Unique Identifier)
// status: [inProto, PROD, sunset]   string
// size: enum [7,7.5,8,8.5W,...  ]
// type: enum [running, walking, xtrainer, sportSpecific,...]
// color: enum [red, yellow, ...]
// cost: $
// laces: b
// retailPrice: $
// airPump: b
// sponsor: {
//   id: 72309sdjfa3872-238ksa83=23uyr
//   name: Michael Jordan
//     bankACH: {
//     routingNumber:  293-2382388242-322
//     accountNumber: 203902392093
//   }
// }
// sport: enum [ ]
// brand: enum []
// manufactureLocation: Array of <manufactureLocations>
//    0..n
//    [
//      {
//        id:  dskjfakd
//        country: china  (default)
//        name: Yangtse2
//        supervisor: {
//          name: dave
//          title: director
//          phone: 2093-123
//        }
//      },
//     ...
//    ]
// inventoryCount: int
// customizable: b
// targetaudience: enum
// marketSegment: enum
// sex: enum



// SPONSORS>>
// id: 72309sdjfa3872-238ksa83=23uyr
// name: Michael Jordan
// bankACH: {
//   routingNumber:  293-2382388242-322
//   accountNumber: 203902392093
// }

const door = {
  isOpen: b
  toggleDoorOpenClosed: function() {
    this.isOpen = !isOpen;  
  }
}


sam = {
  employee: {

  },
  logName: "skjdfks"
}

sam['logName']

if(condition) {
  var new = sam.employee
} 
else {
  var new = sam.logName
}

if(condition) {
  const field = 'employee';
} 
else {
  const field = 'logName'
}

let newVariable = sam[field]