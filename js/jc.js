$(document).ready(function(){
    $('#navigation').localScroll({duration:800, hash:true});

    $(window).hashchange( function(){
	position = getPosition();
	$('#indicator').animate({marginTop: position});
    });
    $('#indicator').css({marginTop: getPosition()});
});

function getPosition(){
    var hash = location.hash;
    var position;
    	if(hash == '#services')
	    position = '-6.6em';
	else if(hash == '#projects')
	    position = '-5.3em';
	else if(hash == '#contact')
	    position = '-3.9em';
	else if(hash == '#jobs')
	    position = '-2.6em';
    return position;
}