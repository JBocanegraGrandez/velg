
export const getReviewsUser = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/reviews`
  })
);

export const getReview = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const getReviews = businessId =>
  $.ajax({
    method: "GET",
    url: `api/bussinesses/${businessId}/reviews`
  });

export const postReview = (review) => {
  $.ajax({
    method: 'POST',
    url: `api/businesses/${review.business_id}/reviews`,
    data: { review }
  })
};