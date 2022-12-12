const idListElements = document.getElementById("listElements");

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

const bostonData = createDataFromAPI(boston.data);

const createHTMLFromData = (data) => {
  return data
    .map(
      (item) =>
        `<p class="item">${item.name} - ${item.salary} | ${item.company} -> ${item.position}</p>`
    )
    .join("");
};

const orderByProperty = (property, direction) => {
  console.log("property", property);
  // ordenamos por property

  const orderedData = bostonData.sort((a, b) => {
    if (typeof a[property] === "string") {
      if (direction === "asc") {
        return a[property].toLowerCase() > b[property].toLowerCase() ? 1 : -1;
      } else {
        return a[property].toLowerCase() > b[property].toLowerCase() ? -1 : 1;
      }
    } else {
      if (direction === "asc") {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] > b[property] ? -1 : 1;
      }
    }
  });

  renderData(orderedData, idListElements);
};

const renderData = (data, htmlContainer) => {
  htmlContainer.innerHTML = createHTMLFromData(data);
};

renderData(bostonData, idListElements);
