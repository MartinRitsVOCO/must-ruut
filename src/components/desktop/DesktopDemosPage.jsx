import DesktopHeader from "./UI/DesktopHeader"
import DesktopFooter from "./UI/DesktopFooter"
import DemoVideo from "./UI/DemoVideo"
import Separator from "./UI/Separator"

const DesktopDemosPage = () => {
  const demoVideos = [
    {
      videoUrl: "https://www.youtube.com/embed/E4WlUXrJgy4?si=KOlUo4jkk6f1KNN1",
    },
    {
      videoUrl: "https://www.youtube.com/embed/E4WlUXrJgy4?si=KOlUo4jkk6f1KNN1",
    },
    {
      videoUrl: "https://www.youtube.com/embed/E4WlUXrJgy4?si=KOlUo4jkk6f1KNN1",
    },
    {
      videoUrl: "https://www.youtube.com/embed/E4WlUXrJgy4?si=KOlUo4jkk6f1KNN1",
    },
    {
      videoUrl: "https://www.youtube.com/embed/E4WlUXrJgy4?si=KOlUo4jkk6f1KNN1",
    }
  ];

  return (
    <>
      <DesktopHeader />
      <main className="pt-32 lg:pt-46 xl:pt-56 px-5 lg:px-15 xl:px-30 w-screen">
        <section className="w-full flex flex-row flex-wrap justify-center gap-12" data-testid="demos-section"
 >
          {
            demoVideos.map((video, index) => (
              <DemoVideo key={index} videoUrl={video.videoUrl} />
            ))
          }
        </section>
        <Separator />
      </main>
      <DesktopFooter />
    </>
  )
}
export default DesktopDemosPage