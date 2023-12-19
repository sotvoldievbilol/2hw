

const Table = ({ data }) => {
  return (
      <div>
          {
              JSON.stringify(data) == '{}'
                  ? ''
                  : <table>
                      <tr>
                          <td>city</td>
                          <td>{data.name}</td>
                      </tr>

                      <tr>
                          <td>temp</td>
                          <td>{Math.round(data.main.temp - 273.15)+"°C"}</td>
                      </tr>

                      <tr>
                          <td>descr</td>
                          <td>{data.weather[0].description}</td>
                      </tr>
                      <tr>
                          <td>country</td>
                          <td>{data.sys.country}</td>
                      </tr>
                  </table>
          }
      </div>
  );
}

export default Table;
