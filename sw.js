var hour = $(".hours");
var minute = $(".minutes");
var seconds = $(".seconds");
var hstring = "00";
var mstring = "00";
var sstring = "00";
var mils="00";
var t1=0;
var t2=0;
var t3=0;
var t4=0;
var checkL=false;
var checkR=false;
var checkSt=false;
let x=false;
$(".start").on("click",function(e){
	checkL=true;
	checkR=true;
   $(".lapse").css("visibility","visible");
   $(".reset").css("visibility","visible");

	if(!checkSt){
	  checkSt=true;
	}
	else{
		checkSt=false;
	}
	if(checkSt){
		$(".start").text("STOP");
      $(".start").addClass("stop");
	}
	else{
		$(".start").text("START");
      $(".start").removeClass("stop");
	}
    if(!x){
     x=true;
     timer();
     }
     else{
     	x=false;
     }


});
var count=0;
function timer(){
	if(t1===0 && t2===0 && t3===0 && t4===0){
		count++;
	}
if(x){
	if(count){
		t4++;
		count =0;
	}
	if(t2===60){
    	t1++;
    	t2=0;
    	if(t1<10){
    	  hstring = "0"+t1;
        }
        else
    	  hstring = t1;
    }
    $(".hours").text(hstring);

	 if(t3===60){
    	t2++;
    	t3=0;
    	if(t2<10){
    		mstring = "0"+t2;
        }
        else
    	{mstring = t2;}
     }
    $(".minutes").text(mstring);

    if(t4===99){
    	t3++;
    	t4=0;
    	if(t3<10){
    	sstring = "0"+t3;
    }
    else
    	{sstring = t3;}
    
    }
    $(".seconds").text(sstring);

    t4++;
    if(t4<10){
    	mils="0"+t4;
    }
    else{
    	mils = t4;
    }
    $(".milliSec").text(mils);
    setTimeout(timer,9);
}
}
$(".lapse").on("click",function(){
    $(".lap").prepend('<li class="new">'+hstring +":"+mstring+":"+sstring+":"+mils+ "<button class='removal'><i class ='fas fa-trash-alt'></i></button></li>");
});
 
 $(".reset").on("click",function(){
    x=false;
    t1=0;
    hstring = "00";
    t2=0;
    mstring = "00";
    t3=0;
    sstring = "00";
    t4=0;
    mils = "00";
    $(".hours").text("00");
    $(".minutes").text("00");
    $(".seconds").text("00");
    $(".milliSec").text("00");
 });

$(".lap").on("click", ".removal", function() {
    $(this).parent().remove();
});

var menu =false;
$(".menu").on("click",function(){
   if(menu){
      menu=false;
       $(".menu").text("DARK");
      $(".watch").removeClass("watchl");
      $("body").removeClass("bodyl");
      $(".lap").removeClass("lapl");
      $(".h1").removeClass("h1l");
      $(".menu").removeClass("menul");
      $(".start").removeClass(".startl");
   }
   else{
      menu = true;
      $(".menu").text("LIGHT");
      $(".watch").addClass("watchl");
      $("body").addClass("bodyl");
      $(".lap").addClass("lapl");
      $(".h1").addClass("h1l");
      $(".menu").addClass("menul");
      $(".start").addClass(".startl");
   }

});
 

