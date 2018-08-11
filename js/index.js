var app = document.querySelector("#app");

var texts = [
    //"some",
    //"you",
    //"are",
    "perfect",
];

var styles = ["green", "yellow", "red", "blue", "purple"];

var degrees = ["0deg", "5deg", "10deg", "-5deg", "-10deg"];

var sizes = ["none"]; //any text transform values

var getRndInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var generateTextAnimated = function () {
    var text = texts[getRndInteger(0, texts.length)];
    new TextAnimated(text);
};

var TextAnimated = (function () {
	
    function TextAnimated(text) {
        this.text = text;
        this.textAnimatedArr = this.getArr(this.text);
        this.render();
    }
	
    TextAnimated.prototype.createTag = function (tagName, content) {
        var tag = document.createElement(tagName);
        var tagInner = document.createElement(tagName);
        tag.className = "animated bounceIn text-item text-" + this.getSize() + " " + this.getStyle();
        tagInner.textContent = content;
        tagInner.style.transform = "rotate(" + this.getDegree() + ")";
        tag.appendChild(tagInner);
        return tag;
    };
	
    TextAnimated.prototype.getArr = function (string) {
        return string.split("");
    };
	
    TextAnimated.prototype.getStyle = function () {
        return styles[getRndInteger(0, styles.length)];
    };
	
    TextAnimated.prototype.getDegree = function () {
        return degrees[getRndInteger(0, degrees.length)];
    };
	
    TextAnimated.prototype.getSize = function () {
         return sizes[getRndInteger(0, sizes.length)];
    };
	
    TextAnimated.prototype.render = function () {
        var self = this;
        app.innerHTML = "";
        self.textAnimatedArr.map(function (str) {
			return app.appendChild(self.createTag("div", str));
		});
    };
	
    return TextAnimated;
}());

generateTextAnimated();

setInterval(function () {
    generateTextAnimated();
}, 3000);