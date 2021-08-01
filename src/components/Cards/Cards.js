import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>OUR SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='MARKETING'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='SOCIAL MEDIA'
              path='/products'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='RESPONSIVE DESIGN'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='WEB & GRAPHICS DESIGN'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='CREATIVE IDEAS'
              path='/products'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='CUSTOMER SUPPORT'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='GREAT SUPPORT'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='CREATIVE DESIGNS'
              path='/products'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='ADEDICATED TEAM'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;