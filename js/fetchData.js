let Airtable = require("airtable");

const metaData = {
  baseID: "appaG38K7Wcc7VPLz",
  baseName: "Somaiya School of Design",
  tablesCount: 2,
  tables: [
    "Organizational Structure",
    "Advisory Board",
    "Our Faculty",
    "Board of Studies",
    "Our Partners",
    "Exchange Program",
    "Grants",
    "Product Design",
    "Testimonials",
    "Blogs",
    "Media",
  ],
};

let orgStructure = [];
let advBoard = [];
let faculty = [];
let board = [];
let partners = [];
let exchangePrograms = [];
let grants = [];
let media = [];
let startups = [];
let testimonials = [];
let blogs = [];
let blog = [];

const getAirtableData = async () => {
  updateOrgStructure();
  updateOrgStructureModal();
  updateAdvBoard();
  updateAdvBoardModal();
  updateFaculty();
  updateVisitingFaculty();
  updateGalleryInternships();
  updateGalleryVisits();
  updateGalleryParallelSkills();
  updateGallerySsdRiidl();
  updateGalleryPartnerships();
  updateBoardOfStudies();
  updatePartners();
  updateExchangePrograms();
  updateGrants();
  updateMedia();
  updateProductDesign();
  updateProductDesignModal();
  updateTestimonials();
  updateTestimonialsModal();
  updateBlogs();
  updateBlogPost();
};

const getRecords = async (tableName) => {
  let base = new Airtable({ apiKey: "keyiZXGBC4056oZ5W" }).base(
    "appaG38K7Wcc7VPLz"
  );
  const fields = [];
  const records = await base(tableName)
    .select({
      filterByFormula: "( visible = TRUE() )",
    })
    .all();
  records.forEach(function (record) {
    fields.push(record.fields);
  });
  return fields;
};

const sortByOrder = (arr) => {
  const temp = arr.sort((a, b) => {
    return a.order > b.order ? 1 : -1;
  });
  return temp;
};

const updateOrgStructure = async () => {
  orgStructure = await getRecords("Organizational Structure");
  orgStructure = sortByOrder(orgStructure);
  let template = "";
  orgStructure.forEach((orgPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${orgPerson.Photo[0].url}') center/cover"
      ></div>
      <h2>${orgPerson.Name}</h2>
      <p>${orgPerson.Designation}</p>
      ${
        orgPerson["Read More"]
          ? `<a onclick="openModal(${orgPerson.order - 1})">
        Read More <img src="../img/shortArrow.svg" alt="Short Arrow" />
      </a>`
          : ""
      }
    </div>
    `;
  });
  const orgStructureRow = document.getElementsByClassName("facultyRow")[0];
  orgStructureRow.innerHTML = template;
};

const updateOrgStructureModal = async () => {
  orgStructure = await getRecords("Organizational Structure");
  orgStructure = sortByOrder(orgStructure);
  let template = "";
  orgStructure.forEach((orgPerson, index) => {
    template += `
    <div class="modalContainer">
      <div class="modalContent">
        <img src="../img/close.svg" alt="Close" onclick="closeModal(${
          orgPerson.order - 1
        })" />
        <div
          class="modalPic"
          style="
            background: url('${orgPerson.Photo[0].url}')
              center/cover;
          "
        ></div>
        <div class="modalText">
          <div class="modalHeader">
            <h1>${orgPerson.Name}</h1>
            <p>${orgPerson.Designation}</p>
          </div>
          <div class="modalBody">${orgPerson.Description}</div>
        </div>
      </div>
    </div>
    `;
  });
  const orgStructureModalRow = document.getElementsByClassName("modalsList")[0];
  orgStructureModalRow.innerHTML = template;
};

const updateAdvBoard = async () => {
  advBoard = await getRecords("Advisory Board");
  advBoard = sortByOrder(advBoard);
  let template = "";
  advBoard.forEach((advPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${advPerson.Photo[0].url}') top/cover"
      ></div>
      <h2>${advPerson.Name}</h2>
      <p>${advPerson.Designation}</p>
      ${
        advPerson["Read More"]
          ? `<a onclick="openModal(${advPerson.order - 1})">
        Read More <img src="../img/shortArrow.svg" alt="Short Arrow" />
      </a>`
          : ""
      }
    </div>
    `;
  });
  const advBoardRow = document.getElementsByClassName("facultyRow")[0];
  advBoardRow.innerHTML = template;
};

