const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const output= d3.max(dataset,(d) => d)
const maxdata = `max data is ${output}`
d3.select('body')
.append('h2')
.text(maxdata)