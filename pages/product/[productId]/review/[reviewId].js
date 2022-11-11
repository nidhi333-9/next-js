import React from "react";
import { useRouter } from "next/router";
const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      It is for {productId} & review no {reviewId}
    </div>
  );
};

export default Review;
