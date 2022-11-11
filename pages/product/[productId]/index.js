import React from "react";
import { useRouter } from "next/router";
const ProductScreen = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Here is the product details about {productId}</div>;
};

export default ProductScreen;
