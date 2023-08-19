// Functions to read elements by class or name
const $ = (elementOrClass) => document.querySelector(elementOrClass);

/**
 * Below are scripts to populate my works section with projects
 */
const allProjectsArray = [
  {
    id: 1,
    title: 'The CycleCruise App',
    image: './assets/img/cruise-moto.png',
    altText: 'project image',
    company: 'Microverse',
    role: 'Fullstack Dev',
    year: 2023,
    description:
      'The CycleCruise project was based on an app to book an appointment to try a motorcycle. It followed the given design of the website, but we personalized the content to suite our needs. We built an app to reserve a test drive for a motor cycle.',
    skills: ['React', 'Rails', 'PostgreSQL'],
    demoLink: 'https://thecyclecruise.onrender.com',
    sourceLink: 'https://github.com/c00p75/appointment-app-backend',
  },
  {
    id: 2,
    title: 'Recipe app',
    image: './assets/img/recipes-app.png',
    altText: 'project image',
    company: 'Microverse',
    role: 'Fullstack Dev',
    year: 2023,
    description:
      'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    skills: ['Rails', 'PostgreSQL', 'JavaScript'],
    sourceLink: 'https://github.com/veronica365/recepies-app',
  },
  {
    id: 3,
    title: 'Budget Buddy',
    image: './assets/img/buddget-buddy.png',
    altText: 'project image',
    company: 'Microverse',
    role: 'Fullstack Dev',
    year: 2023,
    description:
      'Budget Buddy is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    skills: ['Rails', 'PostgreSQL', 'JavaScript'],
    demoLink: 'https://budget-buddy-v9u9.onrender.com',
    sourceLink: 'https://github.com/veronica365/budget-buddy',
  },
  {
    id: 4,
    title: 'Rails blog',
    image: './assets/img/rails-blog.png',
    altText: 'project image',
    company: 'Microverse',
    role: 'Fullstack Dev',
    year: 2023,
    description: `The Blog app will be a classic example of a blog website. The web app that features authentication and lets the admin create stories, delete, edit, comment and like a post while a user can view, comment and like a given post.
       You will create It'a fully functional website that shows the list of posts and empower readers to interact with them by adding comments and liking posts.`,
    skills: ['Rails', 'PostgreSQL', 'JavaScript'],
    // demoLink: "https://github.com/veronica365/rails-blog",
    sourceLink: 'https://github.com/veronica365/rails-blog',
  },
  {
    id: 5,
    title: 'BookStore CMS',
    image: './assets/img/bookstore.png',
    altText: 'project image',
    company: 'Microverse',
    role: 'Frontent Dev',
    year: 2023,
    description:
      'The Bookstore is a website similar to the Awesome Books website that allows users to display a list of books, add a book, remove a selected book. The application will be built using React and Redux in the context of a real application.',
    skills: ['React', 'Redux', 'JavaScript'],
    demoLink: 'https://boosktore-react.onrender.com/',
    sourceLink: 'https://github.com/veronica365/boostore-react',
  },
  {
    id: 6,
    title: 'Countries data',
    image: './assets/img/countries.png',
    altText: 'project image',
    company: 'Microverse',
    role: 'Frontent Dev',
    year: 2023,
    description:
      'Countries data is a React capstone project about building a mobile web application to check a list of metrics (numeric values) that you will create making use of React and Redux',
    skills: ['React', 'Redux', 'JavaScript'],
    demoLink: 'https://countries-data-4ptm.onrender.com',
    sourceLink: 'https://github.com/veronica365/countries-data',
  },
  {
    id: 7,
    title: 'My portfolio',
    image: './assets/img/portfolio.png',
    altText: 'project image',
    company: 'Microverse',
    role: 'Frontent Dev',
    year: 2023,
    description:
      'A basic portfolio website that show more details about my profile and projects that I have worked on. And how to reach out me in case you need my services',
    skills: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://veronica365.github.io/portfolio',
    sourceLink: 'https://github.com/veronica365/portfolio',
  },
  {
    id: 8,
    title: 'Magic magicians',
    image: './assets/img/math-magic.png',
    altText: 'project image',
    company: 'Microverse',
    role: 'Frontent Dev',
    year: 2023,
    description:
      'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    skills: ['React', 'HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://countries-data-4ptm.onrender.com',
    sourceLink: 'https://github.com/c00p75/appointment-app-backend',
  },
];

const generateWorkSkils = (skills, element) => {
  let innerHTML = '';
  skills.forEach((skill) => {
    innerHTML += `<${element} class="skill">${skill}</${element}>`;
  });
  return innerHTML;
};

const generateWorkProjects = (works) => {
  let innerHTML = '';
  works.forEach((project) => {
    innerHTML += `<article class="media">
    <div class="media-img img-1">
      <img src=${project.image} alt="work-image" />
    </div>
    <div class="media-body">
      <h4>${project.title}</h4>
      <div class="role">
        <span>${project.company}</span>
        <i></i>
        <span>${project.role}</span>
        <i></i>
        <span>${project.year}</span>
      </div>
      <div class="description">
        <p>${project.description}</p>
      </div>
      <ul class="skills">
      ${generateWorkSkils(project.skills, 'li')}
      </ul>
      <div class="read-more">
        <a href="${
  project.demoLink
}" target="_blank" rel="noopener noreferrer" class="read-more-link" data-project-id="${
  project.id
}"> See Project </a>
      </div>
    </div>
  </article>`;
  });
  return innerHTML;
};

const works = $('#projects')?.getElementsByClassName('content')?.[0];
if (works) works.innerHTML = `${generateWorkProjects(allProjectsArray)}`;
const formButton = $('#contact-me form button');

/**
 * Below are scripts to show the details popup modal
 */

