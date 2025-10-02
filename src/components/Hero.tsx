'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

const courses = [
  {
    id: 1,
    title: 'Natural Language Processing with LSTM Method',
    category: 'AI & ML',
    badge: 'Bestseller',
    image: 'https://picsum.photos/600/400?random=13',
  },
  {
    id: 2,
    title: 'Flutter & Dart - The Complete Guide 2022 Edition',
    category: 'Mobile Dev',
    badge: 'Bestseller',
    image: 'https://picsum.photos/600/400?random=14',
  },
  {
    id: 3,
    title: 'Another Great Course',
    category: 'Web Dev',
    badge: 'Bestseller',
    image: 'https://picsum.photos/600/400?random=15',
  },
];

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start min-h-[55vh]">
          <div className="pt-40 relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-snug">
              Upgrade your skills <br /> for better future
            </h1>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
          <div className="relative w-full h-[350px] lg:h-[500px]">
            <Image
              src="/image.png"
              alt="Learning Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full border-b border-gray-200 mt-6" />
        <div className="mt-6 flex gap-6">
          <div className="w-1/4 border-r border-gray-300 flex flex-col justify-center p-12 bg-gray-50 rounded-xl">
            <div className="text-center lg:text-left space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Master the Trending Skills
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Get ahead with courses that top professionals are taking now.
              </p>
              <Button
                size="lg"
                className="mt-4 px-10 py-6 text-xl font-semibold bg-primary hover:bg-primary/90 text-white rounded-xl"
              >
                Explore Now
              </Button>
            </div>
          </div>
          <div className="w-3/4 flex flex-wrap gap-6 mt-2">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-1 min-w-[220px] bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-600 font-medium uppercase">
                    {course.category}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {course.badge}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {course.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-b border-gray-200 mt-6" />
      </div>
    </section>
  );
}
