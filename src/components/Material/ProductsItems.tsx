import { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { PropsProductsItems, TabPanelProps } from "../../types";

export const ProductsItems: FC<PropsProductsItems> = ({
  products,
  value,
  setBasket,
  basketProducts,
}) => {
  const addToBasket = (product) => {
    setBasket([...basketProducts, product]);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minWidth: "100%",
      }}>
      <div
        style={{
          textAlign: "left",
        }}>
        {products.map((product) => (
          <TabPanel 
          value={value} 
          index={product.category} 
          key={product.id}
          >
            <Typography>
              <b> {product.title} </b>
            </Typography>
            <Typography>{product.description}</Typography>
            <ImageList
              sx={{ width: 400, height: 200, marginTop: "5px" }}
              cols={2}
              rowHeight={200}>
              {product.images.map((img) => (
                <ImageListItem key={img}>
                  <img src={img} alt="lol" loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
            <Typography
              style={{
                color: "red",
                fontSize: "0.8em",
                marginTop: "5px",
              }}>
              {" "}
              Осталось на складе: {product.stock}
            </Typography>
            <Typography> Стоимость: {product.price} $ </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              style={{ textTransform: "none", marginTop: "10px" }}
              endIcon={<AddShoppingCartIcon />}
              onClick={() => addToBasket(product)}>
              В корзину
            </Button>
          </TabPanel>
        ))}
      </div>
    </Box>
  );
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ borderBottom: "1px solid gray" }}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
