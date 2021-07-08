const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500;
const h = 100;

const svg = d3.select("body")
.append('svg')
.attr('width',w)
.attr('height',h)
svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('x',(d,i) =>{
    const increaseX = i *30;
    return increaseX;
})
.attr('y',0)
.attr('width',25)
.attr('height',100)