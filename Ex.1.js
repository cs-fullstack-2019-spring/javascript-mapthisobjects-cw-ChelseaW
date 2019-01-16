let arr = ["dog", "cat", "pig", "hamster"];

// new array to hold objects
let pet_objects = arr.map(function(pet,idx)
{
    let newObj = {};
    newObj.petNumber = idx;
    newObj.petType = pet;

    return newObj;
    // Expect for the objects to return the index and then the pet name
});

console.log(pet_objects);


// Does Not Work!!!

//     {
//         name: 'Dog',
//         petNumber: 4352,
//         petType: "German Shepard",
//     },
//     {
//         name: 'Cat',
//         petNumber: 7272,
//         petType: "German Shepard",
//     },
//     name: 'Pig',
//     petNumber:7980,
//     petType:"German Shepard",
//
//     name: 'Hamster',
//     petNumber:1819,
//     petType:"German Shepard",
// }
// ]