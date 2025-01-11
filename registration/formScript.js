/**
 * @description Handle user registration
 * @import
 * @property {regist.firstName} - First name of the user
 * @property {regist.lastName} - Last name of the user
 * @property {regist.age} - Age of the user
 * @typedef {(number | string)} ageAsNumber - Age parsed as a number
 */

import { Registration } from "../utils/room/formRegistrationCls.js";
import { ErrorCls } from "../utils/room/ErrorHandlerCls.js";

const regist = new Registration();
const validator = Object.create(regist.validation);


/**
 * @description - clear error messages
 * @function
 */
function clearErrors() {
    document.getElementById('nombreError').textContent = '';
    document.getElementById('apellidoError').textContent = '';
    document.getElementById('edadError').textContent = '';
    document.getElementById('output').textContent = '';
}

/**
 * @description - show error message
 * @function
 * @param {elementId} elementId 
 * @param {errorCls} errorCls 
 */
function showError(elementId, errorCls) {
    document.getElementById(elementId).textContent = errorCls.exceptionMessage;
}

/**
 * @function
 */
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    regist.firstName = document.getElementById('nombre').value.trim();
    regist.lastName = document.getElementById('apellido').value.trim();
    regist.age = document.getElementById('edad').value.trim();

    let isValid = true;

    /**
     * @memberof showError
     */
    if (!validator._valid(regist.firstName)) {
        showError('nombreError', new ErrorCls(1, Registration.errorFirstName));
        isValid = false;
    }

    if (!validator._valid(regist.lastName)) {
        showError('apellidoError', new ErrorCls(1, Registration.errorLastName));
        isValid = false;
    }

    const ageAsNumber = parseInt(regist.age, 10);
    if (isNaN(ageAsNumber) || !validator._valid(ageAsNumber)) {
        showError('edadError', new ErrorCls(1, Registration.errorAge));
        isValid = false;
    }

    if (isValid) {
        window.location.href = 'index.html';
        // document.getElementById('output').textContent = Nombre: ${regist.firstName}, Apellido: ${regist.lastName}, Edad: ${regist.age};
    }
});
