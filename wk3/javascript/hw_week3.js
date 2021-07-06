// //object

//1
// var myDog = {
//     // Only change code below this line
//     name:"pic",
//     legs:4,
//     tails:1,
//     friends:["a","b"]
    
//     // Only change code above this line
//     };


//2
// // Setup
// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
//   };
  
//   // Only change code below this line
  
//   var hatValue = testObj.hat;      // Change this line
//   var shirtValue = testObj.shirt;    // Change this line



//3
// // Setup
// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };
  
//   // Only change code below this line
  
//   var entreeValue = testObj["an entree"];   // Change this line
//   var drinkValue = testObj["the drink"];    // Change this line


//4
// // Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
  
//   // Only change code below this line
  
//   var playerNumber = 16;       // Change this line
//   var player = testObj[playerNumber];   // Change this line


//5
// // Setup
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog["name"] = "Happy Coder"
//   // Only change code below this line


//6
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
  
//   myDog["bark"] = "woof"


//7
// // Setup
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
  
//   // Only change code below this line
//   delete myDog["tails"]


//8
// // Setup
// function phoneticLookup(val) {
//     var result = "";
  
//     // Only change code below this line
//   var lookup = {"alpha":"Adams",
//                 "bravo":"Boston",
//                 "charlie":"Chicago",
//                 "delta":"Denver",
//                 "echo":"Easy",
//                 "foxtrot":"Frank"
//                 }
            
//   result = lookup[val]
  
//     // Only change code above this line
//     return result;
//   }
  
//   phoneticLookup("charlie");


  //9
//   function checkObj(obj, checkProp) {
//     // Only change code below this line
//     if(obj.hasOwnProperty(checkProp)) {
//       return obj[checkProp]
//     }
//     else {
//       return "Not Found";
//     }
//     // Only change code above this line
//   }


  //10
//   var myMusic = [
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     },{
//       "artist": "palmy",
//       "title": "Guitar",
//       "release_year": 1978,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     }
//   ];


  //11
//   var myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
  
//   var gloveBoxContents = myStorage.car.inside["glove box"];


  //12
//   var myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];
  
//   var secondTree = myPlants[1].list[1];

  //13
// var recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//     if (prop !== 'tracks' && value !== "") {
//       records[id][prop] = value;
//     } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//       records[id][prop] = [value];
//     } else if (prop === "tracks" && value !== "") {
//       records[id][prop].push(value);
//     } else if (value === "") {
//       delete records[id][prop];
//     }
//     return records;
//   }
  
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');


//Object ShortHand

//1
// const createPerson = (name, age, gender) => {
//     // Only change code below this line
//     return {
//       name,
//       age,
//       gender
//     };
//     // Only change code above this line
//   };

//2
// // Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//       this.gear = newGear;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(3);
//   console.log(bicycle.gear);




//Basic DataStructure : Object

//1
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28
//   };
  
//   // Only change code below this line
//   foods["bananas"] = 13;
//   foods["grapes"] = 35;
//   foods["strawberries"] = 27;
//   // Only change code above this line
  
//   console.log(foods);



//2
// let userActivity = {
//     id: 23894201352,
//     date: 'January 1, 2017',
//     data: {
//       totalUsers: 51,
//       online: 42
//     }
//   };
  
//   // Only change code below this line
//   userActivity.data.online = 45
//   // Only change code above this line
  
//   console.log(userActivity);


//3
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
  
//   function checkInventory(scannedItem) {
//     // Only change code below this line
//   return foods[scannedItem]
//     // Only change code above this line
//   }
  
//   console.log(checkInventory("apples"));


//4
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
  
//   // Only change code below this line
//   delete foods.oranges;
//   delete foods.plums;
//   delete foods.strawberries;
//   // Only change code above this line
  
//   console.log(foods);


//5
// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function isEveryoneHere(obj) {
//     if (
//       obj.hasOwnProperty("Alan") &&
//       obj.hasOwnProperty("Jeff") &&
//       obj.hasOwnProperty("Sarah") &&
//       obj.hasOwnProperty("Ryan")
//     ) {
//       return true;
//     }
//     return false;
//   }



//6
// function countOnline(usersObj) {
//     // Only change code below this line
//     let result = 0;
//     for (let key in usersObj) {
//       if (usersObj[key].online === true) {
//         result++;
//       }
//     }
//     return result;
//     // Only change code above this line
  }


