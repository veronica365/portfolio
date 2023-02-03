// Functions to read elements by class or name
const $ = (elementOrClass) => document.querySelector(elementOrClass);

/**
 * Below are scripts to populate my works section with projects
 */
const allProjectsArray = [
  {
    id: 1,
    title: 'Tonic',
    image: './assets/img/portfolio-1.svg',
    altText: 'project image',
    company: 'CANOPY',
    role: 'Backend Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    skills: ['html', 'css', 'javascript'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: './assets/img/portfolio-2.svg',
    altText: 'project image',
    company: 'CANOPY',
    role: 'Backend Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    skills: ['html', 'css', 'javascript'],
  },
  {
    id: 3,
    title: 'Tonic',
    image: './assets/img/portfolio-3.svg',
    altText: 'project image',
    company: 'CANOPY',
    role: 'Backend Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    skills: ['html', 'css', 'javascript'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    image: './assets/img/portfolio-4.svg',
    altText: 'project image',
    company: 'CANOPY',
    role: 'Backend Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    skills: ['html', 'css', 'javascript'],
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
        <a href="#" class="read-more-link" data-project-id="${
  project.id
}"> See Project </a>
      </div>
    </div>
  </article>`;
  });
  return innerHTML;
};

const works = $('#works').getElementsByClassName('content')?.[0];
works.innerHTML = `${generateWorkProjects(allProjectsArray)}`;

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
            <a href="#">
              See live <img src="./assets/img/Icon-Export.svg" width="24" height="24" alt="Live demo dutton" />
            </a>
            <a href="#">
              See Source <img src="./assets/img/Icon-GitHub.png" width="24" height="24" alt="Live demo dutton" />
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

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

/**
 * Below are scripts to save and populate the form data
 */
const getSavedFormData = () => {
  const data = localStorage.getItem('formData');
  if (data) return JSON.parse(data);
  return {};
};

function saveFormData(newFormData) {
  let data = getSavedFormData();
  data = JSON.stringify({ ...data, ...newFormData });
  localStorage.setItem('formData', data);
}

const formData = getSavedFormData();
const fullName = $('#name');
const email = $('#email');
const message = $('#message');

fullName.value = formData.name || '';
email.value = formData.email || '';
message.value = formData.message || '';

[fullName, email, message].forEach((input) => {
  input.addEventListener('change', () => {
    saveFormData({ [input.name]: input.value });
  });
});

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

$('#contact-me form button').removeAttribute('disabled');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let error = '';
  setFormMessage(error);
  const name = contactForm.elements.name.value.trim();
  const email = contactForm.elements.email.value.trim();
  const message = contactForm.elements.message.value.trim();
  let isValidEmail = false;

  if (!email || !message || !name) {
    error = 'Error: Ensure that there are no blank fields';
    return setFormMessage(error);
  }

  isValidEmail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/gi.test(
    email,
  );
  if (!isValidEmail) {
    error = 'Error: Ensure that you have typed the correct email';
    return setFormMessage(error);
  }

  if (email !== String(email).toLowerCase()) {
    error = 'Error: Ensure that the email is typed in lowercase';
    return setFormMessage(error);
  }
  // This line is used to prevent multiple submitts as the previous submit
  // is still being processed
  $('#contact-me form button').setAttribute('disabled', '');
  contactForm.submit();
  formMessage.classList.remove('form-message');
  return true;
});
