import CourseCategories from '@/components/Course-categories';
import FeaturedCourses from '@/components/Featured-courses';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <CourseCategories />
      <FeaturedCourses />
      <Footer />
    </main>
  );
}
