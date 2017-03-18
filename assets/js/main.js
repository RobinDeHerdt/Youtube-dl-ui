function hide()
{
	var cross			= document.getElementById('cross');
	var checkmark 		= document.getElementById('checkmark');
	var downloadForm 	= document.getElementsByClassName('download-form')[0];

	checkmark.classList.add('hide');
	cross.classList.add('hide');
	downloadForm.classList.add('hide');
}

function send()
{
	var cross			= document.getElementById('cross');
	var checkmark 		= document.getElementById('checkmark');
	var downloadForm 	= document.getElementsByClassName('download-form')[0];
	var url 			= document.getElementById('url').value;

	checkmark.classList.add('hide');
	downloadForm.classList.add('hide');
	cross.classList.add('hide');

	$.post( "/", { url: url })
  		.done(function() {
  			spinner.stop();
			checkmark.classList.toggle('hide');
			downloadForm.classList.toggle('hide');
		})
		.fail(function() {
			spinner.stop();
			cross.classList.toggle('hide');
		});	
  	

    var opts = {
		  lines: 13 // The number of lines to draw
		, length: 28 // The length of each line
		, width: 14 // The line thickness
		, radius: 42 // The radius of the inner circle
		, scale: 0.2 // Scales overall size of the spinner
		, corners: 1 // Corner roundness (0..1)
		, color: '#000' // #rgb or #rrggbb or array of colors
		, opacity: 0.25 // Opacity of the lines
		, rotate: 0 // The rotation offset
		, direction: 1 // 1: clockwise, -1: counterclockwise
		, speed: 1 // Rounds per second
		, trail: 60 // Afterglow percentage
		, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
		, zIndex: 2e9 // The z-index (defaults to 2000000000)
		, className: 'spinner' // The CSS class to assign to the spinner
		, top: '50%' // Top position relative to parent
		, left: '50%' // Left position relative to parent
		, shadow: false // Whether to render a shadow
		, hwaccel: false // Whether to use hardware acceleration
		, position: 'absolute' // Element positioning
	}

	var target = document.getElementById('status');
	var spinner = new Spinner(opts).spin(target);
}

function download()
{
	var cross			= document.getElementById('cross');
	var checkmark 		= document.getElementById('checkmark');
	var downloadForm 	= document.getElementsByClassName('download-form')[0];

	document.getElementById('url').value = '';
	downloadForm.classList.add('hide');
	checkmark.classList.add('hide');
	window.location="?file=get";
}
