import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GIfExpertApp = () =>{

  const [categories, setCategories] = useState([])

  const onNewCategory = (newCategory) =>{
    
    if(categories.includes(newCategory)) return;
    
    setCategories([newCategory, ...categories])
  }

  
  return(
    <div className="container">
    <h1>GifExpertApp</h1>

    <AddCategory onNewCategory={onNewCategory}/>

      {categories.map(category =>(
          <GifGrid key={category} category={category}/>
         ))
      }

    </div>
  )

}


