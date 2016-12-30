//META{"name":"Discode"}*//

var Discode = function () {};

function parseHTML() {
	Array.prototype.slice.call(document.getElementsByTagName("code")).forEach(function(element, index) {
    	if (element.innerText.toLowerCase().indexOf("<!doctype html>") !== -1) {
			var newParent = element.parentNode.parentNode.innerHTML = element.innerText;
			element.parentNode.removeChild(element);
    	}
	});
}

function parseLoop() {
	parseHTML();
	setTimeout(parseLoop, 200);
}

Discode.prototype.start = function () {
	parseHTML()
	parseLoop();
};

Discode.prototype.load = function () {
	parseHTML()
};

Discode.prototype.unload = function () {};

Discode.prototype.stop = function () {
	parseHTML()
};

Discode.prototype.onMessage = function () {
    parseHTML()
};

Discode.prototype.onSwitch = function () {
	parseHTML()
};

Discode.prototype.observer = function (e) {};

Discode.prototype.getName = function () {
    return "Discode";
};

Discode.prototype.getDescription = function () {
    return "Displays HTML in code blocks (without formatting and starting with '<!DOCTYPE html>').";
};

Discode.prototype.getVersion = function () {
    return "0.1.0";
};

Discode.prototype.getAuthor = function () {
    return "Draco";
};