const updateAdvBoardModal = async () => {
  advBoard = await getRecords("Advisory Board");
  advBoard = sortByOrder(advBoard);
  let template = "";
  advBoard.forEach((advPerson, index) => {
    template += `
    <div class="modalContainer">
      <div class="modalContent">
        <img src="../img/close.svg" alt="Close" onclick="closeModal(${
          advPerson.order - 1
        })" />
        <div
          class="modalPic"
          style="
            background: url('${advPerson.Photo[0].url}')
              center/cover;
          "
        ></div>
        <div class="modalText">
          <div class="modalHeader">
            <h1>${advPerson.Name}</h1>
            <p>${advPerson.Designation}</p>
          </div>
          <div class="modalBody">${advPerson.Description}</div>
        </div>
      </div>
    </div>
    `;
  });
  const advBoardModalRow = document.getElementsByClassName("modalsList")[0];
  advBoardModalRow.innerHTML = template;
};

const updateFaculty = async () => {
  faculty = await getRecords("Our Faculty");
  faculty = sortByOrder(faculty);
  let template = "";
  faculty.forEach((facultyPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${facultyPerson.Photo[0].url}') center/cover"
      ></div>
      <h2>${facultyPerson.Name}</h2>
      <p>${facultyPerson.Designation}</p>
    </div>
    `;
  });
  const facultyRow = document.getElementsByClassName("facultyRow")[1];
  facultyRow.innerHTML = template;
};


const updateVisitingFaculty = async () => {
  faculty = await getRecords("Our Visiting Faculty");
  faculty = sortByOrder(faculty);
  let template = "";
  faculty.forEach((facultyPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${facultyPerson.Photo[0].url}') center/cover"
      ></div>
      <h2>${facultyPerson.Name}</h2>
      <p>${facultyPerson.Designation}</p>
    </div>
    `;
  });
  const facultyRow = document.getElementsByClassName("facultyRow")[2];
  facultyRow.innerHTML = template;
};


const updateGalleryInternships = async () => {
  faculty = await getRecords("Internships");
  faculty = sortByOrder(faculty);
  let template = "";
  faculty.forEach((facultyPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${facultyPerson.Photo[0].url}') center/cover"
      ></div>
      <h2>${facultyPerson.Name}</h2>
      <p>${facultyPerson.Designation}</p>
    </div>
    `;
  });
  const facultyRow = document.getElementsByClassName("facultyRow")[0];
  facultyRow.innerHTML = template;
};

const updateGalleryVisits = async () => {
  faculty = await getRecords("Visits");
  faculty = sortByOrder(faculty);
  let template = "";
  faculty.forEach((facultyPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${facultyPerson.Photo[0].url}') center/cover"
      ></div>
      <h2>${facultyPerson.Name}</h2>
      <p>${facultyPerson.Designation}</p>
    </div>
    `;
  });
  const facultyRow = document.getElementsByClassName("facultyRow")[0];
  facultyRow.innerHTML = template;
};

const updateGalleryParallelSkills = async () => {
  faculty = await getRecords("Parallel Skills Lab");
  faculty = sortByOrder(faculty);
  let template = "";
  faculty.forEach((facultyPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${facultyPerson.Photo[0].url}') center/cover"
      ></div>
      <h2>${facultyPerson.Name}</h2>
    </div>
    `;
  });
  const facultyRow = document.getElementsByClassName("facultyRow")[0];
  facultyRow.innerHTML = template;
};

const updateGallerySsdRiidl = async () => {
  faculty = await getRecords("SSD + Riidl Collaboration");
  faculty = sortByOrder(faculty);
  let template = "";
  faculty.forEach((facultyPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${facultyPerson.Photo[0].url}') center/cover"
      ></div>
      <h2>${facultyPerson.Name}</h2>
      <p>${facultyPerson.Designation}</p>
    </div>
    `;
  });
  const facultyRow = document.getElementsByClassName("facultyRow")[0];
  facultyRow.innerHTML = template;
};

