import React from 'react';

const RefuelingHistory = ({ refuelings }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>register</th>
          <th>refuel</th>
          <th>price</th>
          <th>distance</th>
        </tr>
      </thead>
      <tbody>
        {refuelings.map((refueling) => (
          <tr key={refueling.id}>
          <td>{refueling.register}</td>
          <td>{refueling.refuel}</td>
          <td>{refueling.price}</td>
          <td>{refueling.distance}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
  };
