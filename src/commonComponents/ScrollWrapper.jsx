import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { animateScroll as scroll } from 'react-scroll';

const ScrollWrapper = ({ children, id }) => {
    const ref = useRef(null);

    useEffect(() => {
        scroll.scrollTo(ref.current.offsetTop, { duration: 5000 });
    }, [id]);

    const animationProps = useSpring({
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
        config: { duration: 1000 },
        delay: 200,
    });

    return (
        <animated.div ref={ref} style={animationProps}>
            {children}
        </animated.div>
    );
};

export default ScrollWrapper;