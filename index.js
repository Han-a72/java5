const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); 
console.log(secondColor); 
console.log(thirdColor); 

//part2
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
const { name, age, city } = person;

console.log(name); 
console.log(age);  
console.log(city); 


// part3
const settings = { theme: 'dark', language: 'en' };

const { theme, language, mode = 'light' } = settings;

console.log(theme);    
console.log(language); 
console.log(mode);     
