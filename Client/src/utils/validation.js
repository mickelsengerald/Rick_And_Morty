const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{6,10}$/;

export function validate(inputs) {
  let errors = {}
  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  if (!inputs.email) {
    errors.email = 'El correo electrónico no puede estar vacío';
  }
  if (inputs.email.length > 35) {
    errors.email = 'El correo electrónico no puede tener más de 35 caracteres';
  }
  if (!regexPassword.test(inputs.password)) {
    errors.password = 'La contraseña debe tener al menos un número y una longitud entre 6 y 10 caracteres';
  }

  return errors;
}