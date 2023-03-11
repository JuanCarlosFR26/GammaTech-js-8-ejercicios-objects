// 💻 Ejercicios

// Ejercicios: Nivel 1
// Crear un objeto vacío llamado dog
const dog = {};

// Imprime el objeto dog en la consola
console.log(dog);

// Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = 'Toby';
dog.legs = 3;
dog.color = 'Morado';
dog.bark = function () {
    return `Woof Woof!`;
};

// Obtener name, legs, color, age y el valor de bark del objeto dog
console.log(`El perro se llama ${dog.name}. Tiene ${dog.legs} patas y es de color ${dog.color}. El perro hace ${dog.bark()}`);

// Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = 'Mestizo';
dog.getDofInfo = function () {
    return `El perro se llama ${dog.name} y es de raza ${dog.breed}. Tiene ${dog.legs} patas y es de color ${dog.color}. El perro hace ${dog.bark()}`
}

// Ejercicios: Nivel 2

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Alfred: {
    email: 'alfred@alfred.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node.js'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node.js'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
let userWithMostSkills;
let maxSkills = 0;
for (const user in users) {
  const skillsCount = users[user].skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    userWithMostSkills = user;
  }
}
console.log(`User con más habilidades: ${userWithMostSkills}`);


// Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.
let userConected = 0;
for(const user in users) {
    const conected = users[user].isLoggedIn;
    if(conected === true) {
        userConected += 1;
    }
}
console.log(`Hay ${userConected} usuarios conectados`);

let moreThanFifty = [];
for(const user in users) {
    const points = users[user].points;
    if(points > 50) {
        moreThanFifty.push(user);
    }
}
moreThanFifty.length === 0 ? console.log(`No hay usuarios con más de 50 puntos`) : console.log(moreThanFifty);


// Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
let userFullStack = [];
for(const user in users){
    const fullStack = users[user].skills;
    if(fullStack.includes('MongoDB', 'Express', 'React', 'Node.js')) {
        userFullStack.push(user);
    }
}
console.log(`Los usuarios que son fullStack son: ${userFullStack.join(' y ')}`);

// Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
let copyUsers = Object.assign({}, users);
copyUsers.JuanCarlos = {
    email: 'jcf.daw@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 28,
    isLoggedIn: true,
    points: 40
}
console.log(users);
console.log(copyUsers);

// Obtener todas las claves o propiedades del objeto usuarios
let keysUsers = Object.keys(users);
console.log(keysUsers);

// Obtener todos los valores del objeto usuarios
let valuesUsers = Object.values(users);
for(const value of valuesUsers) {
    console.log(value);
}

// Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.
users.Alex.country = {
    country: 'Spain',
    capital: 'Madrid',
    poblation: '50 millions',
    languages: 'Spanish, catalá, euskera'
}

users.Alfred.country = {
    country: 'France',
    capital: 'París',
    poblation: '67.75 millions',
    languages: 'Latin, French'
}

users.Brook.country = {
    country: 'Italy',
    capital: 'Roma',
    poblation: '59.11 millions',
    languages: 'Italian, spanish'
}
users.Daniel.country = {
    country: 'EEUU',
    capital: 'Washington D.C',
    poblation: '331.9 millions',
    languages: 'English, spanish'
}
users.John.country = {
    country: 'Germany',
    capital: 'Berlin',
    poblation: '83.2 millions',
    languages: 'English, German'
}

users.Paul.country = {
    country: 'Dinmarc',
    capital: 'Copenague',
    poblation: '5.85 millions',
    languages: 'English, Danish, Spanish'
}

users.Thomas.country = {
    country: 'Finland',
    capital: 'Helsinki',
    poblation: '5.54 millions',
    languages: 'Spanish, English'
}

for(const user in users) {
    const country = users[user].country;
    console.log(`Los datos del usuario, ${user} son: \n País: ${country.country} \n Capital: ${country.capital} \n Población: ${country.poblation} \n Idiomas: ${country.languages}`)
}

// Ejercicios: Nivel 3

// Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.
const personAccount = {
    firstName: 'Name',
    lastName: 'Last Name',
    incomes: {
        ingresos: '1000',
        description: 'Description'
    },
    expenses: {
        ingresos: '1000',
        description: 'Description'
    },
    totalIncome: function() {

    },
    totalExpense: function() {

    },
    accountInfo: function() {

    },
    addIncome: function() {

    },
    addExpense: function() {

    },
    accountBalance: function() {

    }
}

// **** Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()

