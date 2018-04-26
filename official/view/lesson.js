window.onload = function() {
	var btns = document.getElementById("enroll_top_ul").getElementsByTagName("li");
	 var divs = document.getElementById("divs");
		
		for(var i = 0; i < btns.length; i++){
				btns[i].onclick = function(){
					for(let k = 0;k < divs.length;k++){
						console.log(divs[i])
					}
					
				}
		}
}

















