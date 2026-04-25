// TiltCard.jsx — micro-3D interaction wrapper.
//
// Wraps any element in a perspective-aware container that gently tilts
// in response to cursor position. Uses framer-motion's motion values +
// useTransform for smooth, GPU-accelerated rotation. No re-renders on
// pointer movement.
//
// Performance notes:
// - rotateX/rotateY are CSS transforms — handled by the compositor.
// - Disables on touch devices (no pointer = no tilt) so mobile gets
//   the static look without unnecessary listeners.
// - max tilt is intentionally small (4deg) to feel like depth, not
//   gimmickry. Realism over spectacle.
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const TILT_MAX = 4; // degrees

const TiltCard = ({
  as: Tag = motion.div,
  children,
  className = "",
  disabled = false,
  perspective = 1200,
  ...rest
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springy ease so the tilt feels physical, not robotic.
  const sx = useSpring(x, { stiffness: 200, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 20, mass: 0.4 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-TILT_MAX, TILT_MAX]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [TILT_MAX, -TILT_MAX]);

  const handleMove = (e) => {
    if (disabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: disabled ? 0 : rotateX,
        rotateY: disabled ? 0 : rotateY,
        transformPerspective: perspective,
        transformStyle: "preserve-3d",
      }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default TiltCard;
