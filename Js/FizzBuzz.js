"use strict"

function main()
{
	//a simple code to write 1 to 100
	let a;
	let v;
	for(a=1;a<101;a++)
	{
		if (a%3==0 && a%5 == 0)
		{
			v = "FizzBuzz"		
		}

		else if (a%3==0)
		{
			v = "Fizz";
		}
		else if(a%5==0)
		{
			v = "Buzz";
		}
		else
		{
			v = a
		}
		document.write("<p>"+v+"</p>");
	}
}

main()