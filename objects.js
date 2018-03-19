// Use this object for all tests
const user = {
    name: 'Steven',
    age: 25,
    title: 'Lead Instructor',
    students: [
        { name: 'Larry', cohort: 'DM10' },
        { name: 'Jin', cohort: 'DM10' },
        { name: 'Mario', cohort: 'DM9' },
        { name: 'Bryce', cohort: 'DM10' },
        { name: 'Mackenzie', cohort: 'DM8' },
        { name: 'Chris', cohort: 'DM9' },
    ],
    addStudent(student) {
        this.students.push(student);
    },
};

// Access the name property on the user and store it in a variable called username. Use dot notation.
let username = user.name;

// Change the user's title to 'Student'. Use dot notation.
user.title = 'Student';

// Access the updated title property on the user and store it in a variable called title. Use bracket notation.
let title = user['title'];

// Change the user's age to 50 and store the updated age to a variable called age. Use bracket notation.
user['age'] = 50;
age = user['age'];

// Loop over and log the key and value of each key/value pair in the user
for(var key in user){
    console.log(user[key]);
}

// Add a new student object to the end of the students array on the user. Utilize the addStudent method to achieve this.
user.addStudent({name: 'Bill', cohort: 'DM12'});

// Change each student with a cohort of DM10 to DM13.
user.students.forEach((val, i, arr) => user.students[i]['cohort'] === 'DM10' ? user.students[i]['cohort'] = 'DM13': null);

/* Add an 'attributes' property to the user. It should be an object
    with the following properties:
    hairColor: 'blonde',
    eyeColor: 'hazel',
    height: 72
*/

user.attributes = {
    hairColor: 'blonde',
    eyeColor: 'hazel',
    height: 72
}


// Change the hairColor property to brown. Use dot notation.
user.attributes.hairColor = 'brown';


// Change the height to 77. Use bracket notation.
user['attributes']['height'] = 77;


// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

creditCard = {
    number: '1234-5678-2321-2123',
    cvc: '989',
    type: 'Visa',
    limit: 5000
}
// Create a variable called alternating. Set it equal to the string bonusCategories.
let alternating = 'bonusCategories';

/* Using bracket notation, add a bonusCategories key to your creditCard object
    using the 'alternating' variable you just created.
    Set it's value to an array of 3 items that are objects.
    Each object should have one key value pair.
    That key value pair should be the category as the key and the percent it's worth for the bonus as the value.
    (e.g. Department Stores, 5%)
    */

a
// Write a function called merge that will take your creditCard object and the user object as arguments and combine them into one object. Return that object /* HINT: You will need a for..in loop */


// Invoke merge and store the return value in a variable called userCC.


/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to equal 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'Little Finger'],
    alive: 'Sort of',
    hunky: true
};

// Invoke the function and store the return value in a variable called jonSnow


// Remove the hunky property from the object above
