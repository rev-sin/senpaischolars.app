import React from 'react';

const StudentVideoPage = ({
  params,
}: {
  params: { courseId: string; videoId: string };
}) => {
  // TODO: Fetch video data based on courseId and videoId
  // TODO: Add a check to ensure the student has purchased the course before showing the video.
  return (
    <div>
      <h1>Video Player</h1>
      <p>Course ID: {params.courseId}</p>
      <p>Video ID: {params.videoId}</p>
      {/* Video player component will go here */}
    </div>
  );
};

export default StudentVideoPage;
