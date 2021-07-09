const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    const increseX = i * 30;
    return increseX;
  })
  .attr("y", (d, i) => {
    const increaseY = h - d * 3;
    return increaseY;
  })
  .attr("width", 25)
  .attr("height", (d, i) => {
    const increaseHeight = d * 3;
    return increaseHeight;
  })
  .attr("fill", "red");