const updateGalleryPartnerships = async () => {
  faculty = await getRecords("Partnerships");
  faculty = sortByOrder(faculty);
  let template = "";
  faculty.forEach((facultyPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${facultyPerson.Photo[0].url}') center/cover"
      ></div>
      <h2>${facultyPerson.Name}</h2>
      <p>${facultyPerson.Designation}</p>
    </div>
    `;
  });
  const facultyRow = document.getElementsByClassName("facultyRow")[0];
  facultyRow.innerHTML = template;
};


const updateBoardOfStudies = async () => {
  board = await getRecords("Board of Studies");
  board = sortByOrder(board);
  let template = "";
  board.forEach((boardPerson, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="background: url('${boardPerson.Photo[0].url}') center/cover"
      ></div>
      <h2>${boardPerson.Name}</h2>
      <p>${boardPerson.Designation}</p>
    </div>
    `;
  });
  const boardRow = document.getElementsByClassName("facultyRow")[0];
  boardRow.innerHTML = template;
};

const updatePartners = async () => {
  partners = await getRecords("Our Partners");
  partners = sortByOrder(partners);
  let template = "";
  partners.forEach((partner, index) => {
    template += `
    <div class="partnerBox">
      <a href="">
        <img src="${partner.Logo[0].url}" alt="Partner" />
      </a>
      ${partner.Title ? `<p>${partner.Title}</p>` : ""}
    </div>
    `;
  });
  const partnersRow = document.getElementsByClassName("partnersGrid")[0];
  partnersRow.innerHTML = template;
};

const updateExchangePrograms = async () => {
  exchangePrograms = await getRecords("Exchange Programs");
  exchangePrograms = sortByOrder(exchangePrograms);
  let template = "";
  exchangePrograms.forEach((partner, index) => {
    template += `
    <div class="partnerBox">
      <img src="${partner.Logo[0].url}" alt="Partner" />
      <p>${partner.Title}</p>
    </div>
    `;
  });
  const exchangeProgramsRow = document.getElementsByClassName(
    "partnersGrid"
  )[0];
  exchangeProgramsRow.innerHTML = template;
};

const updateGrants = async () => {
  grants = await getRecords("Grants");
  grants = sortByOrder(grants);
  let template = "";
  grants.forEach((partner, index) => {
    template += `
    <div class="partnerBox grantBox">
      <img id="smallLogo" src="${partner.Logo[0].url}" alt="Partner" />
      <p>${partner.Title}</p>
    </div>
    `;
  });
  const grantsRow = document.getElementsByClassName("partnersGrid")[0];
  grantsRow.innerHTML = template;
};

const updateMedia = async () => {
  media = await getRecords("Media");
  media = sortByOrder(media);
  let template = "";
  let mediaFilter = [];

  template += `<h2>riidl, its Programs & Communities</h2>`;
  template += "<ol>";
  mediaFilter = media.filter((medium) => {
    return medium.Section === "riidl";
  });
  mediaFilter.forEach((medium, index) => {
    template += `
      <li><a href="${medium.Link}" target="_blank">${medium.Title}</a></li>
    `;
  });
  template += "</ol>";

  template += `<h2>Startups & Projects</h2>`;
  template += "<ol>";
  mediaFilter = media.filter((medium) => {
    return medium.Section === "startupsandprojects";
  });
  mediaFilter.forEach((medium, index) => {
    template += `
      <li><a href="${medium.Link}" target="_blank">${medium.Title}</a></li>
    `;
  });
  template += "</ol>";

  const mediaRow = document.getElementsByClassName("mediaList")[0];
  mediaRow.innerHTML = template;
};

