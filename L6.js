const dataSet = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
.data(dataSet)
.enter()
.append("h2")
.text((d) => (d+ " Usd"))
.style('color',(d) => {
    const s=(d < 20)?'red':'green';
    return s;
})