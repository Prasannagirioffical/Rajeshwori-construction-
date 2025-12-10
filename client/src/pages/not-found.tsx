import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <div className="mb-6 bg-primary/10 p-6 rounded-full">
        <AlertTriangle className="h-16 w-16 text-primary" />
      </div>
      <h1 className="text-6xl font-bold font-heading text-primary mb-2">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Under Construction</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We're sorry, but the page you are looking for doesn't exist or has been moved. 
        Let's get you back to safety.
      </p>
      <Link href="/">
        <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2">
          <Home className="h-4 w-4" /> Return Home
        </Button>
      </Link>
    </div>
  );
}