const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Alfred",
    email: "alfred@alfred.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB.
// a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
// const copyUsers2 = users2.copyWithin();
// function signUp() {
//     let email = prompt('Introduce tu email: ');
//     let bool = false;
//     for(const user in copyUsers2) {
//         if(email == users2[user].email) {
//             bool = true;
//             alert('Este usuario ya existe');
//             break;
//         }
//     }
//    if(!bool) {
//     let strRand = '';
//     let pattern = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';
//     for (let i = 0; i <= 6; i++) {
//         strRand += pattern.charAt(Math.floor(Math.random() * pattern.length));
//     }
//     const username = prompt('Introduce un nombre de usuario: ');
//     const password = parseInt(prompt('Introduce una contraseña numérica: '));
//     const idUser = strRand;
//     const emailUser = email;
//     const newDate = new Date()
//     let actualYear = newDate.getFullYear().toString();
//     let actualMonth = (newDate.getMonth() + 1).toString();
//     let lengthActualMonth = actualMonth.length;
//     let actualDay = newDate.getDate().toString();
//     let lengthActualDay = actualDay.length;
//     let actualHour = newDate.getHours().toString();
//     let lengthActualHour = actualHour.length;
//     let actualMinutes = newDate.getMinutes().toString();
//     let lengthActualMinutes = actualMinutes.length;
//     const isLoged = true;
//     let dateCreatedAt = (lengthActualDay == 2?(actualDay):"0"+(actualDay)) + "/" + (lengthActualMonth == 2?(actualMonth):"0"+(actualMonth)) + "/" + actualYear + " " + (lengthActualHour == 2? actualHour:"0"+actualHour) + ":" + (parseInt(lengthActualMinutes)==2?parseInt(actualMinutes):"0"+ parseInt(actualMinutes)) + " " + (parseInt(actualHour) < 12 ? "AM" : "PM");
//     let newUser = {
//         _id: idUser,
//         username: username,
//         email: emailUser,
//         password: password,
//         createAt: dateCreatedAt,
//         isLoggedIn: isLoged
//     }
//     copyUsers2.push(newUser);
//    }

// }

// signUp();
// console.log(users2);


// b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación
// function signIn() {
//     let email = prompt('Introduce tu email: ');
//     let bool = false;
//     for(const user in users2) {
//         if(email === users2[user].email) {
//             bool = true;
//             alert('Este usuario está registrado');
//             let userValue = email;
//             let password = parseInt(prompt('Introduce la contraseña: '));
//             for(const user in users2) {
//                 if(userValue === users2[user].email) {
//                     if(password.toString() === users2[user].password.toString()) {
//                         console.log('correcto')
//                     } else {
//                         console.log('Contraseña incorrecta')
//                     }
//                 }
//             }
//         }
//     }
// }

// signIn();

// El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades.
// a. Crear una función llamada rateProduct que califique el producto
function rateProduct(name, rate, userId) {
    for(const property of products) {
        if(name === property.name) {
            if(property.ratings.length === 0) {
                let user = {
                    userId: userId,
                    rate: rate
                }
                property.ratings.push(user)
            } else {
                for(const properties of property.ratings) {
                    if(properties.userId === userId) {
                        console.log('el usuario ya ha valorado');
                    }
                }
                break;
            }
        }
    }
    console.log(products);
}

rateProduct("Laptop", 4, "fg12cy");

// b. Crear una función llamada averageRating que calcule la valoración media de un producto
function averageRating(name) {
  let sum = 0;
  for(const property of products) {
    if(name === property.name) {
      if(property.ratings.length > 0) {
        for(const rate of property.ratings) {
          sum += rate.rate;
        }
        return `La valoración media de ${name} es ${sum / 2}`
      }
    }
  }


}

console.log(averageRating("mobile phone"));

// Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like
function likeProduct(name, userId, like) {
  for(const property of products) {
    if(name === property.name) {
      if(property.likes.length === 0 && like === true) {
        property.likes.push(userId);
      } else {
        for(const properties of property.likes) {
          if(properties === userId) {
              console.log('el usuario ya ha valorado');
          }
      }
        break;
      }
    }
  }
  for(const property of products) {
    if(name === property.name) {
      if(property.likes.length > 0) {
        console.log(`Este usuario ha votado: ${property.likes}`);
      } else {
        for(const properties of property.likes) {
          if(properties === userId && like === false) {
            properties = [];
          }
        }
      }
    }
  }
  console.log(products)
}

console.log(likeProduct('TV', 'fg12cy', false));