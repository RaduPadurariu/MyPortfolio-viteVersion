import React from 'react'
import Typed from 'typed.js';
export const Typical = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hello traveler ...'],
      typeSpeed: 40,
      startDelay: 1000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <span ref={el} />
    </>
  );
}
