
import axios from "axios";

const BASE_URL = 'http://localhost:8080/api';

export const getAllTransferencia = async () => {
  try {
    const response = await fetch(`${BASE_URL}/transferencia`);
    const data = await response.json();
    return data;
  } catch (error) {
    // Aqui você pode tratar erros de acordo com a sua necessidade
    console.error('Erro ao consultar as transferencias', error);
    throw error;
  }
}

export const getTransferenciaPorDia = async (dataInicio, dataFim) => {
  try{
    const response = await axios.get(`${BASE_URL}/transferencia/filtro-por-dia?dataInicio=${dataInicio}&dataFim=${dataFim}`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Erro ao efetuar a consulta por dia:', error);
    throw error;
  }
}


export async function findByNomeOperadorTransacao(nomeOperadorTransacao) {
  try {
    const response = await fetch(`${BASE_URL}/api/transferencia/nome-operador?nomeOperadorTransacao=${nomeOperadorTransacao}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar as transferências por nome do operador');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Erro na requisição: ' + error.message);
  }
}