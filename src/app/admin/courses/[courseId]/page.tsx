import React from 'react';

// Viewership and editing both happen in the same one
const CourseDetailPage = ({ params }: { params: { courseId: string } }) => {
  return <div>Details for Course {params.courseId}</div>;
};

export default CourseDetailPage;
