import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentSection from "../../components/CommentSection/CommentSection";
import CommentForm from "../../components/CommentForm/CommentForm";
import NextVideosList from "../../components/NextVideosList/NextVideosList";

// oUR data files (they get turned into arrays)
import videoDetails from "../../data/video-details.json";
import nextVideos from "../../data/videos.json";

export default function HomePage() {
  return (
    <>
      <MainVideo
        src={videoDetails[0].video}
        poster={videoDetails[0].image}
      />
      <VideoDetails
        title={videoDetails[0].title}
        author={videoDetails[0].channel}
        views={videoDetails[0].views}
        likes={videoDetails[0].likes}
        description={videoDetails[0].description}
        date={videoDetails[0].timestamp}
      />
      <CommentForm />
      <CommentSection comments={videoDetails[0].comments} />
      <NextVideosList videos={nextVideos} />
    </>
  );
}