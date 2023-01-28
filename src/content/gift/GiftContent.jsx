import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

<<<<<<< HEAD:src/components/test/Test.jsx
export default function Test() {
//  const [spacing, setSpacing] = React.useState(2);

=======
export default function GiftContent() {
>>>>>>> mui:src/content/gift/GiftContent.jsx
  const items = [
    {
      id: 1,
      brand: "Maximos",
      details: "Primo Colorblock Modal & Cotton Sweater Polo",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/arrul-lin-sYhUhse5uT8-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 2,
      brand: "BOSS",
      details: "Parlay Tipped Pocket Polo",
      item: "Men's Shirt",
      cost: "94.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/etty-fidele-l5rez6X2m8k-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 3,
      brand: "Ted Baker London",
      details: "Galton Tipped Cotton Blend Polo",
      item: "Men's Shirt",
      cost: "140.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/kenzie-kraft-9QW52RyBLao-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 4,
      brand: "BOSS",
      details: "Men's Polston Zip Polo",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/nathan-mcdine-U5gkKo9ES2w-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 5,
      brand: "BOSS",
      details: "Parlay 119 Short Sleeve Polo",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/phil-monte-4V4t0JcOM5E-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 6,
      brand: "Ahluwalia",
      details: "Men's Expression Long Sleeve Zip Polo",
      item: "Men's Shirt",
      cost: "675.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITStaticTrainingT-Shirt .webp?w=250&h=300&fit=crop",
    },
    {
      id: 7,
      brand: "BOSS",
      details: "Men's Paddy 8 Regular Fit Cotton Polo",
      item: "Men's Shirt",
      cost: "118.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITRunDivisionRunningT-Shirt .webp?w=250&h=300&fit=crop",
    },
    {
      id: 8,
      brand: "Nordstrom",
      details: "Tech-Smart Piqué Polo (Regular, Big & Tall)",
      item: "Men's Shirt",
      cost: "94.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/arrul-lin-sYhUhse5uT8-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 9,
      brand: "Rhone",
      details: "Delta Short Sleeve Piqué Performance Polo",
      item: "Men's Shirt",
      cost: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/etty-fidele-l5rez6X2m8k-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 10,
      brand: "Reiss",
      details: "Charles Colorblack Wool Blend Zip Sweater Knit Polo",
      item: "Men's Shirt",
      cost: "150.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/kenzie-kraft-9QW52RyBLao-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 11,
      brand: "NN07",
      details: "Men's Ryan Cotton & Linen Polo",
      item: "Men's Shirt",
      cost: "145.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/nathan-mcdine-U5gkKo9ES2w-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 12,
      brand: "NN07",
      details: "Joey 3512 Long Sleeve Polo",
      item: "Men's Shirt",
      cost: "165.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/phil-monte-4V4t0JcOM5E-unsplash.jpg?w=250&h=300&fit=crop",
    },
    {
      id: 13,
      brand: "Reiss",
      details: "Maxwell Quarter Zip Merino Wool Polo",
      item: "Men's Shirt",
      cost: "145.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITStaticTrainingT-Shirt .webp?w=250&h=300&fit=crop",
    },
    {
      id: 14,
      brand: "BOSS",
      details: "Hank Slim Fit Cotton Polo",
      item: "Men's Shirt",
      cost: "168.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITRunDivisionRunningT-Shirt .webp?w=250&h=300&fit=crop",
    },
  ];

<<<<<<< HEAD:src/components/test/Test.jsx
//  const handleChange = (event) => {
//    setSpacing(Number(event.target.value));
//  };
=======
  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };
>>>>>>> mui:src/content/gift/GiftContent.jsx

  //   const jsx = `
  // <Grid container spacing={${spacing}}>
  // `;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: 20,
      }}
    >
      <Grid item>
<<<<<<< HEAD:src/components/test/Test.jsx
        <Grid container justifyContent="center">
=======
        <Grid container justifyContent="center" spacing={2}>
>>>>>>> mui:src/content/gift/GiftContent.jsx
          {items.map((item) => (
            <Grid key={item.id} item xs={12} sm={3}>
              <Paper
                sx={{
                  width: 250,
                  height: 500,
                  //   backgroundColor: "dark" ? "#1A2027" : "#fff",
                }}
              >
                <img src={item.img} alt="" />
                <br />
                <br />
                <h3>{item.brand} </h3>
                <h4>{item.details}</h4>
                <h4>${item.cost}</h4>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
