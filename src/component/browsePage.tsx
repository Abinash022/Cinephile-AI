import Header from "./header";
import MainMovieSection from "./mainMovieSection";
import SecondaryContainer from "./secondaryContainer";

export const BrowsePage = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <MainMovieSection />
      <SecondaryContainer />
    </div>
  );
};
