// This code is expected to have an array for each hamster

let pets = [
    {
        name: 'Spot',
        type: 'Hamster'
    },
    {
        name: 'Harry',
        type: 'Hamster'
    },
    {
        name: 'Kitty',
        type: 'Cat'
    }
]
var animal = pets.filter(
    function(block){
        return (block.type ==="Hamster")
    }
)

let hamsters = [animal];
console.log(hamsters)// new array to hold objects