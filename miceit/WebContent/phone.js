
(function(){

	number='01010';
	
	function Phone(options){
		if(!options){
			
		}
	}
	
function ApplePhone(color){
	
	this.color="white";
	this.model="iPhone";
	
}

ApplePhone.prototype,call = function(){
	console.log("call to my mom");
};
	if(number === ""){
		console.log("�����ϼ���!");
	}
	else{
		console.log("��ȭ �����մϴ�!");
	};
	
	ApplePhone.prototype.setNumber=function(userNumber){
		number=userNumber;
	};
	
	function IPhone(option){
		
		Phone.call(this, options);
		
	
		
		
	}
	
	
	
})();


var myPhone = new ApplePhone({color : "white", price : 100});
var myPhone2 = new ApplePhone({color :"black", price : 200});


console.log(myPhone.color);
console.log(myPhone.price);

ApplePhone.call();

console.log("�ѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤ�");

console.log(myPhone2.color);
console.log(myPhone2.price);



