import styled from "@emotion/styled";

const Result = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  margin-top: 30px;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = resultado;
  return (
    <Result>
      <div>
        <Precio>
          El precio es de:<span> {PRICE}</span>
        </Precio>
        <Texto>
          El precio más alto del día fue de:<span> {HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio más bajo del día fue de:<span> {LOWDAY}</span>
        </Texto>
        <Texto>
          Variación de las últimas 24 horas:<span> {CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización:<span> {LASTUPDATE}</span>
        </Texto>
      </div>
    </Result>
  );
};

export default Resultado;
