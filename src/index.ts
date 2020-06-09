import App from './components/app'

var render = function (template: any, node: any) {
	node.innerHTML = template;
};

var app = document.getElementById("app");


render (App(), app);