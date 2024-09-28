// Nav links

const navLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "My Books",
    link: "#",
  },
  {
    title: "Browse",
    link: "#",
  },
  {
    title: "Community",
    link: "#",
  },
];

const nav = document.querySelector("#navigation_links_container");

navLinks.forEach((link) => {
  const aTag = document.createElement("a");
  aTag.href = link.link;
  aTag.textContent = link.title;
  aTag.classList.add("nav_link");
  nav.appendChild(aTag);
});

// Main content for body
const books = [
  {
    title: "The Light We Carry",
    author: "Michelle Obama",
    desc: "When they go low, you write another book. In an inspiring follow-up to her bestselling memoir Becoming, the former First Lady of the United States shares practical wisdom and powerful strategies for staying hopeful and balanced through difficult times.",
    img: "https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/MyReads/sample-book-photo-1.png",
    inLibrary: false,
  },
  {
    title: "Visual Thinking",
    author: "Temple Grandin",
    desc: "Twenty-five years ago, author and educator Temple Grandin changed mainstream understanding of autism with her memoir, Thinking in Pictures. Her new book expands on the theme, celebrating visual/spatial cognition, intuitive design, and the critical importance of those who think differently. In fact, Grandin argues persuasively that today's problems require neurodiverse thinking.",
    img: "https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/MyReads/sample-book-photo-2.png",
    inLibrary: false,
  },
];
// I am creating an element and appending the child every time as well as creating a className maybe I can refactor this into a function so I dont have to rewrite it multiple times
const bookListContainer = document.getElementById("books_list_container");
books.forEach((book) => {
  // create main div for book
  const bookCard = document.createElement("div");
  bookListContainer.appendChild(bookCard);
  bookCard.classList.add("book_container");
  //create the image and button div for flex box
  const imageButtonContainer = document.createElement("div");
  imageButtonContainer.classList.add("image_button_container");
  const image = document.createElement("img");
  image.src = book.img;
  imageButtonContainer.appendChild(image);
  bookCard.appendChild(imageButtonContainer);
  const addToLibraryButton = document.createElement("button");
  addToLibraryButton.innerText = "ADD TO LIBRARY";
  addToLibraryButton.classList.add("add_to_library_button");
  imageButtonContainer.appendChild(addToLibraryButton);
  //add container for title name and desc
  const bookInfo = document.createElement("div");
  bookInfo.classList.add("book_info_container");
  bookCard.appendChild(bookInfo);
  const bookTitle = document.createElement("h3");
  bookTitle.classList.add("book_title");
  const author = document.createElement("h4");
  author.classList.add("author");
  const desc = document.createElement("p");
  desc.classList.add("book_desc");
  bookInfo.appendChild(bookTitle);
  bookInfo.appendChild(author);
  bookInfo.appendChild(desc);
  bookTitle.innerText = book.title;
  author.innerText = book.author;
  desc.innerText = book.desc;
  addToLibraryButton.addEventListener("click", (event) => {
    event.preventDefault();
    addToLibraryButton.innerText = "Thank you pookie";
    addToLibraryButton.disabled = true;
    console.log(`Thank you for adding "${book.title}" to your cart Pookie`);
  });
});
const companyData = [
  {
    title: "About Us",
    link: "#",
  },
  {
    title: "Terms of Use",
    link: "#",
  },
  {
    title: "Privacy",
    link: "#",
  },
];
const connectData = [
  {
    image: `<i class="fas fa-phone"></i>`,
    link: "#",
  },
  {
    image: `<i class="fas fa-mobile-alt"></i>`,
    link: "#",
  },
  {
    image: `<i class="fas fa-envelope"></i>`,
    link: "#",
  },
  {
    image: `<i class="fas fa-rss"></i>`,
    link: "#",
  },
  {
    image: `<i class="fas fa-walking"></i>`,
    link: "#",
  },
];
const companyFooter = document.getElementById("company_footer_container");
const connectFooter = document.getElementById("connect_footer_container");
const createFooterContent = (footerSide, footerData) => {
  const footerContentDiv = document.createElement("div");
  footerContentDiv.classList.add("footer_styles");
  footerSide.appendChild(footerContentDiv);
  footerData.forEach((data) => {
    const link = document.createElement("a");
    footerContentDiv.appendChild(link);
    link.href = data.link;
    if (data.hasOwnProperty("title")) {
      link.innerText = data.title;
      link.classList.add("footer_link");
    } else {
      link.innerHTML = data.image;
      link.classList.add("footer_link_fa");
    }
  });
};
createFooterContent(companyFooter, companyData);
createFooterContent(connectFooter, connectData);
