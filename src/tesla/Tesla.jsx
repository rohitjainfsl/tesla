import React from 'react'
import Header from './Header'
import Section from './Section'

function Tesla() {
  return (
    <>
      <Header />
      <Section
        name='Model 3'
        tagline='Order Online for touchless delivery'
        leftBtn='Custom Order'
        rightBtn='Existing Inventory'
      />
      <Section
        name='Model S'
        tagline='Order Online for touchless delivery'
        leftBtn='Custom Order'
        rightBtn='Existing Inventory'
      />
      <Section
        name='Model X'
        tagline='Order Online for touchless delivery'
        leftBtn='Custom Order'
        rightBtn='Existing Inventory'
      />
      <Section
        name = 'Model Y'
        tagline = 'Order Online for touchless delivery'
        leftBtn = 'Custom Order'  
        rightBtn = 'Existing Inventory' 
      />
      <Section
        name = 'Solar Panels'
        tagline = 'Lower Cost Solar Panels in India'
        leftBtn = 'Order Now'  
        rightBtn = 'Learn More' 
      />
      <Section
        name = 'Solar Roof'
        tagline = 'Produce Clean Energy from your roof'
        leftBtn = 'Order Now'  
        rightBtn = 'Learn More' 
      />
      <Section
        name = 'Accessories'
        leftBtn = 'Order Now'  
      />
    </>
  )
}

export default Tesla