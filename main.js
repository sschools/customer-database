console.log(customers);

let container = document.getElementById("main-list");

createListElement = function(person) {
  let newItem = document.createElement("li");
  let newPerson = `
      <img src=${person.picture.large}>
      <h4>${person.name.first} ${person.name.last}</h4>
      <p id="email">${person.email}</p>
      <br>
      <p class="address">${person.location.street}</p>
      <p class="address">${person.location.city}, ${person.location.state} ${person.location.postcode}</p>
      <p id="phone">${person.phone}</p>
      <br>
      <p id="ssn">${person.id.value}</p>
  `;
  newItem.innerHTML = newPerson;
  container.appendChild(newItem);
}


for (let i = 0; i < customers.results.length; i++) {
  let current = customers.results[i];
  let phone = current.phone;

  let state = current.location.state;
  // This only works for these states... I should write it to include all 50 to make is reusable.
  switch (state) {
    case "missouri":
      state = "MO";
      break;
    case "vermont":
      state = "VT";
      break;
    case "west virginia":
      state = "WV";
      break;
    case "washington":
      state = "WA";
      break;
    case "arkansas":
      state = "AR";
      break;
    case "indiana":
      state = "IN";
      break;
    case "maryland":
      state = "MD";
      break;
    case "rhode island":
      state = "RI";
      break;
    case "utah":
      state = "UT";
      break;
    case "north dakota":
      state = "ND";
      break;
    case "oregon":
      state = "OR";
      break;
  }
  current.location.state = state;

  phone = phone.replace("(","");
  phone = phone.replace(")","");
  current.phone = phone;
  console.log(current);
  createListElement(current);
}
