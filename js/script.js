var operator = document.getElementById('operator');
var calculer = document.getElementById('calculer');
var resultat = document.getElementById('resultat');
var num = document.getElementsByClassName('num');

function verif() {
	var num1 = parseInt(num[0].value);
	var num2 = parseInt(num[1].value);
	if(num1 < -9999 || num1 > 9999)
	{
		num[0].style.border = "1px solid red";
		return 0;
	}
	if(num2 < -9999 || num2 > 9999)
	{
		num[1].style.border = "1px solid red";
		return 0;
	}
	if(!num1 || !num2)
	{
		num[0].style.border = "1px solid red";
		num[1].style.border = "1px solid red";
		return 0;
	}
	num[0].style.border = "1px solid grey";
	num[1].style.border = "1px solid grey";
	return 1;
}

function main() {
	calculer.addEventListener("click", function(){
		var callc = parseInt(num[0].value);
		if (verif())
		{
			if (operator.value == 'addition')
				callc += parseInt(num[1].value);
			else if (operator.value == 'soustraction')
				callc -= parseInt(num[1].value);
			else if (operator.value == 'multiplication')
				callc *= parseInt(num[1].value);
			else if (operator.value == 'division')
				callc /= parseInt(num[1].value);
			else if (operator.value == 'modulo')
				callc %= parseInt(num[1].value);
			else
				return ;
			resultat.innerHTML = ""+callc+"";
		}
	});
}

main();