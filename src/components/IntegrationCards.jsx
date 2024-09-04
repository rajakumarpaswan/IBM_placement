// import React from 'react'

// import { IconBrandBitbucket, IconBrandGithub } from "@tabler/icons-react"
import { Card,Text,Image } from "@mantine/core";
import { useEffect,useState } from "react"
// import Integration from "./Integration";



function IntegrationCards() {
    const [products, setProducts] = useState([]);
    function fetchingProducts() {
        fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data.products); // Access the products array from the response
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
          console.log(products)
      }
    
      const uniqueCategories = [];

      const filteredProducts = products.filter((product) => {
        if (!uniqueCategories.includes(product.category)) {
          uniqueCategories.push(product.category);
          return true;
        }
        return false;
      });


       // Group products by category
//   const productsByCategory = products.reduce((acc, product) => {
//     const { category } = product;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

useEffect(() => {

fetchingProducts();
  
}, []);



  return (
    <div className="flex  gap-20  overflow-hidden p-3 "> 
        <div className="mt-6">
       {
        filteredProducts.map((product,index)=>{
            return <p key={index}>{product.category}</p>
        })
       }
       </div>
        
       <div className="all-integration-sites flex flex-wrap gap-2 mt-6">
        {
            products.map((product,index)=>{
                return  <>
                
                  <Card className="h-64 w-64" key={index} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section p={"md"} >
                  <Image
                    src={product.images}
                    className="h-28 w-28"
                    alt="Norway"
                  />
                </Card.Section>
          
               
          
                <Text size="sm" c="dimmed">
              {product.title}
                </Text>
          
               
              </Card>
                </>
              
            })
        }
       </div>
    </div>
  )
}

export default IntegrationCards