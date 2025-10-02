'use client';

import { Award, BookOpen, Clock, Globe, Upload, Users } from 'lucide-react';

const features = [
  {
    id: 'learn-anywhere',
    title: 'Learn Anytime, Anywhere',
    description:
      'Access courses on mobile, tablet, or desktop — whenever you want.',
    icon: Globe,
  },
  {
    id: 'expert-instructors',
    title: 'Expert Instructors',
    description:
      'Learn directly from industry professionals and experienced educators.',
    icon: Users,
  },
  {
    id: 'lifetime-access',
    title: 'Lifetime Access',
    description:
      'Buy once, access your course materials forever with no expiry.',
    icon: Clock,
  },
  {
    id: 'hands-on-projects',
    title: 'Hands-on Projects',
    description:
      'Apply your learning with real-world projects and practical exercises.',
    icon: BookOpen,
  },
  {
    id: 'certificates',
    title: 'Certificates of Completion',
    description:
      'Earn a shareable certificate after successfully finishing your course.',
    icon: Award,
  },
  {
    id: 'portfolio',
    title: 'Build Your Portfolio',
    description:
      'Showcase your completed projects and assignments to employers.',
    icon: Upload,
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`flex flex-col items-start p-10 min-h-[220px]
                  ${idx < 3 ? 'border-b border-gray-200' : ''}
                  ${idx % 3 !== 2 ? 'border-r border-gray-200' : ''}`}
              >
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
