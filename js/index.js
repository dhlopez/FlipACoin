function transit(){
	var a = 1440;
	$('#backside').show();
	$('#frontside').show();

	if(Math.floor(Math.random() * 2) == 0)
	{
		
		$('#frontside').transition({
	  	  //perspective: '50px',
		  rotateY: '+='+a+'deg',
		  duration: 4500,
		  ease:'out'
	    }, function(e)
		  {
			$('#backside').hide();
		  });
		$('#backside').transition({
		  //perspective: '50px',
		  rotateY: '+='+a+'deg',
		  delay:150,
		  duration: 4500,
		  ease:'out'
		});
		console.info('head');
		
	}
	else
	{
		$('#backside').transition({
		  //perspective: '50px',
		  rotateY: '+='+a+'deg',
		  duration: 4500,
		  ease:'out'
		}, function(e)
		  {
			$('#frontside').hide();
		  });
		$('#frontside').transition({
	  	  //perspective: '50px',
		  rotateY: '+='+a+'deg',
		  duration: 4500,
		  delay:150,
		  ease:'out'
		});
		console.info('tail');
		
	}
}
/*
function flip(){
	document.getElementById("frontside").classList.toggle("front");
    document.getElementById("backside").classList.toggle("back");
    var frontside = document.getElementById("coins");
frontside.addEventListener( 'webkitTransitionEnd', 
    function( event ) { alert( "Finished transition!" ); }, false );
    result();
}
function changeClr( id ){
    document.getElementById( id ).style.backgroundColor = "#3E5057";
}

var time = Math.random();
var front = document.querySelector('.front');
front.style.setProperty('--animation-time', time + 's');

var back = document.querySelector('.back');
back.style.setProperty('--animation-time', time + 's');

function result()
{
	var x = (Math.floor(Math.random() * 2) == 0);
	console.info(x);
    if(x){
    	//true, head
    	document.getElementById("imgfront").classList.add("show");
    	document.getElementById("imgfront").classList.remove("hide");
    	document.getElementById("imgback").classList.add("hide");
    }else{
    	//false, tail
        document.getElementById("imgfront").classList.add("hide");
        document.getElementById("imgback").classList.add("show");
        document.getElementById("imgback").classList.remove("hide");
    }
}
*/