//7
// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function getArrayOfUsers(obj) {
//     // Only change code below this line
//   return Object.keys(obj)
//     // Only change code above this line
//   }
  
//   console.log(getArrayOfUsers(users));

  //8
//   let user = {
//     name: 'Kenneth',
//     age: 28,
//     data: {
//       username: 'kennethCodesAllDay',
//       joinDate: 'March 26, 2016',
//       organization: 'freeCodeCamp',
//       friends: [
//         'Sam',
//         'Kira',
//         'Tomo'
//       ],
//       location: {
//         city: 'San Francisco',
//         state: 'CA',
//         country: 'USA'
//       }
//     }
//   };
  
//   function addFriend(userObj, friend) {
//     // Only change code below this line
//    userObj.data.friends.push(friend)
//    return userObj.data.friends
//     // Only change code above this line
  }
  
//   console.log(addFriend(user, 'Pete'));







//9
// let dog = {
//     name:"pic",
//     numLegs:4
//     };





//10
// let dog = {
//     name: "Spot",
//     numLegs: 4
//   };
//   // Only change code below this line
//   console.log(dog.name)
//   console.log(dog.numLegs)



//11
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs:function() {return "This dog has "+ dog.numLegs +" legs."}
  
//   };
  
//   dog.sayLegs();



//12
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//   };
  
//   dog.sayLegs();



//13
// function Dog() {
//     this.name = "pic";
//     this.color = "white";
//     this.numLegs = 4;
//   }



//14
// function Dog(name) {
//     this.name = "Rupert";
//     this.color = "brown";
//     this.numLegs = 4;
//   }
//   // Only change code below this line
//   let hound = new Dog();


//15
// function Dog(name,color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
//     }
    
//     let terrier = new Dog("pic","white");



//16
// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
//   }
  
//   // Only change code below this line
//   let myHouse = new House(3);
//   myHouse instanceof House;


//17
// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }
  
//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   // Only change code below this line
//   for(let key in canary) {
//     if(canary.hasOwnProperty(key)) {
//       ownProps.push(key);
//     }
//   }

//Array

//1
// Only change code below this line
// var myArray = ["team",28];


//2
// Only change code below this line
// var myArray = [
//     []
//   ];

//3
// var myArray = [50,60,70];

// var myData = myArray[0];

//4
// // Setup
// var myArray = [18,64,99];
// myArray[0] = 45;
// // Only change code below this line



//5
// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// var myData = myArray[2][1];


//6
// // Setup
// var myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3])
// // Only change code below this line


//7
// // Setup
// var myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// var removedFromMyArray = myArray.pop()


//8
// Setup
// var myArray = [["John", 23], ["dog", 3]];

// // Only change code below this line
// var removedFromMyArray = myArray.shift()


//9
// Setup
// var myArray = [["John", 23], ["dog", 3]];
// myArray.shift();

// // Only change code below this line
// myArray.unshift(["Paul",35]);

//10
// var myList = [];
// myList.push(["Chocolate Bar", 15],["Coco", 13],["milk", 10],["water", 10],["juice", 10])



//Basic DataStructure : Array


//1
// let yourArray = [true,30,"team",60,54]; // Change this line



//2
// let myArray = ["a", "b", "c", "d"];
// // Only change code below this line
// myArray.splice(1,1,"bash")
// // Only change code above this line
// console.log(myArray);


//3
// function mixedNumbers(arr) {
//     // Only change code below this line
//   arr.unshift('I', 2, 'three');
//   arr.push(7, 'VIII', 9)
//     // Only change code above this line
//     return arr;
//   }
  
//   console.log(mixedNumbers(['IV', 5, 'six']));


//4
// function popShift(arr) {
//     let popped = arr.pop()// Change this line
//     let shifted = arr.shift() // Change this line
//     return [shifted, popped];
//   }
  