const updateProductDesign = async () => {
  startups = await getRecords("Product Design");
  startups = sortByOrder(startups);
  let template = "";
  startups.forEach((startup, index) => {
    template += `
    <div class="facultyBox">
      <div
        class="facultyPic"
        style="
          background: url('${startup.Photo[0].url}')
            center/cover;
        "
      ></div>
      <h2>${startup.Name}</h2>
      <p>${startup["One Liner"]}</p>
      <a onclick="openModal(${startup.order - 1})">
        Read More <img src="../img/shortArrow.svg" alt="Short Arrow" />
      </a>
    </div>
    `;
  });
  const startupsRow = document.getElementsByClassName("buildRow")[0];
  startupsRow.innerHTML = template;
};

const updateProductDesignModal = async () => {
  startups = await getRecords("Product Design");
  startups = sortByOrder(startups);
  let template = "";
  startups.forEach((startup, index) => {
    template += `
    <div class="modalContainer">
      <div class="modalContent">
        <img src="../img/close.svg" alt="Close" onclick="closeModal(${
          startup.order - 1
        })" />
        <div
          class="modalPic"
          style="background: url(${startup.Photo[0].url}) center/cover"
        ></div>
        <div class="modalText">
          <div class="modalHeader">
            <h1>${startup.Name}</h1>
            <p>${startup["One Liner"]}</p>
          </div>
          <div class="modalBody">${startup.Description}</div>
        </div>
      </div>
    </div>
    `;
  });
  const startupsRow = document.getElementsByClassName("modalsList")[0];
  startupsRow.innerHTML = template;
};

const updateTestimonials = async () => {
  testimonials = await getRecords("Testimonials");
  testimonials = sortByOrder(testimonials);
  let template = "";
  testimonials.forEach((testimonial, index) => {
    template += `
    <div class="facultyBox">
      <i class="fa fa-quote-left"></i>
      <div
        class="facultyPic"
        style="
          background: url(${testimonial.Photo[0].url})
            center/cover;
        "
      ></div>
      <h2>${testimonial.Name}</h2>
      <p>${testimonial["One Liner"]}</p>
      <a onclick="openModal(${testimonial.order - 1})">
        Read More <img src="../img/shortArrow.svg" alt="Short Arrow" />
      </a>
    </div>
    `;
  });
  const testimonialsRow = document.getElementsByClassName("testimonialsRow")[0];
  testimonialsRow.innerHTML = template;
};

const updateTestimonialsModal = async () => {
  testimonials = await getRecords("Testimonials");
  testimonials = sortByOrder(testimonials);
  let template = "";
  testimonials.forEach((testimonial, index) => {
    template += `
    <div class="modalContainer testimonialModal">
      <div class="modalContent">
        <img src="../img/close.svg" alt="Close" onclick="closeModal(${
          testimonial.order - 1
        })" />
        <div
          class="modalPic"
          style="
            background: url(${testimonial.Photo[0].url})
              center/cover;
          "
        ></div>
        <div class="modalText">
          <div class="modalHeader">
            <h1>${testimonial.Name}</h1>
          </div>
          <div class="modalBody">${testimonial.Description}</div>
        </div>
      </div>
    </div>
    `;
  });
  const testimonialsRow = document.getElementsByClassName("modalsList")[0];
  testimonialsRow.innerHTML = template;
};

const updateBlogs = async () => {
  blogs = await getRecords("Blogs");
  blogs = sortByOrder(blogs);
  let template = "";
  let link = "";
  blogs.forEach((blog, index) => {
    link = `https://riidl.org/riidlacademy/student/blogPost.html?blog=${blog.order}`;
    if (blog.Link) {
      link = blog.Link;
    }
    template += `
    <div class="blogCard" onclick="window.open('${link}')">
      <div
        class="blogBg"
        style="background: url('${blog["Cover Pic"][0].url}') center/cover"
      >
        <div class="blogBGTint"></div>
      </div>
      <div class="blogText">
        <h2>${blog.Title}</h2>
        <!-- <a href=""
          >Read More <img src="../img/shortArrow.svg" alt="Arrow"
        /></a> -->
        <div class="blogAuthor">
          <div
            class="authorPic"
            style="
              background: url('${blog["Author Photo"][0].url}')
                center/cover;
            "
          ></div>
          <div class="blogAuthorCardText">
            <h3>${blog["Author Name"]}</h3>
            <p>Posted on: ${blog.Date}</p>
          </div>
        </div>
      </div>
    </div>`;
  });
  const blogsRow = document.getElementsByClassName("blogsRow")[0];
  blogsRow.innerHTML = template;
};

