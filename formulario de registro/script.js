document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario
    
    // Obtener los valores de los campos del formulario
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var faculty = document.getElementById("faculty").value;
    var idNumber = document.getElementById("idNumber").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var birthdate = document.getElementById("birthdate").value;
    
    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
        document.getElementById("passwordError").textContent = "Las contraseñas no coinciden";
        return;
    }

    // Validar los requisitos de la contraseña (al menos 8 caracteres con al menos una letra mayúscula)
    if (!/(?=.*[A-Z]).{8,}/.test(password)) {
        document.getElementById("passwordError").textContent = "La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula";
        return;
    }
    
    // Limpiar mensajes de error anteriores
    document.getElementById("passwordError").textContent = "";
    
    // Validar fecha de nacimiento (asumiendo edad mínima de 18 años)
    var today = new Date();
    var minAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    var selectedDate = new Date(birthdate);
    if (selectedDate > minAgeDate) {
        document.getElementById("birthdateError").textContent = "Debes tener al menos 18 años para registrarte";
        return;
    }
    
    // Limpiar mensajes de error anteriores
    document.getElementById("birthdateError").textContent = "";
    
    // Aquí puedes agregar código para enviar los datos del usuario a tu backend para el registro
    // Por ejemplo, puedes usar fetch() o XMLHttpRequest para enviar una solicitud POST a tu servidor
    
    // Después de un registro exitoso, puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
    alert("¡Registro exitoso!");
});
