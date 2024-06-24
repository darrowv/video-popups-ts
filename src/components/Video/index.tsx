import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Popup from "../Popup";

import "./video.css";
import { IEvent } from "../../utils/interfaces/event.interface";

function Video() {
  let [activePopups, setActivePopups] = useState<IEvent[]>([]);
  let videoRef = useRef<HTMLVideoElement>(null);

  let videoPlaybackTime = useSelector(
    (state: RootState) => state.videoPlaybackTime,
  );
  let events = useSelector((state: RootState) => state.events);

  useEffect(() => {
    if (videoRef.current && videoPlaybackTime !== null) {
      videoRef.current.currentTime = videoPlaybackTime;
    }
  }, [videoPlaybackTime]);

  useEffect(() => {
    if (!videoRef.current) return;

    let videoElement = videoRef.current;

    function getSeconds(timestamp: number) {
      return new Date(0).setSeconds(timestamp);
    }

    const handleTimeupdate = () => {
      let currentEvent = events.find(
        (event: IEvent) =>
          getSeconds(event.timestamp) === getSeconds(videoElement.currentTime),
      );

      if (currentEvent) {
        setActivePopups((popups) => {
          let previouslyAdded = popups.find(
            (popup) => popup.timestamp === currentEvent.timestamp,
          );

          if (!previouslyAdded) {
            return [...popups, currentEvent];
          }

          return popups;
        });
      }
    };

    videoElement.addEventListener("timeupdate", handleTimeupdate);

    return () =>
      videoElement.removeEventListener("timeupdate", handleTimeupdate);
  }, [events]);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    activePopups.forEach((popup) => {
      const event = events.find(
        (event: IEvent) => event.timestamp === popup.timestamp,
      );

      if (event) {
        const filteredPopups = activePopups.filter(
          (event) => event.timestamp !== popup.timestamp,
        );

        const timeout = setTimeout(
          () => setActivePopups(filteredPopups),
          (event.timestamp + event.duration - videoRef.current!.currentTime) *
            1000,
        );
        timeouts.push(timeout);
      }
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [activePopups, events]);

  return (
    <section className="video-container">
      <video className="video" ref={videoRef} controls>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Video
      </video>

      {activePopups.map(({ zone, timestamp }: IEvent) => (
        <Popup key={timestamp} zone={zone} />
      ))}
    </section>
  );
}

export default Video;
