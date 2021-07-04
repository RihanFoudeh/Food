alert("Welcome to my website")
alert("This site calculates your age")
var name = prompt("what's your name ? ")


alert("Welcome " + name)


// var answer = prompt('What is your name?','Joe Blogg');

var age = prompt("what's your birthday ? ")

age = 2021 - age
alert("Your age is " + age)


function favfood() {
  if (age >= 18) {





    var food = prompt("what's your favorite Food (shawarma ,burger ,pizza) ? ")

    while (food != "shawarma" && food != "burger" && food != "pizza") {
      food = prompt("you entered wrong chooses please try agin")
    }
    var counter = prompt("How many items do you want ? " + food)
    console.log("the number of iteams = " + counter);

    if (food == "shawarma") {




      for (var x = 0; x < counter; x++) {

        document.write("<div>" + "<h1>" + "shawarma " + "</h1>" +
          "<img src='https://static.toiimg.com/thumb/64696930.cms?imgsize=329052&width=800&height=800' >" + "</div>")


      }
    }

    else if (food == "burger") {

      for (var x = 0; x < counter; x++) {


        document.write("<div>" + "<h1>" + "burger " + "</h1>" +
          "<img src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p-2870431.jpg' >" + "</div>")


      }

    }
    else if (food == "pizza") {


      for (var x = 0; x < counter; x++) {

        document.write("<div>" + "<h1>" + "pizza " + "</h1>" +
          "<img src='https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2.jpg' >" + "</div>")
      }



    }
  }




  if (age <= 18) {


    var food = prompt("what's your favorite Food (Happy meal ,small burger ) ? ")


    while (food != "Happy meal" && food != "small burger") {
      food = prompt("you entered wrong chooses please try agin")
    }
    var counter = prompt("How many items do you want ? " + food)
    console.log("the number of iteams = " + counter);




    if (food == "Happy meal") {


      for (var x = 0; x < counter; x++) {


        document.write("<div>" + "<h1>" + "Happy meal " + "</h1>" +
          "<img src='https://image.cnbcfm.com/api/v1/image/105032989-GettyImages-139040294.jpg?v=1607105397&w=740&h=416' >" + "</div>")

      }

    }


    if (food == "small burger") {



      for (var x = 0; x < counter; x++) {

        document.write("<div>" + "<h1>" + "small burger " + "</h1>" +
          "<img src='https://www.mashed.com/img/gallery/why-mcdonalds-burgers-are-so-delicious/intro-1595863311.jpg' >" + "</div>")

      }
    }


  }
}
favfood();

var ratemypage = prompt('How many rate my website');

function rate(num) {


  for (var x = 0; x < num; x++) {
    document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeOrxt0cJ3auly49feaLdWK__rPGkclTQTA&usqp=CAU' >")
  }


  //return ratemypage ;
}





alert("Thank you for visiting my website")


// var styles = `
//     h1 { 
//         font-size:100px;
//     }

// `

// var styleSheet = document.createElement("style")
// styleSheet.type = "text/css"
// styleSheet.innerText = styles
// document.head.appendChild(styleSheet)


