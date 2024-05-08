const students = [
   {
       id:1,
       firstName: "Jonas",
       lastName: "Jonaitis",
       group: "JS22",
       results: {
           'db': 7.5,
           'js': 8,
           'Linux': 6
       }
   },
   {
       id:2,
       firstName: "Petras",
       lastName: "Petraitis",
       group: "JS23",
       results: {
           'db': 5.5,
           'js': 4,
           'Linux': 9
       }
   },
   {
       id:3,
       firstName: "Vardenis",
       lastName: "Pavardenis",
       group: "JS23",
       results: {
           'db': 4.5,
           'js': 8,
           'Linux': 6
       }
   },
   {
       id:4,
       firstName: "Tomas",
       lastName: "Tomaitis",
       group: "JS24",
       results: {
           'db': 9.5,
           'js': 4,
           'Linux': 6
       }
   },
   {
       id:5,
       firstName: "Ieva",
       lastName: "Ievaite",
       group: "JS24",
       results: {
           'db': 9.5,
           'js': 8,
           'Linux': 9
       }
   }
]
let filteredStudents = students.filter((student)=>(student.firstName.length>5));
console.log(filteredStudents);
//------------------------------------------------------------------------------
function filteredStudentsTwo(group){
   const newFilteredStudents = students.filter((student)=>(student.group === group))
   return newFilteredStudents
}

console.log(filteredStudentsTwo('JS22'));

//-----------------------------------------------------------------------------
const getAverage = (array)=>{
   return array.reduce((a, b) => a + b) / array.length;
}

const getByAverage = (average)=>{
  let filteredStudentsByAverage = students.filter((student)=> getAverage(Object.values(student.results))>average);
      return filteredStudentsByAverage
}
console.log(getByAverage(8))

//------------------------------------------------------------------------------

let books = [
   {
       name: "Fantasy",
       books: [
           {
               isbn: "FAN001",
               release_date: 2022,
               title: "D Fantasy Book 1",
               num_of_pages: 120,
               price: 125.56,
           },
           {
               isbn: "FAN002",
               release_date: 2021,
               title: "C Fantasy Book 2",
               num_of_pages: 150,
               price: 25.56,
           },
           {
               isbn: "FAN003",
               release_date: 2020,
               title: "A Fantasy Book 3",
               num_of_pages: 170,
               price: 35.70,
           },
           {
               isbn: "FAN004",
               release_date: 2019,
               title: "B Fantasy Book 4",
               num_of_pages: 190,
               price: 40.10,
           },
       ]
   },
   {
       name: "Poetry",
       books: [
           {
               isbn: "POE001",
               release_date: 2008,
               title: "X Poetry Book 1",
               num_of_pages: 99,
               price: 36.78,
           },
           {
               isbn: "POE002",
               release_date: 2023,
               title: "C Poetry Book 2",
               num_of_pages: 139,
               price: 78.80,
           },
           {
               isbn: "POE003",
               release_date: 2006,
               title: "D Poetry Book 3",
               num_of_pages: 159,
               price: 56.60,
           },
           {
               isbn: "POE004",
               release_date: 2005,
               title: "A Poetry Book 4",
               num_of_pages: 179,
               price: 78.70,
           },
       ]
   },
   {
       name: "Horror",
       books: [
           {
               isbn: "HOR001",
               release_date: 2004,
               title: "G Horror Book 1",
               num_of_pages: 300,
               price: 100.05,
           },
           {
               isbn: "HOR002",
               release_date: 2006,
               title: "E Horror Book 2",
               num_of_pages: 500,
               price: 250.50,
           },
           {
               isbn: "HOR003",
               release_date: 2023,
               title: "F Horror Book 3",
               num_of_pages: 600,
               price: 13.37,
           },
           {
               isbn: "HOR004",
               release_date: 2000,
               title: "R Horror Book 4",
               num_of_pages: 650,
               price: 85.36,
           },
       ]
   },
];


function findMinPrice(books) {
   let minPrice = Infinity;
   for (let category of books) {
       for (let book of category.books) {
           if (book.price < minPrice) { 
               minPrice = book.price;
           }
       }
   }
   return minPrice;
}
let li = document.createElement('li')
li.textContent = `Maziausia knygos kaina: ${findMinPrice(books)}`;
document.querySelector('ul').appendChild(li);

console.log(findMinPrice(books));