const dataSet = [1,2,3,4,5,6,7];
d3.select('body').selectAll('h2')
.data(dataSet)
.enter()
.append('h2')
.text('nex item')
