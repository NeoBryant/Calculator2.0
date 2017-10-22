window.onload = function(){
	
	for (var i = 0; i < document.getElementsByClassName("button").length ; i++) {
		var number = 0;
		var iscount;
		document.getElementsByClassName("button")[i].onclick = function(){

			if(this.textContent == '='){
				iscount = true;
				try  {
					number = Number(eval(document.getElementById("input").value));
					//number = Math.round(number * 100000000) / 100000000;
					if (number > 99999999) {
						number = number.toPrecision(8);
					}	
					document.getElementById("input").value = String(number);
	   			}
				catch(exception) {
    				 document.getElementById("input").value = "表达式错误!";
     			}
			}
			else if(this.textContent == 'CE'){
				document.getElementById("input").value = "";
			}
			else if(this.value == "back"){
				document.getElementById("input").value = document.getElementById("input").value.substring(0,document.getElementById("input").value.length-1);
			}
			else if(this.textContent == "+"||this.textContent=="-"||this.textContent=="*"||this.textContent=="/"){
				document.getElementById("input").value += this.textContent;
				iscount = false;
			}
			else{
				if(iscount == true){
					document.getElementById("input").value = "";
				}
				document.getElementById("input").value += this.textContent;
				iscount = false;
			}

			/*if (document.getElementById("input").value.length >= 13) {
                alert('输入的字符过多');
            }*/
		}
	}
}