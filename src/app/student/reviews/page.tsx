import React from 'react';

const ReviewsPage = ({ params }: { params: { courseId: string } }) => {
  return (
    <div>
      <h1>Write a Review for Course {params.courseId}</h1>
      {/* Review form goes here */}
    </div>
  );
};

export default ReviewsPage;
