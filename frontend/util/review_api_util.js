
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

export const getReviewsBusiness = businessId =>
  $.ajax({
    method: "GET",
    url: `api/businesses/${businessId}/reviews`
  });

export const postReview = (review) => (
  $.ajax({
    method: 'POST',
    url: `api/businesses/${review.business_id}/reviews`,
    data: { review }
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  })
);

