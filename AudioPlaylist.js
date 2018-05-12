function audioPlayer(){
	var currentSong= 0;
	$("#audioPlayer")[0].src=$("#playlist li a")[0];
	$("#audioPlayer")[0].play();
	$("#playlist li a").click(function(e){ 
	e.preventDefault();
	$("#audioPlayer")[0].src=this;
	$("#audioPlayer")[0].play();
	$("#playlist li")[0].removeClass("current-song");
	currentSong= $(this).parent().index();
	$(this).parent().addClass("current-song");
	
	});
	$("#audioPlayer")[0].addEventListener("ended", function(){
	currentSong++;
	if (currentSong == $("#playlist li a").length)
	currentSong =0;
	$("#playlist li").removeClass("current-song");
	$("#playlist li:eq("+currentSong+")").addClass("current-song");
	$("#audioPlayer")[0].src=$("#playlist li a")[currentSong].href;
	$("#audioPlayer")[0].play();
	
	});
	
	}
	
	

		<audio src="" controls id = "audioPlayer"></audio>
		<ul id="playlist">
		<li class="current-song"><a href="Music/Despacito.mp3">Despacito</a></li>
		<li><a href="Music/Hello - Adele.mp3">Hello</a></li>
		<li><a href="Music/Let It Go.mp3">Let It Go</a></li>
		<li><a href="Music/Listen.mp3">Listen</a></li>
		<li><a href="Music/Look What you made me do.mp3">Look What You Made Me Do</a></li>
		</ul>
		<script src="https://code.jquery.com/jquery-2.2.0.js"></script>
		<script src="AudioPlaylist.js"></script>
		<script>
			audioPlayer();
		</script>

#border-right:1px solid black; border-left: 1px solid black;	
#body{background-image: url("Images/background.png");background-size: 1280px 500px;}
#audioPlayer{width: 250px; margin-top:98px; margin-left: 30px; float: left-side;}
#playlist>li{list-style: none;float: left-side; width:250px; height:17px;margin-left: 30px;margin-top: 0px;}
#playlist>li>a{ color: blue; text-decoration: none;font-family:Georgia; 
		font-size: 15px;border-collapse:separate; background-color: pink;}
#playlist .current-song a{color: red;}