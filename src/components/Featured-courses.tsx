'use client';

import { Lock, Users } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const featuredCourses = [
  {
    id: 1,
    title: 'Graph Theory & Algorithms',
    instructor: 'Prof. Rahul Sharma',
    rating: 4.9,
    students: 12450,
    duration: '30 hours',
    image: 'https://picsum.photos/600/400?random=10',
    level: 'Intermediate',
  },
  {
    id: 2,
    title: 'Operating Systems Fundamentals',
    instructor: 'Dr. Priya Verma',
    rating: 4.8,
    students: 10820,
    duration: '42 hours',
    image: 'https://picsum.photos/600/400?random=11',
    level: 'Beginner',
  },
  {
    id: 3,
    title: 'Embedded Systems Design',
    instructor: 'Dr. Ankit Gupta',
    rating: 4.9,
    students: 9520,
    duration: '50 hours',
    image: 'https://picsum.photos/600/400?random=12',
    level: 'Advanced',
  },
  {
    id: 4,
    title: 'Computer Networks & Security',
    instructor: 'Prof. Meera Iyer',
    rating: 4.7,
    students: 8700,
    duration: '38 hours',
    image: 'https://picsum.photos/600/400?random=13',
    level: 'Intermediate',
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DRM-Protected Engineering Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              All courses are DRM-enabled to provide secure access, controlled
              sharing, and detailed analytics for learners.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex bg-transparent"
          >
            Explore All Courses
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="relative group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative w-full h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         25vw"
                  priority={course.id === 1}
                />

                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2 text-white">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity rounded-xl">
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground px-4 py-2"
                  >
                    Unlock Course
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  by {course.instructor} • {course.duration}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Access Course
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">Explore All Courses</Button>
        </div>
      </div>
    </section>
  );
}
