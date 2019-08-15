
export const getBusinesses = data => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses',
    data: {data}
  })
);



export const getBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const createReview = (review)=> (
  $.ajax({
    method: 'POST',
    url: `api/business/${review.business_id}/reviews`,
    data: { review }
  })
);

export const getReviews = businessId => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}/reviews`,
  })
);
