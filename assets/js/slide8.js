var trigger = 0

$(window).scroll(function(){
	var topDist = $(this).scrollTop();
	//console.log(topDist);
	if (topDist < 1000) {
		$("#nav li").removeClass("active");
		$("#mn_home").addClass("active");
	}
	if ((topDist >= 1000) && (topDist < 2000) ) {
		$("#nav li").removeClass("active");
		$("#mn_projects").addClass("active");
	}
	if ((topDist >= 2000) && (topDist < 3000) ) {
		$("#nav li").removeClass("active");
		$("#mn_design").addClass("active");
	}
	if ((topDist >= 3000) && (topDist < 4000) ) {
		$("#nav li").removeClass("active");
		$("#mn_technik").addClass("active");
	}
	if ((topDist >= 4000) && (topDist < 5000) ) {
		$("#nav li").removeClass("active");
		$("#mn_lab").addClass("active");
	}
	if ((topDist >= 5000) && (topDist < 6000) ) {
		$("#nav li").removeClass("active");
		$("#mn_about").addClass("active");
	}
	if ((topDist >= 6000) && (topDist < 7000) ) {
		$("#nav li").removeClass("active");
		$("#mn_jobs").addClass("active");
	}
});


$(document).ready(function() {
	
	$("#nav").localScroll();
	// $("#nav li").click(function(){
	// 	$("#nav li").removeClass("active");
	// 	$(this).addClass("active");
	// });
	
	$("#thumbscreen").slides({
		container: "thumbscreen-slides",
		generateNextPrev: true,
		pagination: false
	});
	
	
	
	
	//Auf den ggf. übermittelten Anker reagieren
	//if(location.hash) {
	//	x = location.hash;
	//	//getContent(x.slice(1)+".html");
	//	getContent(x.slice(1));
	//}
	
	
  $(".project-thumbnails a").click(function(){
		if (trigger == 0) {
			$("#project-container, .project-thumbnails-wrap:visible .project-div").slideDown("slow");
			$("#projects .content").animate({"top": "-=235px"}, "slow");
			$(".next, .prev").hide();
			$(".project-thumbnails a").css({"opacity": "0.2"}).click(function(){
				return false;
			});
			trigger = 1;
			url = $(this).attr("href");
			getContent(url);
			$(this).blur();
			return false;
  	} else {
			$("#project-container, .project-thumbnails-wrap:visible .project-div").slideUp("slow");
			$("#projects .content").animate({"top": "+=235px"}, "slow");
			$(".next, .prev").delay(600).fadeIn("slow");
			$(".project-thumbnails a").css({"opacity": "1"});
			trigger = 0;
			$("#project-content").text("tschüss");
			return false;
		}
	});
	// $("a.project-slider-prev, a.project-slider-next").live("click", function() {
	// 	url = $(this).attr("href");
	// 	getContent(url);
	// 	$(this).blur();
	// 	return false;
	// });
	
	//Informieren das etwas passiert
	$("#project-content").ajaxStart(function() {
		$(this).fadeOut();
		// $(this).fadeOut(function() {
		// 	(this)
		// 		.text("")
		// 		.addClass("loading")
		// 		.fadeIn();
		// });
	});

		$("#project-content").ajaxSuccess(function() {
			$(".project-cycle").bxSlider({
				auto: "true",
				//autoDelay: 5000,
				autoHover: "true",
				pause: 4000,
				pager: "true",
				pagerType: "short",
				speed: 1000
			});
		  $(".project-slider-close ").click(function(){
				$("#project-container, .project-thumbnails-wrap:visible .project-div").slideUp("slow");
				$("#projects .content").animate({"top": "+=235px"}, "slow");
				$(".next, .prev").delay(600).fadeIn("slow");
				$(".project-thumbnails a").css({"opacity": "1"});
				trigger = 0;
				$("#project-content").text("tschüss");
				return false;
			});
			$(".manufactured li").hover(
				function(){
					if ($(this).attr("title")) {
						var tip = $(this).attr("title");
						$(this).attr("title","");
						$(this).append("<span id='tooltip'><span>"+tip+"</span></span>");
					}
				},
				function(){
					$(this).attr("title",$("#tooltip span").html());
					$(this).children("span#tooltip").remove();
				}
			);
		});


		// ### Accordion ###
		$(".jobs_item").hide(); 
		$('.jobs_trigger:last').addClass('active').next().show();
		//On Click
		$(".jobs_trigger").click(function(){
			if( $(this).next().is(":hidden") ) { 
				$(".jobs_trigger").removeClass("active").next().slideUp(); 
				$(this).toggleClass("active").next().slideDown(); 
			} else { 
				$(this).toggleClass("active").next().slideUp();
			}
			return false;
		});

		// ### Tooltips ###
		$('.manufactured li').mouseover(function(e) {
			if ($(this).attr('title')) {
				var tip = $(this).attr('title');   
				//Remove the title attribute's to avoid the native tooltip from the browser
				$(this).attr('title','');
				//Append the tooltip template and its value
				$(this).append('<div id="tooltip">' + tip + '</div>');    
				$('#tooltip').css('top', e.pageY - 10 );
				$('#tooltip').css('left', e.pageX + 20 );
				//Show the tooltip with faceIn effect
				$('#tooltip').fadeIn('500');
				$('#tooltip').fadeTo('10',0.8);
			}
		}).mousemove(function(e) {
			//Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
			$('#tooltip').css('top', e.pageY - 10 );
			$('#tooltip').css('left', e.pageX + 20 );
		}).mouseout(function() {
			//Put back the title attribute's value
			$(this).attr('title',$('#tooltip').html());
			//Remove the appended tooltip template
			$(this).children('div#tooltip').remove();
		});

		// ### Impressum ###
		$("#impressum a").click(function(){
			$("#impressum_wrap").remove();
			$("body").append("<div id='impressum_wrap' style='display: none;'><a href='#'class='close'>Close</a><div id='impressum_content'>...</div></div>")
			url = $(this).attr("href");
			//alert(url);
			getImpressum(url);
			$(this).blur();
			return false;
		});
		// $("#impressum_wrap .close").live("click", function(){
		// 	$("#impressum_wrap").fadeOut();
		// 	setTimeout(function(){$("#impressum_wrap").remove();}, 500);
		// 	return false;
		// });

	});
/*
 *      Holt den Inhalt vom Server
 */
function getContent(url) {
	$.ajax({
	//erweitere aufzurufenden Link
	//url: url.replace(/\.html/, "/ajax.html"),
	//url: url+"&type=101",
	url: url+"ajax.html",
	dataType: "html",
	//wenn es geklappt hat
	success: function(html) {
		//Inhalt reinschreiben und anzeigen
		$("#project-content")
			//.removeClass("loading")
			//.css("display", "none")
			.html(html)
			.fadeIn();
		//Adresszeile aktualisieren
		//location.hash = url;
		//location.hash = url.replace(/\.html/, "");
	}
	});
}

function getImpressum(url) {
$.ajax({
	url: url+"ajax.html",
	dataType: "html",
	//wenn es geklappt hat
	success: function(html) {
		//Inhalt reinschreiben und anzeigen
		$("#impressum_content").html(html);
		$("#impressum_wrap").fadeIn();
		// hide: project-container
		if (trigger == 1) {
			$("#project-container, .project-thumbnails-wrap:visible .project-div").slideUp("slow");
			$("#projects .content").animate({"top": "+=235px"}, "slow");
			$(".next, .prev").delay(600).fadeIn("slow");
			$(".project-thumbnails a").css({"opacity": "1"});
			trigger = 0;
			$("#project-content").text("tschüss");
		}
	}
	});
}