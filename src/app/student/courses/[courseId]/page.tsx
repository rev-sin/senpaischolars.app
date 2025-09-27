import React from 'react';

const StudentCourseDetailPage = ({
  params,
}: {
  params: { courseId: string };
}) => {
  // TODO: Fetch course details for the given courseId
  // TODO: Check if the student has purchased this course
  // If purchased, render video links as clickable.
  return <div>Details for Course {params.courseId}</div>;
};

export default StudentCourseDetailPage;
