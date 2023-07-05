import ReactPlayer from 'react-player';

export default function Video({video}) {
  return (
    <ReactPlayer
    url={video}
    width="350px"
    height="250px"
    />
  )
}
