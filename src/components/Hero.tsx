"use client";

import { ArrowRight, Award, BookOpen, Play, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] py-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              <span className="text-primary">Senpai</span>Scholars
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty">
              Master new skills with expert-led courses. Join thousands
              advancing their careers through immersive, practical education
              designed for real-world success.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
            >
              Sign Up Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl bg-transparent"
            >
              Login
            </Button>
          </div>

          {/* Explore courses CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              className="px-10 py-4 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl"
            >
              <Play className="mr-3 w-5 h-5" />
              Explore Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">Learners</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                1,200+
              </div>
              <div className="text-sm text-muted-foreground">Courses</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                95%
              </div>
              <div className="text-sm text-muted-foreground">Success</div>
            </div>
          </div>
        </div>

        {/* Right side - Features grid */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">
                Expert Courses
              </h3>
              <p className="text-sm text-muted-foreground">
                Industry-leading curriculum designed by professionals
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Users className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">
                Community
              </h3>
              <p className="text-sm text-muted-foreground">
                Connect with peers and mentors worldwide
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Award className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">
                Certificates
              </h3>
              <p className="text-sm text-muted-foreground">
                Earn recognized credentials for your achievements
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">
                AI-Powered
              </h3>
              <p className="text-sm text-muted-foreground">
                Personalized learning paths with smart recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
