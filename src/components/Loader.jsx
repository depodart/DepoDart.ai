import { Html, useProgress } from "@react-three/drei";
import { loaderContainerStyle, loaderProgressTextStyle } from "../style";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center style={loaderContainerStyle}>
      <span className="canvas-loader" />
      <p style={loaderProgressTextStyle}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
