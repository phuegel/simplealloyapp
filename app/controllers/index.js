
$.open_button_1.addEventListener("click", function(event) {
	console.debug("is open_button click event handler");
	
	$.tab_1.open($.child_window_1);
});

$.open_button_2.addEventListener("click", function(event) {
	console.debug("is open_button click event handler");
	
	$.tab_1.open($.child_window_2);
	
});$.open_button_3.addEventListener("click", function(event) {
	console.debug("is open_button click event handler");
	
	$.tab_1.open($.child_window_3);
	
});$.open_button_4.addEventListener("click", function(event) {
	console.debug("is open_button click event handler");
	
	$.tab_1.open($.child_window_4);
});
$.index.open();
