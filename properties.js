<!DOCTYPE html>
<html>
  <body>
    <h1>Q1 Using 'this' keyword and also making text disappear</h1>

    <p id="demo"></p>
    <button onclick="fun()" id="btn">Click me!</button>

    <script>
      function fun() {
        document.getElementById("demo").style.display = "none";
      }

      const person = {
        firstName: "RAHUL",
        lastName: "KOPPULA",
        id: 5566,
        fullName: function () {
          return this.firstName + " " + this.lastName;
        },
      };

      document.getElementById("demo").innerHTML = person.fullName();
    </script>
  </body>
</html>
