(function() {
	var rbh = document.getElementById('red-border-hack');
	if (rbh) {
		rbh.remove();
	} else {
		rbh = document.createElement('style');
		rbh.setAttribute('id', 'red-border-hack');
		var css = '* { box-shadow: inset 0px 0px 0px 1px red !important; }';
		rbh.appendChild(document.createTextNode(css));
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(rbh);
	}
})();
