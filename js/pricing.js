const data = [
  {
    plane: "free",
    monthlyPayment: "15$",
    fetures: [
      "10 users included",
      "Help center access",
      "Email support",
      "2 GB of storage",
    ],
    btnText: "Sign up for free",
  },
  {
    plane: "pro",
    monthlyPayment: "0$",
    fetures: [
      "20 users included",
      "Help center access",
      "Email support",
      "10 GB of storage",
    ],
    btnText: "Get started",
  },
  {
    plane: "Enterprise",
    monthlyPayment: "29$",
    fetures: [
      "100 users included",
      "Help center access",
      "Email support",
      "200 GB of storage",
    ],
    btnText: "Contact us",
  },
];

const row = document.getElementById("row");

for (let item = 0; item < data.length; item++) {
  const container = document.createElement("div");
  const card = document.createElement("div");
  const cardHeader = document.createElement("div");
  const cardHeaderTitle = document.createElement("h4");
  const cardBody = document.createElement("div");
  const cardBodyTitle = document.createElement("h1");
  const cardBodyList = document.createElement("ul");
  const cardBodyButton = document.createElement("button");

  if (data[item].plane === "Enterprise") {
    cardHeader.classList.add("text-bg-primary", "border-primary");
    card.classList.add("border-primary");
  }

  if (data[item].plane === "free") {
    cardBodyButton.classList.add("btn-outline-primary");
  } else {
    cardBodyButton.classList.add("btn-primary");
  }

  for (let i = 0; i < data[item].fetures.length; i++) {
    const cardBodyListItem = document.createElement("li");
    cardBodyListItem.textContent = data[item].fetures[i];
    cardBodyList.appendChild(cardBodyListItem);
  }

  cardBodyButton.type = "button";
  cardBodyButton.textContent = data[item].btnText;
  cardBodyButton.classList.add("w-100", "btn", "btn-lg");

  cardBodyList.classList.add("list-unstyled", "mt-3", "mb-4");

  cardBodyTitle.classList.add("card-title", "pricing-card-title");
  cardBodyTitle.innerHTML = `${data[item].monthlyPayment} <small class="text-body-secondary fw-light">/mo</small>`;

  cardBody.classList.add("card-body");

  cardHeaderTitle.classList.add("my-0", "fw-normal");
  cardHeaderTitle.textContent = `${data[item].plane.toUpperCase()}`;

  cardHeader.classList.add("card-header", "py-3");

  card.classList.add("card", "mb-4", "rounded-3", "shadow-sm");

  container.classList.add("col");

  cardBody.appendChild(cardBodyTitle);
  cardBody.appendChild(cardBodyList);
  cardBody.appendChild(cardBodyButton);
  cardHeader.appendChild(cardHeaderTitle);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);

  container.appendChild(card);

  row.appendChild(container);
}



