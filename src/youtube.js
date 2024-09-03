import React from "react";
import { FaHome, FaHistory, FaYoutube } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2><IoMdMenu /></h2>
      <h2><FaHome /></h2>
      <h2><SiYoutubeshorts /></h2>
      <h2><FaHistory /></h2>
      <h2><RiPlayList2Fill /></h2>
      <h2><MdOutlineWatchLater /></h2>
    </div>
  );
}

function VideoGrid() {
  const videos = [
    { title: "Learn to Code", thumbnail: "link_to_image1" },
    { title: "Zero to Mastery", thumbnail: "link_to_image2" },
    { title: "Beyond Coding", thumbnail: "link_to_image3" },
    { title: "Let's Cut the BS", thumbnail: "link_to_image4" },
    { title: "Coding vs Programming", thumbnail: "link_to_image5" },
    { title: "Hack Your Brain", thumbnail: "link_to_image6" },
    // Add more video objects here
  ];

  return (
    <Container>
      <Row>
        {videos.map((video, index) => (
          <Col key={index} md={4} className="video-column">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <h4>{video.title}</h4>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default function YouTubeLayout() {
  return (
    <div className="youtube-layout">
      <Sidebar />
      <div className="main-content">
        <div className="header">
          <h2><FaYoutube /></h2>
          <h1>YouTube</h1>
        </div>
        <VideoGrid />
      </div>
    </div>
  );
}
