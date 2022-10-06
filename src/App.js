import Header from './Header';
import Section from './Section';
function App(){
  return(
    <>
      <Header />
      {/*CONDITIONAL RENDERING*/}
      <Section 
        name='Model 3'
        para = 'Order Online for Touchless Delivery'
        leftbtn = 'Custom Order'
        rightbtn = 'Existing Inventory'
        background = 'model-3.jpg'
        arrow = {true}
      />
      <Section 
        name='Model Y'
        para = 'Order Online for Touchless Delivery'
        leftbtn = 'Custom Order'
        rightbtn = 'Existing Inventory'
        background = 'model-y.jpg'
      />
      <Section 
        name='Model S'
        para = 'Order Online for Touchless Delivery'
        leftbtn = 'Custom Order'
        rightbtn = 'Existing Inventory'
        background = 'model-s.jpg'
      />
      <Section 
        name='Model X'
        para = 'Order Online for Touchless Delivery'
        leftbtn = 'Custom Order'
        rightbtn = 'Existing Inventory'
        background = 'model-x.jpg'
      />
      <Section 
        name='Solar Panels'
        para = 'Lower Cost Solar Panels in India'
        leftbtn = 'Order Now'
        rightbtn = 'Learn More'
        background = 'solar-panel.jpg'
      />
      <Section 
        name='Solar Roof'
        para = 'Produce Clean Energy from your roof'
        leftbtn = 'Order Now'
        rightbtn = 'Learn More'
        background = 'solar-roof.jpg'
      />
      <Section 
        name='Accessories'
        leftbtn = 'Order Now'
        background = 'accessories.jpg'        
      />
    </>
  )
}
export default App;