const generateModal = (work) => `
    <div class="modal-content">
      <div class="media-body">
        <div class="article-header">
          <h4>${work.title}</h4>
          <span class="close-button">
            <img src="./assets/img/close-icon-2.png" alt="close icon" width="12" height="12" /></span>
        </div>
        <div class="role">
          <span>${work.company}</span>
          <i></i>
          <span>${work.role}</span>
          <i></i>
          <span>${work.year}</span>
        </div>
      </div>
      <div class="media-img">
        <img src=${work.image} alt=${work.altText} />
      </div>
      <div class="project-data">
        <p class="description">${work.description}</p>
        <div>
          <div class="skills">
            ${generateWorkSkils(work.skills, 'span')}
          </div>
          <div class="read-more">
            ${
  (work.demoLink
                && `<a href="${work.demoLink}" target="_blank" rel="noopener noreferrer">
                Demo
                <img
                  src="./assets/img/Icon-Export.svg"
                  width="24"
                  height="24"
                  alt="Live demo dutton"
                />
              </a>`)
              || ''
}
            <a href="${
  work.sourceLink
}" target="_blank" rel="noopener noreferrer">
              Source <img src="./assets/img/Icon-GitHub.png" width="24" height="24" alt="Live demo dutton" />
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

/**
 * Generate a toast html to the right element
 */
const generateToast = (detail) => `
  <div>
    <h5>Hi ${detail.name}</h5>
    <p>${detail.message}</p>
  </div>`;

/**
 * display a toast html body
 */
const displayToast = ({ name, status, message }) => {
  const toast = document.createElement('div');
  toast.className = `message-toast ${status}`;
  toast.innerHTML = generateToast({ name, message });
  $('.wrap').appendChild(toast);
  formButton.removeAttribute('disabled');
  setTimeout(() => {
    $('.message-toast').remove();
  }, 5000);
};

/**
 * display a toast html body
 */
const setInnerText = (element, text) => {
  if (element.innerText) {
    element.innerText = String(text);
    return element.innerText;
  }
  element.textContent = String(text);
  return element.textContent;
};

const readMoreLinks = document.querySelectorAll('.read-more-link');
readMoreLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const workId = event.target.getAttribute('data-project-id');
    const project = allProjectsArray.find(({ id }) => String(id) === workId);
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';
    modal.innerHTML = generateModal(project);
    document.body.appendChild(modal);
    $('.article-header .close-button')?.addEventListener('click', () => {
      $('#modal').remove();
    });
  });
});

/**
 * Below are scripts to show the mobile menu onclicking the hamburger button
 */

const menu = $('.mobile-nav');
const wrap = $('.wrap');
const menuButton = $('.menu-button');
const skills = document.querySelectorAll('.about-me-more ul li.categories a');

// Used to show or hide navigation modal
function toggleNavigationModal() {
  $('.toolbar').classList.toggle('open');
  wrap.classList.toggle('mobile-menu-open');
}

// Used to hide navigation modal on clicking x or menu links
function hideNavigationModal() {
  menu.classList.toggle('open');
  toggleNavigationModal();
  wrap.removeEventListener('click', () => null);
}

// show or hide the navigation menu on clicking .mobile-nav
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggleNavigationModal();
});

// show or hide the navigation menu on clicking .mobile-nav
menuButton.addEventListener('click', () => {
  hideNavigationModal();
});

// Get all links, add click eventlisteners, click on one to
// scroll correct part of the page into view
const allLinks = document.querySelectorAll('.menu-item');
allLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    hideNavigationModal();
    $(link.hash).scrollIntoView({ behavior: 'smooth' });
  });
});

skills.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    link.parentElement.classList.toggle('open');
  });
});

/**
 *
 * @param {*} url API that we are submitting to my user details
 * @param {*} data Data that is being submitted to the API
 * @returns {Object} Native javascript objects
 */
async function postData(data) {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('message', data.message);
  try {
    await fetch('https://formspree.io/f/moqzvdbe', {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: formData,
    });
    displayToast({
      ...data,
      status: 'success',
      message: 'Message submitted successfully.',
    });
  } catch (error) {
    displayToast({
      ...data,
      status: 'error',
      message: 'Submitting your message failed',
    });
  }
}

/**
 * Below are scripts to validate the form before submitting
 */
const contactForm = $('#contact-me form');
const formMessage = $('#form-message');
const setFormMessage = (message) => {
  formMessage.innerText = message;
  if (!formMessage.matches('.form-message')) {
    formMessage.classList.add('form-message');
  }
};

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  let error = '';
  setFormMessage(error);
  const name = contactForm.elements.name.value.trim();
  const email = contactForm.elements.email.value.trim();
  const message = contactForm.elements.message.value.trim();
  let isValidEmail = false;

  if (!email || !message || !name) {
    error = 'Error: Ensure that there are no blank fields';
    displayToast({ name: name || 'There', status: 'error', message: error });
    return setFormMessage(error);
  }

  isValidEmail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/gi.test(
    email,
  );
  if (!isValidEmail) {
    error = 'Error: Ensure that you have typed the correct email';
    displayToast({ name: name || 'There', status: 'error', message: error });
    return setFormMessage(error);
  }

  if (email !== String(email).toLowerCase()) {
    error = 'Error: Ensure that the email is typed in lowercase';
    displayToast({ name: name || 'There', status: 'error', message: error });
    return setFormMessage(error);
  }
  // This line is used to prevent multiple submitts as the previous submit
  // is still being processed
  formButton.setAttribute('disabled', '');
  setInnerText(formButton, '... submitting');
  formMessage.classList.remove('form-message');
  await postData({ name, email, message });
  setInnerText(formButton, 'Get in touch');
  return true;
});
