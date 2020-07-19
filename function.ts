function func (num1: number, num2: number){
    return num1 + num2;
}
func(2,3);
//func(9);
//func(2,'3'); Error


//Optional parameters
function func1 (num1: number, num2?: number){
    if(num2)
        return num1 + num2;
    else
        return num1;
}
func1(2,3);
func1(9);

function func2 (num1: number, num2: number =10){
    if(num2)
        return num1 + num2;
    else
        return num1;
}
func2(2,3);
func2(9);
