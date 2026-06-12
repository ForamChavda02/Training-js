//word to Bitstring to Boolean Array
function toBoolArray(string) {
    let resultArr = []
    let array = string.split("");
    for(let i in array) {
        resultArr.push(array[i].charCodeAt() - 96);
    }
    for(let i in resultArr) {
        if(resultArr[i] % 2 == 0) {
            resultArr[i] = false;
        }
        else {
            resultArr[i] = true;
        }
    }
    return resultArr;
}
console.log(toBoolArray("loves"));//[ false, true, false, true, true ]

//Burglary series(16): Nested objects.
function determineWhoCursedTheMost(object) {
    let meTotal = 0;
    let spouseTotal = 0;
    Object.entries(object).forEach(([Key, value]) => {
        meTotal += value.me;
        spouseTotal += value.spouse;
    });
    if(spouseTotal == meTotal) {
        return "DRAW!";
    }
    else if(spouseTotal > meTotal) {
        return "SPOUSE!";
    }
    else {
        return "ME!";
    } 
}
console.log(determineWhoCursedTheMost(
    {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 10,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}
));//DRAW!

//Burglary Series(22): Sign All
function signAll(object, string) {
    Object.entries(object).forEach(([key, value]) => {
        value.signature = string;
    });
    object.signature = string;
    return object;
}
console.log(signAll(
    {
        kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
    }, "Rocky"
));
/*
{
  kitchen: { painting: 100, piano: 1000, signature: 'Rocky' },
  bathroom: { stereo: 220, signature: 'Rocky' },
  signature: 'Rocky'
}
*/

//Map the letters in a String.
function mapLetters(string) {
    let answerObj = {};
    let testArr = string.split("");
    for(let i in testArr) {
        if(!answerObj[testArr[i]]) {
            answerObj[testArr[i]] = [];
        }
        answerObj[testArr[i]].push(i);
    }
    return answerObj;
}
console.log(mapLetters("dodo"));//{ d: [ '0', '2' ], o: [ '1', '3' ] }

//get notes distribution
function getNotesDistribution(array) {
    let answer = {};
    for(const x of array) {
        for(const y of  x.notes) {
            if(y >= 1) {
                answer[y] = (answer[y] || 0) + 1;
            }
        }
    }
    return answer;
}
console.log(getNotesDistribution(
    [
    {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
    ]
));//{ '2': 1, '3': 2, '5': 3, '6': 1 }

//with filter and reduce
function getNotesDistribution2(array) {
    let nestedArr = [];
    for(let i in array) {
        nestedArr.push(array[i].notes.filter((value) => value > 0));
    }
    return nestedArr.flat().reduce((accumulator, currentvalue) => {accumulator[currentvalue] = (accumulator[currentvalue] || 0) + 1;
        return accumulator
    }, {});
    
}
console.log(getNotesDistribution2([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]));//{ '2': 1, '3': 2, '5': 3, '6': 1 }

//ungropued data in an object
function ungropuedStudents(array) {
    let answer = [];
    for(let x of array) {
        for(let y of x.data) {
            const newJob = {
                teacher: x.teacher,
                ...y
            };
            answer.push(newJob);
        }
    }
    return answer;
}
console.log(ungropuedStudents(
    [{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]
));

/*
 [{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]
//data.name = new object into that add teacher at top and then push all that into an array 
*/
