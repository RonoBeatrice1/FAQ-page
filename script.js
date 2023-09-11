var faq = document.getElementsByClassName("faq-page");

var i = 0;
for (let i = 0; i < faq.length; i++) {
  // This for loop iterates through all the elements with the "faq-page" class.
  faq[i].addEventListener("click", function () {
    //This line adds a click event listener to each FAQ element in the loop
    this.classList.toggle("toggle"); //f the element has the "toggle" class, it will be removed; if it doesn't have the "toggle" class, it will be added. This is typically used for changing the appearance or style of the FAQ when it's clicked to indicate that it's open or closed.

    var body = this.nextElementSibling; //This line selects the next sibling of the clicked FAQ element, which is assumed to be the content (the answer) associated with the FAQ question. It stores this element in the body variable.
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}