//   console.log(popShift(['challenge', 'is', 'not', 'complete']));
  

//5
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1,4);
// // Only change code above this line
// console.log(arr);


//6
// function htmlColorNames(arr) {
//     // Only change code below this line
//   arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
//     // Only change code above this line
//     return arr;
//   }
  
//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


//7
// function forecast(arr) {
//     // Only change code below this line
  
//     return arr.slice(2,4);
//   }
  
//   // Only change code above this line
//   console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


//8
// function quickCheck(arr, elem) {
//     // Only change code below this line
//   if(arr.indexOf(elem) < 0) {return false}
//   else {return true}
//     // Only change code above this line
//   }
  
//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));



//9
// function filteredArray(arr, elem) {
//     let newArr = [];
//     // change code below this line
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].indexOf(elem) == -1) {
//         //Checks every parameter for the element and if is NOT there continues the code
//         newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
//       }
//     }
  
//     // change code above this line
//     return newArr;
//   }
//   // change code here to test different cases:
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


//10
// let myNestedArray = [
//     // change code below this line
//     ["unshift", false, 1, 2, 3, "complex", "nested"],
//     ["loop", "shift", 6, 7, 1000, "method"],
//     ["concat", false, true, "spread", "array", ["deep"]],
//     ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
//     ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
//     // change code above this line
//   ];


//Method

//1
// The global variable
// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       "Metascore": "82",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       "Metascore": "70",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       "Metascore": "83",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//       "Response": "True"
//     }
//   ];
  
//   // Only change code below this line
  
//   const ratings = watchList.map(item => ({
//     title: item["Title"],
//     rating: item["imdbRating"]
//   }));
  
//   // Only change code above this line
  
//   console.log(JSON.stringify(ratings));


//2
// The global variable
// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       "Metascore": "82",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       "Metascore": "70",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       "Metascore": "83",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//       "Response": "True"
//     }
//   ];
  
//   // Only change code below this line
//   var filteredList = watchList
//     .map(movie => {
//       return {
//         title: movie.Title,
//         rating: movie.imdbRating
//       };
//     })
//     .filter(movie => {
     
//       return parseFloat(movie.rating) >= 8.0;
//     });
  
//   // Only change code above this line
  
//   console.log(filteredList);


//3
// function sliceArray(anim, beginSlice, endSlice) {
//     // Only change code below this line
//   return anim.slice(beginSlice,endSlice)
  
//     // Only change code above this line
//   }
//   var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
//   sliceArray(inputAnim, 1, 3);


//4
// function nonMutatingSplice(cities) {
//     // Only change code below this line
//     return cities.slice(0,3);
  
//     // Only change code above this line
//   }
//   var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
//   nonMutatingSplice(inputCities);


//5
// function nonMutatingConcat(original, attach) {
//     // Only change code below this line
//   return original.concat(attach)
  
//     // Only change code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingConcat(first, second);


//6
// function nonMutatingPush(original, newItem) {
//     // Only change code below this line
//     return original.concat(newItem);
  
//     // Only change code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingPush(first, second);


//7
// the global variable
// var watchList = [
//     {
//       Title: "Inception",
//       Year: "2010",
//       Rated: "PG-13",
//       Released: "16 Jul 2010",
//       Runtime: "148 min",
//       Genre: "Action, Adventure, Crime",
//       Director: "Christopher Nolan",
//       Writer: "Christopher Nolan",
//       Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//       Plot:
//         "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       Language: "English, Japanese, French",
//       Country: "USA, UK",
//       Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       Metascore: "74",
//       imdbRating: "8.8",
//       imdbVotes: "1,446,708",
//       imdbID: "tt1375666",
//       Type: "movie",
//       Response: "True"
//     },
//     {
//       Title: "Interstellar",
//       Year: "2014",
//       Rated: "PG-13",
//       Released: "07 Nov 2014",
//       Runtime: "169 min",
//       Genre: "Adventure, Drama, Sci-Fi",
//       Director: "Christopher Nolan",
//       Writer: "Jonathan Nolan, Christopher Nolan",
//       Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       Plot:
//         "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       Language: "English",
//       Country: "USA, UK",
//       Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       Metascore: "74",
//       imdbRating: "8.6",
//       imdbVotes: "910,366",
//       imdbID: "tt0816692",
//       Type: "movie",
//       Response: "True"
//     },
//     {
//       Title: "The Dark Knight",
//       Year: "2008",
//       Rated: "PG-13",
//       Released: "18 Jul 2008",
//       Runtime: "152 min",
//       Genre: "Action, Adventure, Crime",
//       Director: "Christopher Nolan",
//       Writer:
//         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       Plot:
//         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       Language: "English, Mandarin",
//       Country: "USA, UK",
//       Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       Metascore: "82",
//       imdbRating: "9.0",
//       imdbVotes: "1,652,832",
//       imdbID: "tt0468569",
//       Type: "movie",
//       Response: "True"
//     },
//     {
//       Title: "Batman Begins",
//       Year: "2005",
//       Rated: "PG-13",
//       Released: "15 Jun 2005",
//       Runtime: "140 min",
//       Genre: "Action, Adventure",
//       Director: "Christopher Nolan",
//       Writer:
//         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       Plot:
//         "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       Language: "English, Urdu, Mandarin",
//       Country: "USA, UK",
//       Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       Metascore: "70",
//       imdbRating: "8.3",
//       imdbVotes: "972,584",
//       imdbID: "tt0372784",
//       Type: "movie",
//       Response: "True"
//     },
//     {
//       Title: "Avatar",
//       Year: "2009",
//       Rated: "PG-13",
//       Released: "18 Dec 2009",
//       Runtime: "162 min",
//       Genre: "Action, Adventure, Fantasy",
//       Director: "James Cameron",
//       Writer: "James Cameron",
//       Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       Plot:
//         "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       Language: "English, Spanish",
//       Country: "USA, UK",
//       Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       Metascore: "83",
//       imdbRating: "7.9",
//       imdbVotes: "876,575",
//       imdbID: "tt0499549",
//       Type: "movie",
//       Response: "True"
//     }
//   ];
  
//   function getRating(watchList){
//     // Add your code below this line
//     var averageRating =
//     watchList
//       // Use filter to find films directed by Christopher Nolan
//       .filter(film => film.Director === "Christopher Nolan")
//       // Use map to convert their ratings from strings to numbers
//       .map(film => Number(film.imdbRating))
//       // Use reduce to add together their ratings
//       .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
//     // Divide by the number of Nolan films to get the average rating
//     watchList.filter(film => film.Director === "Christopher Nolan").length;
//     // Add your code above this line
//     return averageRating;
//   }
//   console.log(getRating(watchList));


//8
// const squareList = (arr) => {
//     // Only change code below this line
//     return arr
//             .filter(num => num > 0 && num % parseInt(num) === 0)
//             .map(num => Math.pow(num, 2));
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);

//9
// function alphabeticalOrder(arr) {
//     // Only change code below this line
//   return arr.sort(function(a, b) {
//       return a === b ? 0 : a < b ? -1 : 1;
//     });
  
//     // Only change code above this line
//   }
//   alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//10
// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   // Add your code below this line
//   return [].concat(arr).sort(function(a, b) {
//     return a - b;
//   });
//   // Add your code above this line
// }
// nonMutatingSort(globalArray);


//11
// function splitify(str) {
//     // Add your code below this line
//     return str.split(/\W/);
//     // Add your code above this line
//   }
//   splitify("Hello World,I-am code");

//12
// function sentensify(str) {
//     // Add your code below this line
//     return str.split(/\W/).join(" ");
//     // Add your code above this line
//   }
//   sentensify("May-the-force-be-with-you");


//13
// function checkPositive(arr) {
//     // Add your code below this line
  
//     return arr.every(val => val > 0);
//     // Add your code above this line
//   }
//   checkPositive([1, 2, 3, -4, 5]);

  //14
//   function checkPositive(arr) {
//     return arr.some(elem => elem > 0);
//   }
//   checkPositive([1, 2, 3, -4, 5]);