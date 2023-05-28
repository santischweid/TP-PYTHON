var name = document.getElementById('name').value.trim();
var email = document.getElementById('email').value.trim();
var lastname = document.getElementById('message').value.trim();
var consulta = document.getElementById('message').value.trim();
var motivo = document.getElementById('message').value.trim();

// Validamos que los campos no estén vacíos
if (name === '') {
  document.getElementById('name-error').textContent = 'Ingrese su nombre';
  return false;
}

if (email === '') {
  document.getElementById('email-error').textContent = 'Ingrese su correo electrónico';
  return false;
}
if (lastname === '') {
    document.getElementById('lastname-error').textContent = 'Ingrese su correo electrónico';
    return false;
  }
  if (motivo === '') {
    document.getElementById('motivo-error').textContent = 'Ingrese su correo electrónico';
    return false;
  }
  if (consulta === '') {
    document.getElementById('consulta-error').textContent = 'Ingrese su correo electrónico';
    return false;
  }


// Validamos el formato del correo electrónico
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (!email.match(emailRegex)) {
  document.getElementById('email-error').textContent = 'Ingrese un correo electrónico válido';
  return false;
}

// Si todos los campos son válidos, se envía el formulario
alert('Formulario enviado con éxito');
return true;