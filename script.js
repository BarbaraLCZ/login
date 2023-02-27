function validateForm() {
   let name=document.getElementById("name").value;
   let password=document.getElementById("password").value;
      if ( name == "barby" && password == "172") {
        alert("usuario y contraseña validos");
        window.open('valentines.html');
      } else  {
        alert("intenta de nuevo");
      }
};