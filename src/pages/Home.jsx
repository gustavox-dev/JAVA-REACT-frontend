import { useEffect, useState } from "react";
import { TableTransactions } from "../components/TableTransactions";
import { BoxOfInputs, Container, InputDate, InputText, LabelAndInput, LabelOfInput } from "./styles";
import { getAllTransferencia } from "../services/TransferenciaService";



export function Home() {
  const [dataInicio, setDataInicio] = useState();
  const [dataFim, setDataFim] = useState();
  const [nomeOperadorTransacao, setNomeOperadorTransacao] = useState("");
  const [transferencias, setTransferencias] = useState([]);
  const [dataRows, setDataRows] = useState([]);


  const handleSearch = async () => {
    try {
      if (nomeOperador) {
        await findByNomeOperadorTransacao(nomeOperadorTransacao);
      } else if (dataInicio && dataFim) {
        const result = await findByDataCriacaoBetween(dataInicio, dataFim);
        setTransferencias(result);
      } else {
        const result = await findAll();
        setTransferencias(result);
      }
    } catch (error) {
      console.error('Erro ao buscar as transferências:', error.message);
    }
  };
  

  async function getAllTransferencias() {
    const allTransf = await getAllTransferencia();
    setTransferencias(allTransf);
  }

  async function findByNomeOperadorTransacao() {
    const allTransf = await findByNomeOperadorTransacao(nomeOperadorTransacao);
    setTransferencias(allTransf);
  }

  useEffect(() => {
    getAllTransferencias()
  }, []);

  return (
    <>
      <Container>
        <BoxOfInputs>
          <LabelAndInput>
            <LabelOfInput>Data de Inicio</LabelOfInput>
            <InputDate type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
          </LabelAndInput>
          <LabelAndInput>
            <LabelOfInput>Data de Fim</LabelOfInput>
            <InputDate type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
          </LabelAndInput>
          <LabelAndInput>
            <LabelOfInput>Operador</LabelOfInput>
            <InputText type="text" value={nomeOperadorTransacao} onChange={(e) => setNomeOperadorTransacao(e.target.value)} />
          </LabelAndInput>
        </BoxOfInputs>
        <button onClick={handleSearch}>Enviar</button>
        <TableTransactions data={transferencias} />
      </Container>
    </>
  )
}
