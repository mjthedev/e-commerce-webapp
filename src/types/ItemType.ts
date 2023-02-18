interface comment_arr {
    userid: Number,
    username: String,
    date: String,
    comment: String,
    stars: Number
    }

interface Item {
    id: number,
    sku: number,
    brand: String,
    brandDetails: String,
    details: String,
    description: String,
    item: String,
    img: string[],
    price: String,
    size: String,
    color: String,
    packaging: String,
    fabric: String,
    fabricDescriptio: String,
    washinstructions: String,
    origin: String,
    fit: String,
    comments: comment_arr[],
}

export {
    Item
}