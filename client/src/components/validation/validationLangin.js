
export const validateName = (value) => {
    // Agrega tu lógica de validación aquí
    if (value === "") {
      return "The field is required";
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      return "The name can not contain numbers or special characters";
    } else if (value.length > 25) {
      return "Name too long";
    } else {
      return ""; // Sin errores
    }
  };
  