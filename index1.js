//objects

const personDetails={
    name: "Any name",
    age:100,
    gender: "male",
    car: {
        firstcar :"Maruthi",
        secondcar: "MG hector",
        thirdcar: "E3COSPORT",
    }
}
//for in
for (let i in personDetails){
    console.log(personDetails[i])
}
console.log("-------------------")
personDetails.class="10th";
//for in 
for (let i in personDetails){
    console.log(personDetails[i])
}