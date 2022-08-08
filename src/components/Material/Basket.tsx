import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Basket = ({ basketProducts, setBasketProducts }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        style={{
          textTransform: "none",
          marginTop: "10px",
          padding: "20px 30px",
        }}
        onClick={handleOpen}>
        <Badge badgeContent={basketProducts.length} color="primary">
          Корзина{" "}
          <LocalGroceryStoreIcon
            style={{
              marginLeft: "10px",
            }}
          />
        </Badge>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title"> Товары в корзине:</h2>
          {basketProducts &&
            basketProducts.map((product) => <div> {product.title}</div>)}
          <Button variant="contained" color="secondary" onClick={handleClose}>

            Оплатить
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
