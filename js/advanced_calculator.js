var calcul = 0; //判断运算符
var mark = 0; //判断是否补全右括号
/*


*/
window.onload = function(){
	var number = 0;
	for (var i = 0; i < document.getElementsByClassName("button").length ; i++) {
		var iscount;
		document.getElementsByClassName("button")[i].onclick = function(){
			if(this.textContent == '='){
				iscount = true;
				try  {
					number = Number(eval(document.getElementById("input").value));
					number = Math.round(number * 10000000000000000000) / 10000000000000000000;
					if (number > 999999999999999999999) {
						number = number.toPrecision(19);
					}	
					document.getElementById("input").value = String(number);
     			//	document.getElementById("input").value = eval(document.getElementById("input").value);
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
			else if(this.textContent == "+"||this.textContent=="-"||this.textContent=="*"||this.textContent=="/"||this.textContent=="%"){
				document.getElementById("input").value += this.textContent;
				iscount = false;
			} 
			else if (this.value == "square") {
				calcul = 1;
			}
			else if (this.value == "cube") {
				calcul = 2;
			}	
			else if (this.value == "power") {
				calcul = 3;
			}	
			else if (this.value == "sqrt") {
				calcul = 4;
			}
			else if (this.textContent == "x!") {
				calcul = 5;
			}
			else if (this.textContent == "Rand") {
				number = Math.random();
				document.getElementById("input").value += String(number);
				iscount = false;
			}
			else if (this.textContent == "ln") {
				calcul = 7;
			}
			else if (this.textContent == "lg") {
				calcul = 8;
			}
			else if (this.textContent == "sin") {
				calcul = 10;
			}
			else if (this.textContent == "cos") {
				calcul = 11;
			}
			else if (this.textContent == "tan") {
				calcul = 12;
			}
			else if (this.textContent == "1/x") {
				calcul = 13;
			}	
			else if (this.value == "ex") {
				calcul = 14;
			}			
			else if (this.value == "tenx") {
				calcul = 15;
			}
			else{
				if(iscount == true){
					document.getElementById("input").value = "";
				}
				if (calcul == 0) {
					document.getElementById("input").value += this.textContent;
					iscount = false;
				} else {
					number = Number(this.textContent);
					switch (calcul) {
						case 1:
							number = Math.pow(number, 2);
							break;
						case 2:
							number = Math.pow(number, 3);
							break;
						case 3:
							number = Math.pow(number, 4);
							break;
						case 4:
							number = Math.sqrt(number);
							break;
						case 5:
							var i = number;
							number = 1;
							while (i) {
								number *= i;
								--i;
							}
							break;				
						case 7:
							number = Math.log(number);
							break;
						case 8:
							number = Math.log(number) / Math.log(10);
							break;
						case 10:
							number = Math.sin(number);
							break;
						case 11:
							number = Math.cos(number);
							break;
						case 12:
							number = Math.tan(number);
							break;
						case 13:
							number = 1 / number;
							break;
						case 14:
							number = Math.pow(Math.E, number);
							break;
						case 15:
							number = Math.pow(10, number);
							break;									
					}
					calcul = 0;

					document.getElementById("input").value += String(number);
					iscount = false;
				}
			}
			if (document.getElementById("input").value.length >= 25) {
                alert('输入的字符过多');
            }
		}
	}
}

alert("注意！\n\n要使用左边的拓展功能，需先点击功能按钮，在点击数字，才能得到有效数字\n\n");





