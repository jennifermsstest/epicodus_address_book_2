

function Result(movie, day, age) {

  this.movie = movie;
  this.day = day;
  this.age = age;

}

Result.prototype.newNumber = function(movie, day, age) {
return this.movie + this.day + this.age
}




$(document).ready(function() {
  $("form#tickets").submit(function(event) {

    // debugger;
    var movie = parseInt($("input:radio[name=movie]:checked").val());
    var day = parseInt($("input:radio[name=day]:checked").val());
    var age = parseInt($("input:radio[name=age]:checked").val());



    //var sum = movie + day + age


   var newAnswer =  new Result (movie, day, age);
   var sum = newAnswer.newNumber(movie, day, age);
   if (sum <= 3) {
     $("#answer").text("5.00");
   } else if (sum <= 7) {
      $("#answer").text("$10.00");
       } else  {
        $("#answer").text("$15.00");
      }



  //$("#answer").text(newAnswer);

    $("#output").show();

    event.preventDefault();
  });
  ($("input:radio[name=movie]:checked").val());
  ($("input:radio[name=day]:checked").val());
  ($("input:radio[name=age]:checked").val());
});
