import data from "./data.json" assert { type: "json" };
const year = document.querySelector(".year");
const projects = document.querySelector(".project-section");

const yr = new Date().getFullYear();
year.textContent = yr;

const project = data
  .map((item) => {
    const { title, desc, id, demo, source, image, stack } = item;

    return ` <article data-id=${id} class="project">
  <div class="left">
    <img src=${image} alt="" class="image" />
  </div>
  <div class="right">
    <h2 class="heading">${title}</h2>
    <p class="content">
     ${desc}
    </p>
    <div class="stacks">
    ${stack
      .map((el) => {
        return `<span class="stack">${el}</span>`;
      })
      .join("")}
    </div>
    <div class="buttons">
      <a href=${demo} target="_blank">
        <button class="btn demo">
          Live Demo
          <span
            ><img class="icon arrow" src="./svg/arrow-up.svg" alt=""
          /></span>
        </button>
      </a>
      <a href=${source} target="_blank">
        <button class="btn source">
          View source
          <span
            ><img class="icon github" src="./svg/github.svg" alt=""
          /></span>
        </button>
      </a>
    </div>
  </div>
</article>`;
  })
  .join("");

projects.innerHTML = project;
