import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Award, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-6xl w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-black/5 overflow-hidden grid md:grid-cols-2 min-h-[600px]">
          <div className="course-illustration relative flex items-center justify-center p-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-[200px] font-black text-purple-600 select-none">
                  404
                </span>
              </div>
              <div className="w-40 h-40 bg-purple-100 border-2 border-purple-200 rounded-full flex items-center justify-center relative z-10">
                <BookOpen className="w-20 h-20 text-purple-600" />
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-100 border border-blue-200 rounded-2xl rotate-12 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>

                <div className="absolute -bottom-6 -left-8 w-12 h-12 bg-green-100 border border-green-200 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>

                <div className="absolute top-4 -left-12 w-8 h-8 bg-orange-100 border border-orange-200 rounded-lg rotate-45"></div>

                <div className="absolute -bottom-4 right-8 w-6 h-6 bg-pink-100 border border-pink-200 rounded-full"></div>

                <div className="absolute top-12 right-16 w-4 h-4 bg-cyan-100 border border-cyan-200 rounded-sm rotate-12"></div>
              </div>
              <div className="absolute -top-16 left-8 w-3 h-3 bg-purple-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-12 right-4 w-2 h-2 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute top-20 -left-16 w-5 h-5 bg-green-200 rounded-full opacity-40"></div>
            </div>
          </div>

          <div className="p-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Oops! Page not found
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  It looks like the page youre looking for has moved or no
                  longer exists. Return to your dashboard and pick up right
                  where you left off.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-base font-medium rounded-full w-fit"
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  GO TO HOME
                </Link>
              </Button>

              <div>
                <p className="text-sm text-muted-foreground">Error code 404</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
