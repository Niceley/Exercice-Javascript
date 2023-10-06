function getTotalPrice(products) {
    const total = products.reduce((acc, product) => {
      return acc + product.quantity * product.price;
    }, 0);
    return total;
}