const updateBlogPost = async (blogNo) => {
  blogNo = parseInt(blogNo);
  blogs = await getRecords("Blogs");
  blog = blogs.find((blog) => {
    return blog.order === blogNo;
  });
  let template = "";
  template += `
    <div class="blogPostAuthor">
      <div
        class="blogPostAuthorPic"
        style="background: url(${blog["Author Photo"][0].url}) center/cover"
      ></div>
      <div class="blogAuthorText">
        <h2>${blog["Author Name"]}</h2>
        <p>Posted on: ${blog.Date}</p>
      </div>
    </div>
    <img src="${blog["Cover Pic"][0].url}" alt="Blog" />
    ${
      blog["Pic Credits"]
        ? `<h6>Image Source: <a href="${blog["Pic Credits"]}">${blog["Pic Credits"]}</a></h6>`
        : ""
    }
    <h1>${blog.Title}</h1>
    ${blog.Content}
  `;
  const blogRow = document.getElementsByClassName("aboutContent")[0];
  blogRow.innerHTML = template;
};

const updateStudentVideos = async () => {
  studentvideos = await getRecords("batchof2021");
  studentvideos = sortByOrder(studentvideos);
  let template = "";
  let link = "";
  studentvideos.forEach((studentvideos, index) => {
    link = `https://riidl.org/riidlacademy/student/blogPost.html?blog=${studentvideos.order}`;
    if (studentvideos.Link) {
      link = studentvideos.Link;
    }
    template += `
    <div class="blogCard" onclick="window.open('${link}')">
      <div
        class="blogBg"
        style="background: url('${studentvideos["Thumbnail"][0].url}') center/cover"
      >
        <div class="blogBGTint"></div>
      </div>
      <div class="blogText">
        <!-- <a href=""
          >Read More <img src="../img/shortArrow.svg" alt="Arrow"
        /></a> -->
        <div class="blogAuthor">
          <div
            class="studentPic"
            style="
              background: url('${studentvideos["StudentPhoto"][0].url}')
                center/cover;
            "
          ></div>
          <div class="blogAuthorCardText">
            <h2>${studentvideos["StudentName"]}</h2>
          </div>
        </div>
      </div>
    </div>`;
  });
  const blogsRow = document.getElementsByClassName("blogsRow")[0];
  blogsRow.innerHTML = template;
};

// const updateAbout = async () => {
//   aboutDarwin = await getRecords("About");
//   aboutDarwin = aboutDarwin[0];
//   const about = document.getElementById("about");
//   const [left] = about.getElementsByClassName("left");
//   const [right] = about.getElementsByClassName("right");
//   const img = left.querySelector("img");
//   const [p1, p2] = right.querySelectorAll("p");
//   const [data1, data2] = aboutDarwin.Description.split(/\r?\n/);
//   p1.innerText = data1;
//   p2.innerText = data2;
//   img.src = aboutDarwin.Attachments[0].url;
// };

// const openFAQ = (index) => {
//   const faqQuestionElements = document.getElementsByClassName("faqQue");
//   const faqAnswerElements = document.getElementsByClassName("faqAns");
//   for (let i = 0; i < faqQuestionElements.length; i++) {
//     if (i === index && faqAnswerElements[i].style.display === "none") {
//       faqQuestionElements[i].classList.add("active");
//       faqAnswerElements[i].style.display = "block";
//     } else {
//       faqQuestionElements[i].classList.remove("active");
//       faqAnswerElements[i].style.display = "none";
//     }
//   }
// };
