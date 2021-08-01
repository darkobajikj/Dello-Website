import React from 'react';
import  Button  from "../Button/Button";
import './ProductsElements.css';
import { FaAffiliatetheme,FaGripfire,FaModx } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaAffiliatetheme />
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>10 GB Storage Space</li>
                  <li>Unlimited Users</li>
                  <li>Enhanced Security</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaGripfire />
                </div>
                <h3>Gold</h3>
                <h4>$24.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>20 GB Storage Space</li>
                  <li>Unlimited Users</li>
                  <li>Enhanced Security</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaModx />
                </div>
                <h3>Diamond</h3>
                <h4>$49.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>30 GB Storage Space</li>
                  <li>Unlimited Users</li>
                  <li>Enhanced Security</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Products;