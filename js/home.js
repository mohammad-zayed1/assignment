//home page

const data = [
  {
    title: "Heading-1",
    description:
      " Some representative placeholder content for the three columns of text below the carousel. This is the first column.",
  },
  {
    title: "Heading-2",
    description:
      " Another exciting bit of representative placeholder content. This time, we've moved on to the second column.",
  },
  {
    title: "Heading-3",
    description:
      "And lastly this, the third column of representative placeholder content. This time, we've moved on to the second column.",
  },
];

for (let i = 0; i < data.length; i++) {
  const heading = document.getElementById("heading");
  const img = document.createElement("div");

  const header = document.createElement("h2");
  const description = document.createElement("p");
  const link = document.createElement("a");
  const linkContainer = document.createElement("p");
  const card = document.createElement("div");
  img.classList.add("rounded-circle", "m-auto");
  img.style.cssText = "width:140px; height:140px; background-color:#444;";

  header.classList.add("fw-normal");
  header.textContent = data[i].title;

  description.textContent = data[i].description;

  link.classList.add("btn", "btn-secondary");
  link.setAttribute("href", "#");
  link.innerHTML = "View details &raquo;";

  card.classList.add("col-lg-4");

  linkContainer.appendChild(link);

  card.appendChild(img);
  card.appendChild(header);
  card.appendChild(description);
  card.appendChild(linkContainer);

  heading.appendChild(card);
}

const links = document.querySelectorAll("a");



links.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    links.forEach(l => l.classList.remove('active'));

    // Add active class to the clicked link
    link.classList.add('active');
  });
});
