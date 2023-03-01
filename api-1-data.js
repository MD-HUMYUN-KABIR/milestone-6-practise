const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };


  const foundName = result => {
    const foundPerson = document.getElementById('div')
    result.forEach(element => {
     console.log(element);
     const div = document.createElement('div');
     div.classList.add('innerDiv')
     div.innerHTML = `
     <p class="Person-name"> Person Name: ${element.name.common} </p>
     <p> Age: ${element.age} </p>
     <p> Street: ${element.address.street}, House No: ${element.address.house} </p>
     

     `
     foundPerson.appendChild(div);
    });
    
  }
 
  foundName(person.result);