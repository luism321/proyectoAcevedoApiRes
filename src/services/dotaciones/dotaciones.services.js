import { body, validationResult } from "express-validator";

export const addDotaciones = async (request, res) => {
  const { usuario, shoes, pants, shirt } = request.body;
  var toSend = {
    dotacion: {
      zapato: shoes,
      pantalon: pants,
      camisa: shirt,
    },
  };

  const errors = validationResult(request);


};
