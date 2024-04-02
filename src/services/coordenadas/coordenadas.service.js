import { body, validationResult } from "express-validator";
import moment from 'moment'

moment.locale('es')

export const getCoordenadas = async (request, res) => {
  const { usuario } = request.body;

};


export const addCoordenadas = async (request, res) => {

};
