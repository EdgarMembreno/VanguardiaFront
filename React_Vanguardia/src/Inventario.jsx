// src/Inventario.jsx
import React from 'react';
import './Inventario.css';

const Inventario = () => {
  const items = [
    { id: 1, name: 'Producto A', quantity: 10, price: '$100' },
    { id: 2, name: 'Producto B', quantity: 20, price: '$200' },
    { id: 3, name: 'Producto C', quantity: 30, price: '$300' },
  ];

  return (
    <div className="inventario">
      <h2>Inventario</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventario;
