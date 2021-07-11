const scale= d3.scaleLinear();

scale.domain([250,400])
scale.range([10,140])

const output = scale(50)

d3.select('body')
.append('h2')
.text(output);