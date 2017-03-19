var url = null;
var spinner = null;

var cross = document.getElementById('cross');
var checkmark = document.getElementById('checkmark');
var downloadForm = document.getElementById('download-form');

var elements = [cross, checkmark, downloadForm];

var opts = {
    lines: 13
    , length: 28
    , width: 14
    , radius: 42
    , scale: 0.2
    , corners: 1
    , color: '#000'
    , opacity: 0.25
    , rotate: 0
    , direction: 1 
    , speed: 1 
    , trail: 60 
    , fps: 20
    , zIndex: 2e9 
    , className: 'spinner'
    , top: '50%'
    , left: '50%'
    , shadow: false
    , hwaccel: false
    , position: 'absolute'
}

var target = document.getElementById('status');

function hide() {
    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].classList.contains('hide')) {
            elements[i].classList.add('hide');
        }
    }
}

function send() {
	url	= document.getElementById('url').value;
    spinner = new Spinner(opts).spin(target);

    hide();

	$.post( "/", { url: url })
    .done(function() {
  	    spinner.stop();
	    checkmark.classList.remove('hide');
		downloadForm.classList.remove('hide');
	})
	.fail(function() {
		spinner.stop();
		cross.classList.remove('hide');
	});	
}

function download() {
    hide();
	document.getElementById('url').value = '';
	window.location="?file=get";
}
