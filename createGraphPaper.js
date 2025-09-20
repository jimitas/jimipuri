export function createGraphPaper(columns, rows, width, height) {
  const gridContainer = document.createElement("table");
  gridContainer.class = ".grid-container";
  gridContainer.style.width = `${width}px`;
  gridContainer.style.height = `${height}px`;

  // gridContainer.style.setProperty("--columns", columns);
  // gridContainer.style.setProperty("--rows", rows);
  // gridContainer.style.setProperty("--width", width);
  // gridContainer.style.setProperty("--height", height);

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const gridItem = document.createElement("td");
      gridItem.classList.add("grid-item");
      gridItem.style.width = `${width / columns}px`;
      gridItem.style.height = `${height / rows}px`;
      tr.appendChild(gridItem);
    }
    gridContainer.appendChild(tr);
  }
  return gridContainer;
}
