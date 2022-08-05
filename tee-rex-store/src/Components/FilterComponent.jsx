import React, { useState } from 'react'

export const FilterComponent = () => {
  const [category, setCategory] = useState([]);
  return (
    <>
      <form>
        <h4>Gender</h4>
        <input type="checkbox" name="Black" />
        <label>Men</label>
        <br></br>
        <input type="checkbox" name="Blue"/>
        <label>Women</label>
        
        
        <h4>Colour</h4>
        <input type="checkbox" name="Black" defaultChecked={category.includes("Black")} />
        <label>Black</label>
        <br></br>
        <input type="checkbox" name="Blue" defaultChecked={category.includes("Blue")}/>
        <label>Blue</label>
        <br></br>
        <input type="checkbox" name="Pink" defaultChecked={category.includes("Pink")}/>
        <label>Pink</label>
        <br></br>
        <input type="checkbox" name="Green" defaultChecked={category.includes("Green")}/>
        <label>Green</label>
        <br></br>
        <input type="checkbox" name="Purple" defaultChecked={category.includes("Purple")}/>
        <label>Purple</label>
        <br></br>
        <input type="checkbox" name="Red" defaultChecked={category.includes("Red")}/>
        <label>Red</label>
        <br></br>
        <input type="checkbox" name="Gray" defaultChecked={category.includes("Gray")}/>
        <label>Gray</label>
        <br></br>
        <input type="checkbox" name="White" defaultChecked={category.includes("White")}/>
        <label>White</label>
        <br></br>
        <input type="checkbox" name="Yellow" defaultChecked={category.includes("Yellow")}/>
        <label>Yellow</label>

        <h4>Price range</h4>
        <input type="checkbox"/>
        <label>200-300</label>
        <br></br>
        <input type="checkbox" />
        <label>300-500</label>

        <h4>Type</h4>
        <input type="checkbox"/>
        <label>Polo</label>
        <br></br>
        <input type="checkbox" />
        <label>Hoodie</label>
        <br></br>
        <input type="checkbox"/>
        <label>Basic</label>        
      </form>
    </>
  )
}
