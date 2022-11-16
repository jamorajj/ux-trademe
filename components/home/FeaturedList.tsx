import FeatureCard from "./FeatureCard";

export default function FeatureList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Featured Jobs</h2>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-12">
            <FeatureCard />
            <div className="hidden md:block">
              <FeatureCard />
            </div>
            <div className="hidden lg:block">
              <FeatureCard />
            </div>
            <div className="hidden xl:block">
              <FeatureCard />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
            <a href="#slide2" className="btn btn-circle invisible">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-12">
            <FeatureCard />
            <div className="hidden md:block">
              <FeatureCard />
            </div>
            <div className="hidden lg:block">
              <FeatureCard />
            </div>
            <div className="hidden xl:block">
              <FeatureCard />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle invisible">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
