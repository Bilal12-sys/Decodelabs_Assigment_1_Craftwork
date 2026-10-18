// Import all Objects
import { bikes, cars, architecture, nature, interiorDesign, graphicDesign } from "./images.js";

// Put it on an Array
const allImages = [ ...architecture, ...bikes, ...cars, ...interiorDesign, ...graphicDesign, ...nature,];

// Get All
const galleryContainer = document.querySelector("#gallery-images");
const searchForm = document.querySelector("#gallery-search-form");
const searchInput = document.querySelector("#gallery-search");
const galleryLoader = document.querySelector("#gallery-loader");

function showImages(images) {
    galleryLoader.classList.remove("hidden");
    galleryContainer.innerHTML = images.map((image) => `
        <article class="gallery_card">
            <div class="gallery_image_wrap">
                <img src="${image.url}" alt="${image.title}" class="gallery_image gallery_image--lazy" decoding="async">
                <a class="download_btn" href="${image.url}" download>Download</a>
            </div>
            <div class="gallery_card_text">
                <h3>${image.title}</h3>
                <p>${image.para}</p>
                <span class="gallery_category">${image.category}</span>
            </div>
        </article>
    `).join("");

    const imagesToLoad = [...galleryContainer.querySelectorAll(".gallery_image")];
    let loadedImages = 0;

    function finishLoading(event) {
        const image = event.currentTarget;

        if (!galleryContainer.contains(image)) {
            return;
        }

        image.classList.add("loaded");
        loadedImages += 1;

        if (loadedImages === imagesToLoad.length) {
            galleryLoader.classList.add("hidden");
        }
    }

    if (imagesToLoad.length === 0) {
        galleryLoader.classList.add("hidden");
        return;
    }

    imagesToLoad.forEach((image) => {
        if (image.complete) {
            image.classList.add("loaded");
            loadedImages += 1;
        } else {
            image.addEventListener("load", finishLoading, { once: true });
            image.addEventListener("error", finishLoading, { once: true });
        }
    });

    if (loadedImages === imagesToLoad.length) {
        galleryLoader.classList.add("hidden");
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();

    // An empty search restores all images; otherwise match the title or category.
    const filteredImages = allImages.filter((image) => (
        image.title.toLowerCase().includes(query)
        || image.category.toLowerCase().includes(query)
    ));

    showImages(filteredImages);
});

showImages(allImages);
