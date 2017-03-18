<?php 
	session_start();

	if(isset($_POST["url"])) {
		$url 		= $_POST['url'];
		$output 	= shell_exec('cd downloads ; youtube-dl -x --audio-format "mp3" -o "%(title)s.%(ext)s" '. $url);

		if(isset($output)) {
			$fileName 			= shell_exec('cd downloads ; youtube-dl --get-filename -o "%(title)s.mp3" '. $url);
			$_SESSION['file'] 	= $fileName;
		}
		else {
			header('HTTP/1.1 500 Internal Server Booboo');
		}
	}

	if(isset($_GET['file'])) {
		$dir 	= "downloads/";
		$song 	= $_SESSION['file'];
		$str 	= substr($song, 0, strlen($song) - 1);
		
		$file 	= $dir . $str;

		if(file_exists($file)) {
			header('Content-Description: File Transfer');
			header('Content-Type: audio/mp3');
			header('Content-Disposition: attachment; filename=' . basename($file)); 
			header('Content-Length: ' . filesize($file));

			readfile($file);
		}
		else {
			header('HTTP/1.1 500 No file :(');
		}
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Song downloader</title>
	<link rel="stylesheet" type="text/css" href="/assets/css/style.css">
</head>
<body>
<div class="form" id="urlform">
	<input type="text" name="url" placeholder="https://www.youtube.com/watch?v=IIvSXocE6YY" id="url" onchange="send()" onfocus="hide()">

	<div id="status">
		<img src="/assets/img/checkmark.png" alt="done processing" id="checkmark" class="hide">
		<img src="/assets/img/cross.png" alt="failed processing" id="cross" class="hide">
	</div>
	<div class="download-form hide">
		<input type="submit" value="Download" onclick="download()" download></div>
	</div>
</div>
<script src="/assets/js/libraries/spin.min.js"></script>
<script src="/assets/js/libraries/jquery-3.1.1.min.js"></script>
<script src="/assets/js/main.js"></script>
</body>
</html>