// CHAPTER 43 - 48

// QUESTION 1

function alertBox() {
    alert("Thank you for visiting")
}

// QUESTION 2

function alertImg() {
    alert("Thanks for purchasing a phone from us")
}

// QUESTION 3

function buttonDelete(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row)

}

// QUESTION 4

var phones = document.getElementById("phones")
function iphoneDisplay() {
    console.log("iphoneDisplay()", phones.src)
    phones.src = "./images/oneplus9.jpg"
}

function huwaiweDisplay() {
    console.log("huwaiwe")
    phones.src = "./images/huwaiwep60.jpg"
}

// QUESTION 5

// get elements from the DOM
const decreaseBtn = document.getElementById('decrease-btn');
const counterEl = document.getElementById('counter');
const increaseBtn = document.getElementById('increase-btn');

// initialize counter value
let counterValue = 0;

// add event listeners to buttons
decreaseBtn.addEventListener('click', () => {
    counterValue--;
    counterEl.innerText = counterValue;
});

increaseBtn.addEventListener('click', () => {
    counterValue++;
    counterEl.innerText = counterValue;
});


// CHAPTER 43 - 48

// QUESTION No. 1

function buttonClick(){
    var name = document.getElementById("name")
    var phoneNumber = document.getElementById("phoneNumber")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    console.log(name.value)
    console.log(phoneNumber.value)
    console.log(email.value)
    console.log(password.value)

    if(!name.value || !email.value || !password.value || !phoneNumber.value){
        alert("Please fillout the required fields")
        console.log("Please fillout the required fields")
    }
    else{
        alert("Form Submit")
    }
}
function onBlur(){
    var name = document.getElementById("name")
    var phoneNumber = document.getElementById("phoneNumber")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    console.log(name.value)
    console.log(phoneNumber.value)
    console.log(email.value)
    console.log(password.value)

    name.style.borderColor = "red"
    phoneNumber.style.borderColor = "red"
    email.style.borderColor = "red"
    password.style.borderColor = "red"
}
function onFocus(){
    var name = document.getElementById("name")
    var phoneNumber = document.getElementById("phoneNumber")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    console.log(name.value)
    console.log(phoneNumber.value)
    console.log(email.value)
    console.log(password.value)

    name.style.borderColor = "grey"
    phoneNumber.style.borderColor = "grey"
    email.style.borderColor = "grey"
    password.style.borderColor = "grey"
}

// QUESTION No. 2


 loremText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea minus hic est maxime velit, harum quod porro reprehenderit nostrum error architecto enim itaque dolores a. Officia, odit porro quas temporibus voluptates perferendis deleniti vero aperiam earum consequuntur ipsum cumque optio aspernatur velit quos autem veritatis hic nihil necessitatibus, error molestias. Illo voluptates ipsum omnis, architecto inventore esse numquam quia, animi quibusdam veritatis, eum id dolore sit officiis? Veniam adipisci ex laudantium optio assumenda repudiandae excepturi odio? Nisi quisquam, vitae quaerat ex hic excepturi dolor vel sit minima modi molestiae quos provident ullam rerum illum consequuntur nemo nobis rem corrupti. Praesentium voluptatum fugit illo odio voluptatem, ducimus expedita nobis accusantium consequuntur facere at minima magni hic, ut labore eligendi aliquam? Ducimus eveniet consequatur necessitatibus rerum non quisquam debitis accusantium eligendi et deleniti, facere suscipit vero doloremque soluta provident maxime nesciunt culpa delectus repellat modi repudiandae! Neque amet harum, perspiciatis recusandae sint beatae tenetur temporibus facere molestias natus architecto consequuntur! Neque eos ex incidunt quo quam a suscipit. Quae ipsum excepturi velit ratione praesentium. Perferendis necessitatibus nihil corporis totam, quibusdam rem nesciunt fugit adipisci? Velit perferendis, esse illo omnis ab cumque deserunt debitis eius doloribus id animi! Excepturi, provident veritatis! Magni numquam ipsa facilis, qui consectetur repellat excepturi voluptatibus inventore quos architecto error labore doloribus consequuntur sequi reiciendis iste eligendi saepe recusandae quam voluptate. A aperiam beatae nam ipsum eos nihil facere vitae, unde voluptates vero! Explicabo, corporis quidem voluptas maxime mollitia eius placeat vero nihil, reiciendis nobis nostrum ullam vitae et delectus. Possimus amet dolores maxime eaque tenetur praesentium quasi, optio itaque ducimus labore. Culpa atque suscipit totam doloribus quasi eum non voluptatem a quaerat illo quo veniam sint laudantium reiciendis voluptates dolor, iusto cupiditate odio explicabo? Mollitia in quos, vitae molestiae illum cupiditate non alias maxime nisi soluta ipsam?."

function seeBtn(parameter1)  {
    var para2 = document.getElementById("para2")
    var seeBtn = parameter1
    if(seeBtn.innerHTML == "see more") {
        seeBtn.innerHTML = "see less"
        para2.innerHTML = loremText
    }else{
        seeBtn.innerHTML = "see more"
        para2.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores omnis voluptatum autem voluptas alias exercitationem mollitia velit consequatur, recusandae veritatis quibusdam repudiandae eum nulla sapiente ipsam et in aliquam cumque."
    }
}


// Question No. 3

function buttonDelete(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row)

}

