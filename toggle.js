let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "20px";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

   const menuToggle = document.getElementById('menu-toggle');
  const navRight = document.getElementById('nav-right');
  let isMenuOpen = false;

  menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    menuToggle.classList.add('rotate');
    setTimeout(() => {
      menuToggle.innerHTML = isMenuOpen ? '&times;' : '&#9776;';
      menuToggle.classList.remove('rotate');
    }, 250); 
    
    navRight.style.display = isMenuOpen ? 'block' : 'none';
  });

const jobs = [
  {
    type: "Remote Job",
    title: "Content Writer - Remote",
    company: "Collegedunia",
    employment: "Full Time - Permanent",
    experience: "0-5 Years",
    location: "Gurgaon / Gurugram / India",
    applyLink: "https://example.com/apply/1"
  },
  {
    type: "Remote Job",
    title: "Graphic Designer",
    company: "DesignPro",
    employment: "Part Time - Contract",
    experience: "1-3 Years",
    location: "Remote / India",
    applyLink: "https://example.com/apply/2"
  },
  {
    type: "Onsite Job",
    title: "Software Engineer",
    company: "Tech Solutions",
    employment: "Full Time - Permanent",
    experience: "2-5 Years",
    location: "Bangalore / India",
    applyLink: "https://example.com/apply/3"
  },
  {
    type: "Remote Job",
    title: "Digital Marketing Specialist",
    company: "MarketWise",
    employment: "Full Time - Contract",
    experience: "3-6 Years",
    location: "Remote / India",
    applyLink: "https://example.com/apply/4"
  },
  {
    type: "Onsite Job",
    title: "HR Manager",
    company: "PeopleFirst",
    employment: "Full Time - Permanent",
    experience: "5-8 Years",
    location: "Mumbai / India",
    applyLink: "https://example.com/apply/5"
  },
  {
    type: "Remote Job",
    title: "Customer Support Executive",
    company: "HelpDesk Co.",
    employment: "Part Time - Temporary",
    experience: "0-2 Years",
    location: "Remote / India",
    applyLink: "https://example.com/apply/6"
  },
  {
    type: "Onsite Job",
    title: "Financial Analyst",
    company: "MoneyMatters",
    employment: "Full Time - Permanent",
    experience: "2-4 Years",
    location: "Delhi / India",
    applyLink: "https://example.com/apply/7"
  },
  {
    type: "Remote Job",
    title: "UI/UX Designer",
    company: "Creative Minds",
    employment: "Full Time - Contract",
    experience: "1-3 Years",
    location: "Remote / India",
    applyLink: "https://example.com/apply/8"
  },
  {
    type: "Onsite Job",
    title: "Project Manager",
    company: "BuildRight",
    employment: "Full Time - Permanent",
    experience: "6-10 Years",
    location: "Pune / India",
    applyLink: "https://example.com/apply/9"
  },
  {
    type: "Remote Job",
    title: "Software Tester",
    company: "QualityCheck",
    employment: "Part Time - Contract",
    experience: "1-4 Years",
    location: "Remote / India",
    applyLink: "https://example.com/apply/10"
  },
  {
    type: "Onsite Job",
    title: "Business Development Executive",
    company: "GrowthWorks",
    employment: "Full Time - Permanent",
    experience: "2-5 Years",
    location: "Hyderabad / India",
    applyLink: "https://example.com/apply/11"
  },
  {
    type: "Remote Job",
    title: "Technical Writer",
    company: "DocuPro",
    employment: "Full Time - Contract",
    experience: "3-7 Years",
    location: "Remote / India",
    applyLink: "https://example.com/apply/12"
  },
  {
    type: "Onsite Job",
    title: "Marketing Manager",
    company: "BrandBoost",
    employment: "Full Time - Permanent",
    experience: "4-7 Years",
    location: "Chennai / India",
    applyLink: "https://example.com/apply/13"
  },
  {
    type: "Remote Job",
    title: "Data Analyst",
    company: "DataMinds",
    employment: "Full Time - Contract",
    experience: "1-3 Years",
    location: "Remote / India",
    applyLink: "https://example.com/apply/14"
  },
  {
    type: "Onsite Job",
    title: "Operations Manager",
    company: "LogiTrack",
    employment: "Full Time - Permanent",
    experience: "5-9 Years",
    location: "Noida / India",
    applyLink: "https://example.com/apply/15"
  }
];


function renderJobCards() {
  const container = document.getElementById("jobCardsContainer");
  jobs.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");

   card.innerHTML = `
  <div class="job-type">${job.type}</div>
  <div class="job-title">${job.title}</div>
  <div class="company-name">${job.company}</div>
  <div class="job-details">
    <img src="images/hour.png" alt="Employment" class="icon"> ${job.employment}
  </div>
  <div class="job-details">
    <img src="images/fe 1.png" alt="Experience" class="icon"> ${job.experience}
  </div>
  <div class="job-details">
    <img src="images/fe 2.png" alt="Location" class="icon"> ${job.location}
  </div>
  <a href="${job.applyLink}" target="_blank" class="apply-btn">Apply</a>
`;

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderJobCards);

const companiesRow1 = [
  "images/1.png", "images/2.png", "images/3.png", "images/4.png",
  "images/5.png", "images/6.png", "images/7.png", "images/8.png"
];

const companiesRow2 = [
  "images/9.png", "images/10.png", "images/11.png", "images/12.png",
  "images/13.png", "images/14.png", "images/15.png", "images/16.png"
];

function createEmployerRow(logos, targetId) {
  const row = document.getElementById(targetId);
  const container = document.createElement("div");
  container.classList.add("logo-strip");

  const allLogos = [...logos, ...logos];
  allLogos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Employer Logo";
    img.classList.add("employer-logo");
    container.appendChild(img);
  });

  row.appendChild(container);
}

createEmployerRow(companiesRow1, "employersRow1");
createEmployerRow(companiesRow2, "employersRow2");
