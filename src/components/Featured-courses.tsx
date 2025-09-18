import { Clock, Play, Star, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const featuredCourses = [
  {
    id: 1,
    title: "Complete React Developer Course",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 15420,
    duration: "42 hours",
    price: "$89",
    originalPrice: "$149",
    image: "https://picsum.photos/600/400?random=1",
    level: "Intermediate",
    category: "Development",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Michael Chen",
    rating: 4.8,
    students: 12340,
    duration: "38 hours",
    price: "$79",
    originalPrice: "$129",
    image: "https://picsum.photos/600/400?random=1",
    level: "Beginner",
    category: "Design",
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Dr. Emily Rodriguez",
    rating: 4.9,
    students: 9870,
    duration: "56 hours",
    price: "$99",
    originalPrice: "$179",
    image: "https://picsum.photos/600/400?random=1",
    level: "Advanced",
    category: "Data Science",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    instructor: "James Wilson",
    rating: 4.7,
    students: 8650,
    duration: "28 hours",
    price: "$69",
    originalPrice: "$119",
    image: "https://picsum.photos/600/400?random=1",
    level: "Beginner",
    category: "Marketing",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground">
              Hand-picked courses from our top instructors
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            View All Courses
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                  priority={course.id === 1} // preload first image
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-primary font-medium">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-semibold text-card-foreground mt-1 line-clamp-2">
                    {course.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  by {course.instructor}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">
                      {course.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <Button size="sm" variant="outline">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">View All Courses</Button>
        </div>
      </div>
    </section>
  );
}
