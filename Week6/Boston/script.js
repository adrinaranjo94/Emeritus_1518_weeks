const createDataFromAPI = (dataAPI) => {
  return dataAPI.map((itemAPI) => {
    return {
      name: itemAPI[8],
      salary: itemAPI[11],
      position: itemAPI[9],
      company: itemAPI[10],
    };
  });
};

const createHTMLFromData = (data) => {
  return data
    .map(
      (item) =>
        `<p class="item">${item.name} - ${item.salary} | ${item.company} -> ${item.position}</p>`
    )
    .join("");
};

const renderData = (data, htmlContainer) => {
  htmlContainer.innerHTML = createHTMLFromData(data);
};

const bostonData = createDataFromAPI(boston.data);

renderData(bostonData, document.getElementById("listElements"));
