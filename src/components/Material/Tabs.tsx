import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Products } from "../../types";
import { ProductsItems } from "./ProductsItems";
import { Basket } from "./Basket";

export const BasicTabs = () => {
  const [value, setValue] = useState("smartphones");
  const [products, setProducts] = useState<Products[]>([]);
  const [basketProducts, setBasketProducts] = useState<any>([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  const categories = Array.from(new Set(products.map((m) => m.category)));

  const handleChange = (category: string) => {
    setValue(category);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minWidth: "100%",
      }}>
      <Box sx={{ borderColor: "divider"}}>
        <Tabs
          value={value}
          sx={{ borderRight: 1, borderColor: "divider" }}
          orientation="vertical"
          variant="scrollable">
          {categories.map((category) => (
            <Tab
              style={
                category === value
                  ? { fontWeight: "800", backgroundColor: "lightgray" }
                  : {}
              }
              label={category}
              key={category}
              onClick={() => handleChange(category)}></Tab>
          ))}
        </Tabs>
        <Basket basketProducts={basketProducts}  setBasketProducts={setBasketProducts}/>
      </Box>
      <ProductsItems products={products} value={value} setBasket={setBasketProducts} basketProducts={basketProducts}/>
    </Box>
  );
};
