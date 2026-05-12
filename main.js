const defaultFilters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  greyScale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 200,
    unit: "%",
  },
};

const imageCanvas = document.querySelector("#image-canvas"); // used to draw or change the input photo
const imageInput = document.querySelector("#image-input"); // targeting the image-input from the html
const canvasCtx = imageCanvas.getContext("2d");
const resetButton = document.querySelector("#reset-btn");
const filtersContainer = document.querySelector(".filters"); // conatainer to contain all the filters
const downloadButton = document.querySelector("#download-btn");
const presetsContainer = document.querySelector(".presets");
let file = null; // user will select an image file
let image = null; // this will store the url of the selected image

let filters = structuredClone(defaultFilters);
// function used to generate all the filters inside the filtersContainer
function createFilterElements(name, unit = "%", value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;

  const p = document.createElement("p");
  p.innerText = name;

  div.append(p);
  div.append(input);

  input.addEventListener("input", (event) => {
    filters[name].value = input.value;
    applyFilters();
  });

  return div;
}

function creatingFilters() {
  Object.keys(filters).forEach((key) => {
    const filterElement = createFilterElements(
      key,
      filters[key].unit,
      filters[key].value,
      filters[key].min,
      filters[key].max,
    );
    filtersContainer.appendChild(filterElement);
  });
}

creatingFilters();

imageInput.addEventListener("change", (event) => {
  const placeHolder = document.querySelector(".placeholder");
  placeHolder.style.display = "none";
  imageCanvas.style.display = "block";
  file = event.target.files[0];

  const img = new Image();
  img.src = URL.createObjectURL(file);
  image = img;
  img.onload = () => {
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    canvasCtx.drawImage(image, 0, 0);
  };
});

function applyFilters() {
  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  canvasCtx.filter = `
  brightness(${filters.brightness.value}${filters.brightness.unit})
  contrast(${filters.contrast.value}${filters.contrast.unit})
  saturate(${filters.saturation.value}${filters.saturation.unit})
  hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
  blur(${filters.blur.value}${filters.blur.unit})
  grayscale(${filters.greyScale.value}${filters.greyScale.unit})
  sepia(${filters.sepia.value}${filters.sepia.unit})
  opacity(${filters.opacity.value}${filters.opacity.unit})
  invert(${filters.invert.value}${filters.invert.unit})

  `;
  canvasCtx.drawImage(image, 0, 0);
}

resetButton.addEventListener("click", (event) => {
  filters = structuredClone(defaultFilters);
  applyFilters();
  filtersContainer.innerHTML = "";

  creatingFilters();
});

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imageCanvas.toDataURL();
  link.click();
});
const presets = {
  cinematic: {
    brightness: 95,
    contrast: 135,
    saturation: 120,
    hueRotation: -5,
    blur: 0,
    greyScale: 0,
    sepia: 15,
    opacity: 100,
    invert: 0,
  },

  neon: {
    brightness: 120,
    contrast: 150,
    saturation: 180,
    hueRotation: 45,
    blur: 0,
    greyScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  faded: {
    brightness: 110,
    contrast: 80,
    saturation: 70,
    hueRotation: 0,
    blur: 1,
    greyScale: 10,
    sepia: 20,
    opacity: 90,
    invert: 0,
  },

  retro: {
    brightness: 105,
    contrast: 115,
    saturation: 85,
    hueRotation: -10,
    blur: 0,
    greyScale: 5,
    sepia: 50,
    opacity: 100,
    invert: 0,
  },

  horror: {
    brightness: 70,
    contrast: 160,
    saturation: 40,
    hueRotation: 180,
    blur: 1,
    greyScale: 20,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  cyberpunk: {
    brightness: 115,
    contrast: 145,
    saturation: 190,
    hueRotation: 70,
    blur: 0,
    greyScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  softGlow: {
    brightness: 125,
    contrast: 90,
    saturation: 115,
    hueRotation: 5,
    blur: 3,
    greyScale: 0,
    sepia: 10,
    opacity: 95,
    invert: 0,
  },

  coldWinter: {
    brightness: 95,
    contrast: 120,
    saturation: 85,
    hueRotation: 25,
    blur: 0,
    greyScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  sunset: {
    brightness: 120,
    contrast: 110,
    saturation: 150,
    hueRotation: -25,
    blur: 0,
    greyScale: 0,
    sepia: 25,
    opacity: 100,
    invert: 0,
  },

  invertedDream: {
    brightness: 110,
    contrast: 130,
    saturation: 140,
    hueRotation: 90,
    blur: 1,
    greyScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 100,
  },

  moody: {
    brightness: 80,
    contrast: 140,
    saturation: 75,
    hueRotation: -10,
    blur: 0,
    greyScale: 10,
    sepia: 5,
    opacity: 100,
    invert: 0,
  },

  washedFilm: {
    brightness: 115,
    contrast: 75,
    saturation: 60,
    hueRotation: 0,
    blur: 0,
    greyScale: 15,
    sepia: 30,
    opacity: 95,
    invert: 0,
  },
  noir: {
    brightness: 85,
    contrast: 170,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    greyScale: 100,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },
};

Object.keys(presets).forEach((presetName) => {
  const presetButton = document.createElement("button");
  presetButton.classList.add("btn");
  presetButton.innerText = presetName;
  presetsContainer.appendChild(presetButton);

  presetButton.addEventListener("click", () => {
    const preset = presets[presetName];
    Object.keys(preset).forEach((filterName) => {
      filters[filterName].value = preset[filterName];
    });
    applyFilters();
    filtersContainer.innerHTML = "";
    creatingFilters();
  });
});
