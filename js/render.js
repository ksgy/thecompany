var isIE = function () {
	var myNav = navigator.userAgent.toLowerCase();
	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

var addToggleEvent = function(element) {
	var cl = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		var el;

		if(isIE()){
			el = target;
			if(target.nodeName == 'LI'){
				el = target.getElementsByTagName('img')[0];
			} else if(target.nodeName == 'IMG') {
				el = target;
			}
		} else {
			el = this.getElementsByTagName('img')[0];
		}

		if(el.className == 'selected') {
			el.className = '';
		} else {
			el.className = 'selected';
		}
	};
	if (element.addEventListener) {
	    element.addEventListener("click", cl, false);
	}
	else {
	    element.attachEvent("onclick", cl);
	}
};

var renderIE = function(data) {
	var ul = document.createElement('ul');
	var lis = '';
	for (var i = 0; i < data.items.length; i++) {
		lis += '<li id="pic' + i + '"><img src="' + data.items[i].media.m + '" alt="'+ data.items[i].title +'"></li>';
	};
	ul.innerHTML = lis;

	document.body.appendChild(ul);

	for (var j = data.items.length - 1; j >= 0; j--) {
		addToggleEvent(document.getElementById('pic' + j));
	};

};

var render = function(data) {
	var ul = document.createElement('ul');
	var fragment = document.createDocumentFragment();

	for (var i = 0; i < data.items.length; i++) {
		var li = document.createElement("li");
		var img = document.createElement("img");
		img.src = data.items[i].media.m;
		img.alt = data.items[i].title;
		addToggleEvent(li);
		li.appendChild(img);
		fragment.appendChild(li);
	};

	ul.appendChild(fragment);
	document.body.appendChild(ul);

};
