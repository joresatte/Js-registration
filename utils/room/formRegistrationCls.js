/**
 * @class
 * @typedef {(firstName|string), (lastName|string), (age|number)}
 * @param {firstName} firstName - user firstname
 * @param {lastName} lastName - user lastname
 * @param {age} age - user age
 */

class Registration {
  firstName = "";
  lastName = "";
  age = "";

  static errorFirstName = "El nombre debe tener al menos 3 caracteres";
  static errorLastName = "El apellido debe tener al menos 3 caracteres";
  static errorAge = "La edad debe ser un número mayor a 17";

  /**
   * @Object
   * @function _valid - return true or false
   * @typedef {(element | number | string)} element
   * @param {element} element
   * @returns {Boolean}
   */
  validation = {
    _valid(element) {
      const result =
        typeof element === "string"
          ? element.length > 3
          : typeof element === "number" && /^[0-9]+$/.test(element) && element > 17;
      console.log(result);
      return result;
    },
  };
}

export { Registration };
