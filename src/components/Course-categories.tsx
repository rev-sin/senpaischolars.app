import {
  BarChart,
  Brain,
  Briefcase,
  Camera,
  Code,
  Globe,
  Palette,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "development",
    icon: Code,
    title: "Development",
    description: "Web, mobile, and software development",
    courses: "450+ courses",
    color: "text-blue-600",
  },
  {
    id: "design",
    icon: Palette,
    title: "Design",
    description: "UI/UX, graphic design, and creative arts",
    courses: "320+ courses",
    color: "text-purple-600",
  },
  {
    id: "business",
    icon: BarChart,
    title: "Business",
    description: "Marketing, finance, and entrepreneurship",
    courses: "280+ courses",
    color: "text-green-600",
  },
  {
    id: "photography",
    icon: Camera,
    title: "Photography",
    description: "Digital photography and video editing",
    courses: "150+ courses",
    color: "text-pink-600",
  },
  {
    id: "marketing",
    icon: Briefcase,
    title: "Marketing",
    description: "Digital marketing and social media",
    courses: "200+ courses",
    color: "text-orange-600",
  },
  {
    id: "data-science",
    icon: Brain,
    title: "Data Science",
    description: "Analytics, AI, and machine learning",
    courses: "180+ courses",
    color: "text-indigo-600",
  },
  {
    id: "languages",
    icon: Globe,
    title: "Languages",
    description: "Learn new languages and cultures",
    courses: "120+ courses",
    color: "text-teal-600",
  },
  {
    id: "it-software",
    icon: Wrench,
    title: "IT & Software",
    description: "System administration and DevOps",
    courses: "90+ courses",
    color: "text-red-600",
  },
];

export default function CourseCategories() {
  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Explore Course Categories
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose from our wide range of courses across different domains and
          skill levels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id} // ✅ fixed
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className={`w-8 h-8 ${category.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {category.courses}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="px-8 bg-transparent">
          View All Categories
        </Button>
      </div>
    </div>
  );
}
