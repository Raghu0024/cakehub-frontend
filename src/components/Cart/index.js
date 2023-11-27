// Cart.js

import Header from '../Header';
import './index.css';

const Cart = () => (
  <><div className="app-container">
  {/* 2/3 Scrolling Area */}
  <div className="scrolling-area">
  <div className='row bg-light p-2'>
  <div className='col-sm-6 d-flex align-items-center'>
    <p className='m-0'>Delivery to: some Address</p>
  </div>
  <div className='col-sm-6 d-flex align-items-center justify-content-end'>
    <a href='#' className='btn btn-primary text-light'>change</a>
  </div>
</div>

  <div className="row mt-3 p-3"   style={{background:'#ffffff'}}>
        <div className="col-sm-4">
          <img
            src="https://img.freepik.com/free-photo/high-angle-cake-with-flowers-plate_23-2149455735.jpg?size=626&ext=jpg&ga=GA1.1.939676640.1694439069&semt=ais"
            className="card-img-top position-relative hover-zoom"
            alt="blackcurrent"
        
          />
        </div>
        <div className="col-sm-5">
          <h5 className="card-title f-2">Blackcurrent </h5>
          <p style={{ fontSize: '20px' }}>This is the favorite cake of many people</p>
          <strike>₹125</strike>
          <span> ₹100 10% Off 2 offers applied</span>
          <br />
          <p className="padtop">
            <a href="" className="saveforlater bg-primary">
              SAVE FOR LATER
            </a> &nbsp; &nbsp;
            <a href="" className="remove bg-secondary">
              REMOVE
            </a>
          </p>
        </div>
        <div className="col-sm-3">
         <p> Delivery by Nov 7</p>
        </div>
        </div>
        <div className='container-fluid bg-light placeorder p-2 d-flex justify-content-end'>
          <a href='#' className='btn btn-danger text-light p-2' >place order</a>
        </div>
  </div>
{/* 1/3 fixed area */}
<div className="fixed-width-section p-3">
  <h3 className='text-center'> PRICE DETAILS</h3>

  <table className="table">
    <tbody>
      <tr>
        <td>Price (4 items)</td>
        <td>₹1,36,358</td>
      </tr>
      <tr>
        <td>Discount</td>
        <td>₹36,848</td>
      </tr>
      <tr>
        <td>Coupons for you</td>
        <td>₹200</td>
      </tr>
      <tr>
        <td>Delivery Charges</td>
        <td>₹120Free</td>
      </tr>
      <tr>
        <td><strong>Total Amount</strong></td>
        <td>₹99,310</td>
      </tr>
      <tr>
        <td colSpan="2" style={{ color: 'green' }}>
          You will save ₹37,048 on this order
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  </>
)
export default Cart

