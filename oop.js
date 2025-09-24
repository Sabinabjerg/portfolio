const project1 = new Project("Mit Portfolio", "Et projekt jeg har lavet", "img/projekt1.png");
const profile = new Profile("Sabina", "Multimediedesigner", "img/dame.PNG", ["24 år", "Studerende"], "Jeg elsker webdesign og kreative projekter.");

const experience1 = new Experience("IBA", "Uddannelse i multimediedesign", "img/iba.PNG");

const contact = new Contact("sabina.bjerg@outlook.com", "+45 22 54 97 54", "Borgergade 25, 8831 Løgstrup");

// Tilføj til DOM’en
document.querySelector("main").appendChild(profile.render());
document.querySelector("main").appendChild(project1.render());
document.querySelector("main").appendChild(experience1.render());
document.querySelector("main").appendChild(contact.render());






// === Project Class ===
class Project {
  constructor(title, description, imageUrl) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  render() {
    const section = document.createElement("section");
    section.classList.add("cases");

    section.innerHTML = `
      <img src="${this.imageUrl}" alt="Projektbillede">
      <p>${this.description}</p>
      <button>Se mere</button>
    `;
    return section;
  }
}

// === Profile Class ===
class Profile {
  constructor(name, title, imageUrl, facts, aboutText) {
    this.name = name;
    this.title = title;
    this.imageUrl = imageUrl;
    this.facts = facts;
    this.aboutText = aboutText;
  }

  render() {
    const section = document.createElement("section");
    section.classList.add("hero");

    section.innerHTML = `
      <h1>${this.name}</h1>
      <h4>${this.title}</h4>
      <img src="${this.imageUrl}" alt="Billede af ${this.name}">
      <div class="facts">
        <aside class="venstre">
          ${this.facts.map(fact => `<h4>${fact}</h4>`).join("")}
        </aside>
        <aside class="højre">
          <p>${this.aboutText}</p>
        </aside>
      </div>
    `;
    return section;
  }
}

// === Experience Class ===
class Experience {
  constructor(schoolName, description, imageUrl) {
    this.schoolName = schoolName;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("experience-item");

    div.innerHTML = `
      <img src="${this.imageUrl}" alt="${this.schoolName}">
      <p>${this.description}</p>
    `;
    return div;
  }
}

// === Contact Class ===
class Contact {
  constructor(email, phone, address) {
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  render() {
    const section = document.createElement("section");
    section.classList.add("kontakt");

    section.innerHTML = `
      <h1>Kontakt mig</h1>
      <div class="info">
        <p><strong>Email:</strong> ${this.email}</p>
        <p><strong>Telefon:</strong> ${this.phone}</p>
        <p><strong>Adresse:</strong> ${this.address}</p>
      </div>
    `;
    return section;
  }
}

// === Eksempel: Brug dine klasser ===
const project1 = new Project("Mit Portfolio", "Et projekt jeg har lavet", "img/download.jfif");
const profile = new Profile(
  "Sabina Bjerggaard Andersen",
  "Multimediedesigner",
  "img/dame.PNG",
  ["24 år", "Studerende", "Bor i Løgstrup"],
  "Jeg elsker at arbejde kreativt med webdesign og udvikling."
);
const experience1 = new Experience("IBA", "Uddannelse i multimediedesign", "img/iba.PNG");
const contact = new Contact("sabina.bjerg@outlook.com", "+45 22 54 97 54", "Borgergade 25, 8831 Løgstrup");

// === Tilføj til DOM ===
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  main.appendChild(profile.render());
  main.appendChild(project1.render());
  main.appendChild(experience1.render());
  main.appendChild(contact.render());
});
