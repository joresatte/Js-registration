/**
 * Genera un valor booleano dependiendo del valor random
 * @return {Boolean} true/false
 */
export const randomBoolean = () => {
	return Math.floor(Math.random() * 10) >= 5;
};
