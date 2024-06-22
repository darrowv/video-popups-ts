import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import "./video.css";

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoTimestamp = useSelector(
    (state: RootState) => state.videoTimestamp,
  );

  useEffect(() => {
    if (videoRef.current && videoTimestamp !== null) {
      videoRef.current.currentTime = videoTimestamp;
    }
  }, [videoTimestamp]);

  return (
    <section className="video">
      <video ref={videoRef} controls>
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
