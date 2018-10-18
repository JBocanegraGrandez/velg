
export const getReviews = businessId => (
  $.ajax({
    method: 'GET',
    url: `api/bussinesses/${businessId}/reviews`,
  })
);

export const getReview = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);
