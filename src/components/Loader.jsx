import { Html, useProgress } from "@react-three/drei";
import { loaderContainerStyle, loaderProgressTextStyle, initialTheme } from "../style";

const CanvasLoader = () => {
  const [currentTheme] = useState(initialTheme);
  const { progress } = useProgress();

  return (
    <Html as="div" center style={loaderContainerStyle(currentTheme)}>
      <span className="canvas-loader" />
      <p style={loaderProgressTextStyle(currentTheme)}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
