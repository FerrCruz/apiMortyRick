$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);

      console.log(data.results[0].name.first);
      document.getElementById("nombre").innerHTML = data.results[0].name.first+data.results[0].name.last;
      
      console.log(data.results[0].picture.large);
      document.getElementById("foto").src = data.results[0].picture.large;
      
      console.log(data.results[0].location.country);
      document.getElementById("pais").innerHTML = data.results[0].location.country;

      console.log(data.results[0].location.city);
      document.getElementById("ciudad").innerHTML = data.results[0].location.city;

      console.log(data.results[0].phone);
      document.getElementById("telefono").innerHTML = data.results[0].phone;

      console.log(data.results[0].dob.age);
      document.getElementById("edad").innerHTML = data.results[0].dob.age;

      console.log(data.results[0].email);
      document.getElementById("email").innerHTML = data.results[0].email;

     }
   });

   

