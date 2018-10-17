// Javascript class : --- it used to take polymorphism

class student{
	constructor(name,email,age,subject){
		this.name = name;
		this.email = email;
		this.age = age;
		this.subject = subject;
	}
	details (){
		console.log("Hello " + this.name  + "\nYour subject is : " + this.subject);
		return this;    //for Chaining Methods, calling
	}
	moreDetails (){
		console.log("Hello " + this.name  + "\nYour email is : " + this.email + "\nAnd Your age is : " + this.age);	
		return this;    //for Chaining Methods, calling
	}
}
var vijay = new student("vijay","vijay@gmail.com","12","Math");
var rahul = new student("rahul","rahul@gmail.com","11","English"); 

console.log(vijay);

vijay.details().moreDetails();  // Chaining Methods,
class employee extends student{

}