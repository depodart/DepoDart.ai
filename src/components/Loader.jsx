import React, { useContext } from 'react';
import { Html, useProgress } from "@react-three/drei";
import { loaderContainerStyle, loaderProgressTextStyle } from "../style";
import { ThemeContext } from '../context/ThemeContext';

const CanvasLoader = () => {
  const { currentTheme } = useContext(ThemeContext);
  const { progress } = useProgress();

  return (
    <Html as="div" center style={loaderContainerStyle(currentTheme)}>
      <span className="canvas-loader" />
      <p style={loaderProgressTextStyle(currentTheme)}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
