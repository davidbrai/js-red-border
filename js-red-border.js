(function() {
	var rbh = document.getElementById('red-border-hack');
	if (rbh) {
		rbh.remove();
	} else {
		rbh = document.createElement('style');
		rbh.setAttribute('id', 'red-border-hack');
		var css = '* { border: 1px solid red !important; }';
		rbh.appendChild(document.createTextNode(css));
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(rbh);
	}
})();