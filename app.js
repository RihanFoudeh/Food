alert ("Welcome to my website")
alert("This site calculates your age")
var name =prompt("what's your name ? ")
alert("Welcome "+ name)

var age =prompt("what's your birthday ? ")

age = 2021 - age
alert("Your age is " +age)



if(age>=18){

var food =prompt("what's your favorite Food (shawarma ,burger ,pizza) ? ")


if (food == "shawarma"){
  document.write("<div>" +"<h1>" + "shawarma " + "</h1>" +
			 "<img src='https://static.toiimg.com/thumb/64696930.cms?imgsize=329052&width=800&height=800' >"+ "</div>")

      
}

 else if  (food == "burger"){
  document.write("<div>" +"<h1>" + "burger " + "</h1>" +
			 "<img src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p-2870431.jpg' >"+ "</div>")




       }
       else if  (food == "pizza"){
  document.write("<div>" +"<h1>" + "pizza " + "</h1>" +
			 "<img src='https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2.jpg' >"+ "</div>")




       }
       }

       if (age <=18) {
         var food =prompt("what's your favorite Food (Happy meal ,small burger ) ? ")

       }
       if(food=="Happy meal"){  document.write("<div>" +"<h1>" + "Happy meal " + "</h1>" +
			 "<img src='https://image.cnbcfm.com/api/v1/image/105032989-GettyImages-139040294.jpg?v=1607105397&w=740&h=416' >"+ "</div>")

       }


        if(food=="small burger")
        {  document.write("<div>" +"<h1>" + "small burger " + "</h1>" +
			 "<img src='https://www.mashed.com/img/gallery/why-mcdonalds-burgers-are-so-delicious/intro-1595863311.jpg' >"+ "</div>")
       }

alert("Thank you for visiting my website")





