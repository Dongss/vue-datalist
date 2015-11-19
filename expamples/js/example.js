var MyDatalist = new VDatalist({
	component: 'datalist-component'
});

var valueSelected = 2;
var valueAndText = {
	1: "text11",
	2: "text22",
	3: "text33",
	4: "google",
	5: "dogs"
};

var ExpampleVue = new Vue({
	el: '#demo',
	data: {
		valueAndText: valueAndText,
		valueSelected: valueSelected
	}
});