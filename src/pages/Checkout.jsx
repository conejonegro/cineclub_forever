import { useState, useContext  } from 'react';
import { UserContext } from '../components/UserProvider';
import { Subtitles } from '../utils/subtitles';


export default function MovieCheckout() {
   const { movieToBuyFromStorage, precioCompra } = useContext(UserContext);
  const [total, setTotal] = useState(precioCompra);
  


  return (
    <div className="container mt-5">
      <h1 className="mb-4">Pago de Película</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">Información del Cliente</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Juan" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Pérez" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="juan@ejemplo.com" />
                </div>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Información de Pago</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Número de Tarjeta</label>
                  <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="expiryDate" className="form-label">Fecha de Expiración</label>
                    <input type="text" className="form-control" id="expiryDate" placeholder="MM/AA" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cvv" placeholder="123" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Resumen del Pedido</h5>
            </div>
            <div className="card-body">
              <p><strong>Película:</strong> {movieToBuyFromStorage}</p>
              <p><strong>Formato:</strong> Streaming HD</p>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${precioCompra}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>${total}</strong>
              </div>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary w-100" onClick={() => alert('Procesando pago...')}>
                Realizar Pago
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}