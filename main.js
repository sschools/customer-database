console.log(customers);

let container = document.getElementById("main-list");

createListElement = function(person) {
  let newItem = document.createElement("li");
  let newPerson = `
      <h4>${person.name.first} ${person.name.last}</h4>
      <p id="email">${person.email}</p>
      <br>
      <p class="address">${person.location.street}</p>
      <p class="address">${person.location.city}, ${person.location.state} ${person.location.postcode}</p>
      <p id="phone">${person.phone}</p>
      <br>
      <p id ="ssn">${person.id.value}</p>
  `;
  newItem.innerHTML = newPerson;
  container.appendChild(newItem);
}

for (let i = 0; i < customers.results.length; i++) {
  let current = customers.results[i];
  let phone = current.phone;
  phone = phone.replace("(","");
  phone = phone.replace(")","");
  current.phone = phone;
  console.log(current);
  createListElement(current);
}
