/**
 *
 * @class
 * @param {code} code - error code
 * @param {message} message - error message
 * @exports ErrorCls
 */

const ErrorCls = class extends Error {
//   static CONDITIONS_NOT_CORRECT= 400;
//   static INVALID_DATA_TYPE= 404;
  constructor(code, message) {
    super(message); 
    this.code = code;
  }

  // getter for cls_Error
  static get exceptionMessage() {
    return cls_Error.apply(this, [this.message]);
  }

  //getter for throwError
  static get errorMessage(){
    return throwError.call(this, this.code, this.message);
  };

};


/**
 * @function cls_Error to handle error and return only error message
 * @param {*} message 
 * @returns {String}
 */
function cls_Error( message){
    return message;
}


/**
 * @function throwError -  to handle error and return error code and error mesaage
 * @param {*} code 
 * @param {*} message 
 * @returns {String}
 */
function throwError(code , message ) {
    return `Error: ${code}, ${message}`;
}
  
export { ErrorCls };
