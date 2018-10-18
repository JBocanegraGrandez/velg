
export const getBusinesses = data => (
  $.ajax({
    method: 'GET',
    url: 'api/bussinesses',
    data
  })
);
export const getMatchesBusinesses = data => (
  $.ajax({
    method: 'GET',
    url: `api/bussinesses?YOLO=${data}`,
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
    url: `api/business/${review.business_id}/reviews`,// or api/businesses/${reviews.biz.id}/reviews ?
    data: { review }
  })
);
