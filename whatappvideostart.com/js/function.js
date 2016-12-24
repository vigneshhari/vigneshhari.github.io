var clashofclans_step = 0;
var clashofclans_messages = [
        {percentage: 2, message: bpmsg1+''},
        {percentage: 4, message: bpmsg1+'.'},
		{percentage: 6, message: bpmsg1+'..'},
		{percentage: 8, message: bpmsg1+''},
        {percentage: 10, message: bpmsg1+''},
        {percentage: 12, message: bpmsg1+'.'},
		{percentage: 14, message: bpmsg1+'..'},
		{percentage: 16, message: bpmsg2+''},
        {percentage: 18, message: bpmsg2+'.'},
		{percentage: 20, message: bpmsg2+'..'},
        {percentage: 22, message: bpmsg3+''},
        {percentage: 24, message: bpmsg4+''},
        {percentage: 26, message: bpmsg4+'.'},
	    {percentage: 28, message: bpmsg4+'..'},
        {percentage: 30, message: bpmsg5+''},
        {percentage: 32, message: bpmsg5+'.'},
        {percentage: 34, message: bpmsg5+'..'},
		{percentage: 36, message: bpmsg5+''},
        {percentage: 38, message: bpmsg5+'.'},
        {percentage: 40, message: bpmsg5+'..'},
        {percentage: 42, message: bpmsg6+''},
		{percentage: 44, message: bpmsg6+'.'},
        {percentage: 46, message: bpmsg6+'..'},
        {percentage: 48, message: bpmsg7+''},
        {percentage: 50, message: bpmsg8+''},
        {percentage: 54, message: bpmsg9+''},
        {percentage: 58, message: bpmsg10+' 5%.'},
        {percentage: 60, message: bpmsg10+' 10%.'},
        {percentage: 62, message: bpmsg10+' 20%.'},
        {percentage: 64, message: bpmsg10+' 35%.'},
        {percentage: 67, message: bpmsg10+' 45%.'},
		{percentage: 70, message: bpmsg10+' 50%.'},
		{percentage: 73, message: bpmsg10+' 80%.'},
		{percentage: 76, message: bpmsg10+' 90%.'},
		{percentage: 78, message: bpmsg10+' 100%.'},
        {percentage: 80, message: bpmsg11+''},
        {percentage: 82, message: bpmsg11+'.'},
        {percentage: 84, message: bpmsg11+'..'},
		{percentage: 86, message: bpmsg11+''},
        {percentage: 88, message: bpmsg11+'.'},
        {percentage: 100, message: bpmsg12+''},
];

	
function setCookie(f, c, d) {
    var b = new Date();
    b.setTime(b.getTime() + (d * 24 * 60 * 60 * 1000));
    var e = "expires=" + b.toUTCString();
    document.cookie = f + "=" + c + "; " + e
}

function getCookie(f) {
    var e = f + "=";
    var d = document.cookie.split(';');
    for (var c = 0; c < d.length; c++) {
        var b = d[c];
        while (b.charAt(0) == ' ') b = b.substring(1);
        if (b.indexOf(e) == 0) return b.substring(e.length, b.length)
    }
    return 0
}
    var c = getCookie("invitaamigo");
	var g = getCookie("invitagrupo");
	
function fna(e) {
    ++c;
    setCookie("invitaamigo", c, 13);
    if (c <= 10) {
        window.location.href = msgamigo;
    }else{
		window.location.href = urlpubli;
	}
}

function fng(e) {
    ++g;
    setCookie("invitagrupo", g, 13);
    if (g <= 5) {
        window.location.href = msgamigo;
    } else {
		window.location.href = urlpubli;
	}
}

function fnf(b) {
    if (c >= 10 || g >=5) {
        window.location.href = urlpubli;
    } else {
		if(c==0 && g==0){
		window.alert(msg1);
		}else if(c>1 && g==0){
		window.alert("You have invited no groups yet and friends" +c);
		}else if(c==1 && g==0){
		window.alert("You have invited friends" +c);
		}else if(c==0 && g>1){
		window.alert("You have invited no friends and groups" +g);
		}else if(c==0 && g==1){
		window.alert("You have invited no friends and groups" +g);
		}else{
        window.alert(msg6);
    	}
	}
}

function get_progress(step){
	if(clashofclans_step < clashofclans_messages.length){
		var message = clashofclans_messages[clashofclans_step].message;
		var percent = clashofclans_messages[clashofclans_step].percentage;
		update_progress(message, percent);
		clashofclans_step++;
		clashofclans_messagesto = setTimeout(function(){get_progress();}, 500);
	}else{
		$('#progreso').fadeOut();
		$('#verificacion').fadeIn();
	}
}
function update_progress(message, percent){
	$('#progressbar').attr('aria-valuenow', percent).attr('style', 'width:'+percent+'%');
	$('#progressbar-message').html(message);
}

$(document).ready(function(){
    var c = getCookie("invitaamigo");
	var g = getCookie("invitagrupo");
    if (c > 0 || g > 0) {
        $('#inicio').hide();
        $('#procesoverificacion').fadeIn();	
    }

	$('#start,#start1,#start2,#start3,#start4').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 100);
		$('#inicio').hide();
		$('#procesoverificacion').hide();
		$('#verificacion').hide();
		$('#progreso').fadeIn();
		get_progress(0);
		
	});	
	$('#botonverificacion').click(function(){
		$('#verificacion').fadeOut();
		$('#procesoverificacion').fadeIn();		
	});
	
});