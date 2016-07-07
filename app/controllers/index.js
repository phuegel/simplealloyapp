$.open_button.addEventListener("click", function(event) {
	console.debug("is open_button click event handler");
	
	$.tab_1.open($.child_window);
});

$.index.open();