console.log("Hi")
// Change in the code.
// Now I am going to do a simple program using .js

person1={
    firstName:"Fred",
    lastName: "Flintstone",
    phoneNumber: "555555",
    birthCountry: "USA"
};

person2={ 
    firstName: "Bruce",
    lastName: "Wayne",
    phoneNumber: "333333",
    birthCountry: "USA"
};

person3={
    firstName: "Robin",
    lastName: "Scherbatsky",
    phoneNumber: "6666666",
    birthCountry: "Canada"
};

person4={
    firstName: "Ted",
    lastName: "Mosby",
    phoneNumber: "888888",
    birthCountry: "Canada"
};

person5={
    firstName: "Rachel",
    lastName: "Green",
    phoneNumber: "36952148",
    birthCountry: "USA"
};

let people=[person1,person2,person3,person4,person5];
totalPeople=people.length;

for (let index = 0; index < totalPeople; index++){
    if (people[index].birthCountry == "USA"){
        console.log(`The phone number of ${people[index].firstName} ${people[index].lastName} who was born in USA is: ${people[index].phoneNumber}`);
    }


}