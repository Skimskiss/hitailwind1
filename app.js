document.addEventListener("DOMContentLoaded", () => {
  const temples = [
    {
      title: "Angkor Wat",
      description: "The largest religious monument in the world.",
      rating: 5,
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/20171126_Angkor_Wat_4712_DxO.jpg",
      link: "#"
    },
    {
      title: "Bayon Temple",
      description: "Famous for its serene and massive stone faces.",
      rating: 4,
      image: "https://www.gocambodia.tours/wp-content/uploads/2024/06/Cambodias-Lesser-Known-Archaeological-Sites-with-go-cambodia-tours-1.jpg",
      link: "#"
    },
    {
      title: "Ta Prohm",
      description: "Known for trees growing out of the ruins.",
      rating: 4,
      image: "https://actionphototours.com/wp-content/uploads/2014/02/1X8A5889_1-1024x683.jpg",
      link: "#"
    },
    {
      title: "Banteay Srei",
      description: "A 10th-century temple dedicated to the Hindu god Shiva.",
      rating: 4,
      image: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTAGUUVcrMje58Daqm-zqmXcwybj4IfW_2R4fofRQMTUB2KeOkDjHKg1zvbOdas-3gt",
      link: "#"
    },
    {
      title: "Bayon Temple",
      description: "Famous for its serene and massive stone faces.",
      rating: 4,
      image: "https://www.gocambodia.tours/wp-content/uploads/2024/06/Cambodias-Lesser-Known-Archaeological-Sites-with-go-cambodia-tours-1.jpg",
      link: "#"
    },
    {
      title: "Angkor Toch",
      description: "The largest religious monument in the world.",
      rating: 5,
      image: "https://img.freepik.com/premium-photo/front-left-size-views-angkor-toch-ancient-temple_1149627-15.jpg",
      link: "#"
    },
    {
      title: "Angkor Thom Victory Gate",
      description: "Known for trees growing out of the ruins.",
      rating: 4,
      image: "https://helloangkor.com/wp-content/uploads/2021/01/HA5D0012-768x512.jpg",
      link: "#"
    },
    {
      title: "South Khleang",
      description: "Known for trees growing out of the ruins.",
      rating: 4,
      image: "https://helloangkor.com/wp-content/uploads/2021/01/HA5D5981-768x512.jpg",
      link: "#"
    },
    {
      title: "North Khleang ",
      description: "Known for trees growing out of the ruins.",
      rating: 4,
      image: "https://helloangkor.com/wp-content/uploads/2021/01/HA5D9574-1-768x512.jpg",
      link: "#"
    },
  ];

  const container = document.getElementById("product-list");

  temples.forEach(temple => {
    const card = document.createElement("div");
    card.className =
      "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700";

    card.innerHTML = `
      <a href="${temple.link}">
        <img class="p-8 rounded-t-lg" src="${temple.image}" alt="${temple.title}" />
      </a>
      <div class="px-5 pb-5">
        <a href="${temple.link}">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${temple.title} - ${temple.description}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5 justify-between">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            ${generateStars(temple.rating)}
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">${temple.rating}.0</span>
          </div>
          <button class="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-xs px-3 py-1">Add</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  function generateStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += `
        <svg class="w-4 h-4 ${i <= rating ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}"
             fill="currentColor" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734
                   -2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l
                   -5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656
                   3.563-.863 5.031a1.532 1.532 0 0 0 2.226
                   1.616L11 17.033l4.518 2.375a1.534 1.534 0
                   0 0 2.226-1.617l-.863-5.03L20.537
                   9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>`;
    }
    return stars;
  }
});

