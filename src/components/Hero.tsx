"use client";

import { ArrowRight, Award, Lock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] py-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight text-balance">
              <span className="text-primary">Senpai</span>Scholars
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg text-pretty">
              Learn and share securely. Our DRM platform ensures only authorized
              learners access your premium content.
            </p>
          </div>

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

          <div className="pt-4">
            <Button
              size="lg"
              className="px-10 py-4 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl"
            >
              <ArrowRight className="mr-3 w-5 h-5 rotate-90" />
              Explore Platform
            </Button>
          </div>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#fffdf8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:scale-105">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Secure Content
              </h3>
              <p className="text-sm text-gray-700">
                All courses and materials are DRM-protected to prevent
                unauthorized access.
              </p>
            </div>

            <div className="bg-[#fffdf8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:scale-105">
              <Lock className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Controlled Sharing
              </h3>
              <p className="text-sm text-gray-700">
                Share content securely with specific users while keeping
                intellectual property safe.
              </p>
            </div>

            <div className="bg-[#fffdf8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:scale-105">
              <Award className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Access Management
              </h3>
              <p className="text-sm text-gray-700">
                Control who can view or download your courses, ensuring only
                authorized learners gain access.
              </p>
            </div>

            <div className="bg-[#fffdf8] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:scale-105">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Analytics & Insights
              </h3>
              <p className="text-sm text-gray-700">
                Track content usage and engagement securely to make data-driven
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
