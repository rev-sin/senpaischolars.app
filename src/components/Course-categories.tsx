'use client';

import {
  BarChart,
  Brain,
  Code,
  Globe,
  Lock,
  Palette,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'software',
    title: 'Software Engineering',
    description: 'Full-stack, DevOps & cloud computing',
    courses: '120+ courses',
    icon: Code,
    color: 'text-blue-600',
  },
  {
    id: 'design',
    title: 'Product Design',
    description: 'UI/UX, CAD & simulation design',
    courses: '80+ courses',
    icon: Palette,
    color: 'text-purple-600',
  },
  {
    id: 'data',
    title: 'Data & AI',
    description: 'Machine learning, analytics & big data',
    courses: '100+ courses',
    icon: Brain,
    color: 'text-indigo-600',
  },
  {
    id: 'electronics',
    title: 'Electronics',
    description: 'Embedded systems, IoT & circuits',
    courses: '70+ courses',
    icon: Wrench,
    color: 'text-red-600',
  },
  {
    id: 'mechanical',
    title: 'Mechanical Engineering',
    description: 'CAD, robotics & simulation',
    courses: '65+ courses',
    icon: BarChart,
    color: 'text-green-600',
  },
  {
    id: 'networking',
    title: 'Networking & Security',
    description: 'Cloud, cybersecurity & protocols',
    courses: '50+ courses',
    icon: Globe,
    color: 'text-teal-600',
  },
];

export default function CourseCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Course Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All courses are DRM-protected. Unlock access to start learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="relative group rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                    <IconComponent className={`w-10 h-10 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {category.description}
                  </p>
                  <p className="text-xs font-medium text-gray-800">
                    {category.courses}
                  </p>
                </div>

                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 flex items-center justify-center text-white">
                  <Lock className="w-5 h-5" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity rounded-2xl">
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground px-4 py-2"
                  >
                    Unlock
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
