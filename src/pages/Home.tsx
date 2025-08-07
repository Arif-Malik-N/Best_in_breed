import React from "react";

function Home() {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gradient-primary mb-8 text-center">
          Welcome to Best In Breed
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-hover">
            <h2 className="text-xl font-semibold text-primary-800 mb-4">
              Feature 1
            </h2>
            <p className="text-neutral-600">
              This is a beautiful card with hover effects using our custom
              Tailwind classes.
            </p>
            <button className="btn-primary mt-4">Learn More</button>
          </div>

          <div className="card-hover">
            <h2 className="text-xl font-semibold text-primary-800 mb-4">
              Feature 2
            </h2>
            <p className="text-neutral-600">
              Another card showcasing our custom design system.
            </p>
            <button className="btn-secondary mt-4">Get Started</button>
          </div>

          <div className="card-hover">
            <h2 className="text-xl font-semibold text-primary-800 mb-4">
              Feature 3
            </h2>
            <p className="text-neutral-600">
              The third card demonstrating our custom colors and components.
            </p>
            <button className="btn-success mt-4">Explore</button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <span className="badge-primary mr-2">Primary</span>
          <span className="badge-success mr-2">Success</span>
          <span className="badge-warning mr-2">Warning</span>
          <span className="badge-error">Error</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
