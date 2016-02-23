function solve_qe()
{
	var a,b,c,d,x1,x2;
	a=document.getElementById('aaa').value;
	b=document.getElementById('bbb').value;
	c=document.getElementById('ccc').value;
	d=b*b-4*a*c;
	if(d>0)
	{	x1=((b*-1)+Math.sqrt(d))/(2*a);
		x2=((b*-1)-Math.sqrt(d))/(2*a);
		document.getElementById('dyskrym').innerHTML='Дискримінант > за нуль! D = '+d;
		document.getElementById('xxx1').innerHTML= 'x1 = ' + x1;
		document.getElementById('xxx2').innerHTML= 'x2 = ' + x2;
	} else if(d==0) {
		x1=((b*-1)/(2*a))*-1;
		x2=x1;
		document.getElementById('dyskrym').innerHTML='Дискримінант = нулю! Обидва корені однакові!';
		document.getElementById('xxx1').innerHTML= x1;
		document.getElementById('xxx2').innerHTML= x2;
	} else {
	document.getElementById('dyskrym').innerHTML='Дискримінант < за нуль! Рівняння коренів немає!';
	document.getElementById('xxx1').innerHTML= '-';
	document.getElementById('xxx2').innerHTML= '-';
	}
}