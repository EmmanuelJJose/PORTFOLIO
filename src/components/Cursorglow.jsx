
import { useEffect, useRef } from "react";
import styles from "../styles/CursorGlow.module.css"; 

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const moveGlow = (e) => {
      const x = e.clientX - 150; // center the glow
      const y = e.clientY - 150;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return <div className={styles.cursor_glow} ref={glowRef}></div>;
}

export default CursorGlow;
