function AppHead(props) {
  return (
    <div>
     <h1>{props.title}</h1>
     <h3>{props.des}</h3>
    </div>
  );
}
function VehicleHead(props) {
  return (
    <div>
      <h2>{props.type}</h2>
    </div>
  );
}

function VehicleRow(props) {
  return (
    <div>
      <tr>
        <th>Year</th>
        <th>Model</th>
        <th>Price</th>
        <th>Buy</th>
      </tr>
      <tr>
        <td>{props.year}</td>
        <td>{props.model}</td>
        <td>{props.price}</td>
        <td>
          <button type="button">Buy</button>
        </td>
      </tr>
      <br/>
    </div>
  );
}

function VehicleTable() {
  return (
    <div>
      <table id="customers">
        <VehicleHead type="Cars" />
        <VehicleRow year="2018" model="C220" price="120000$" />
        <VehicleRow year="2018" model="SLS" price="120000$" />
        <VehicleRow year="2018" model="Mustang" price="120000$" />
        <VehicleHead type="Trucks" />
        <VehicleRow year="2018" model="C220" price="120000$" />
        <VehicleRow year="2018" model="C220" price="120000$" />
        <VehicleHead type="Convertibles" />
        <VehicleRow year="2018" model="C220" price="120000$" />
        <VehicleRow year="2018" model="C220" price="120000$" />
        <VehicleRow year="2018" model="C220" price="120000$" />
        <VehicleRow year="2018" model="C220" price="120000$" />
        <VehicleRow year="2018" model="C220" price="120000$" />
      </table>
    </div>
  );
}

ReactDOM.render(
    <div>
    <AppHead title ="Buy Vehicles for the future" des="All the vehicles are fully autonomous and are ready for future."/>
    <VehicleTable/>
    </div>, document.getElementById("root"));
