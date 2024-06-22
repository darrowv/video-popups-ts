import "./video.css";

function Video() {
  return (
    <section className="video">
      <video controls>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Video
      </video>
    </section>
  );
}

export default Video;
