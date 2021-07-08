const dataSet = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataSet)
  .enter()
  .append("div")
  .attr("class", "bar");
