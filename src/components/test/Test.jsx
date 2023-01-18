import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Test() {
//  const [spacing, setSpacing] = React.useState(2);

  const items = [
    {
      id: 1,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/arrul-lin-sYhUhse5uT8-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 2,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/etty-fidele-l5rez6X2m8k-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 3,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/kenzie-kraft-9QW52RyBLao-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 4,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/nathan-mcdine-U5gkKo9ES2w-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 5,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/phil-monte-4V4t0JcOM5E-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 6,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITStaticTrainingT-Shirt .webp?w=250&h=300&fit=crop",
    },
    {
      id: 7,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITRunDivisionRunningT-Shirt .webp?w=250&h=300&fit=crop",
    },
    {
      id: 1,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/arrul-lin-sYhUhse5uT8-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 2,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/etty-fidele-l5rez6X2m8k-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 3,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/kenzie-kraft-9QW52RyBLao-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 4,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/nathan-mcdine-U5gkKo9ES2w-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 5,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/phil-monte-4V4t0JcOM5E-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 6,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITStaticTrainingT-Shirt .webp?w=250&h=300&fit=crop",
    },
    {
      id: 7,
      brand: "Maximos",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITRunDivisionRunningT-Shirt .webp?w=250&h=300&fit=crop",
    },
  ];

//  const handleChange = (event) => {
//    setSpacing(Number(event.target.value));
//  };

  //   const jsx = `
  // <Grid container spacing={${spacing}}>
  // `;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Grid container justifyContent="center">
          {items.map((item) => (
            <Grid key={item.id} item xs={12} sm={2}>
              <Paper
                sx={{
                  width: 250,
                  height: 400,
                  //   backgroundColor: "dark" ? "#1A2027" : "#fff",
                }}
              >
                <img src={item.img} alt="" />
                <br />
                {item.brand}
                <br />
                {item.item}
                <br />
                {item.cost}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
