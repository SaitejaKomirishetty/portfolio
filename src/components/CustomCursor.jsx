import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const innerRef = useRef(null);

    // Variables to store the mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Variables to store the smoothed cursor position
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
    };

    // Optimize animation loop
    const animateCursor = () => {
        // Smooth the cursor movement using a simple easing factor
        cursorX += (mouseX - cursorX) * 0.05;
        cursorY += (mouseY - cursorY) * 0.05;

        // Directly update the cursor position using inline styles
        if (cursorRef.current) {
            cursorRef.current.style.left = `${cursorX}px`;
            cursorRef.current.style.top = `${cursorY}px`;
        }

        // Call requestAnimationFrame recursively
        requestAnimationFrame(animateCursor);
    };

    // Mouseover and mouseout effects for anchor tags
    const handleMouseOver = (e) => {
        if (
            e.target.tagName === 'A' ||
            e.target.tagName === 'BUTTON' ||
            e.target.tagName === 'INPUT' ||
            e.target.tagName === 'TEXTAREA'
        ) {
            if (cursorRef.current) {
                cursorRef.current.style.width = '50px';
                cursorRef.current.style.height = '50px';
            }
            if (innerRef.current) {
                innerRef.current.style.width = '20px';
                innerRef.current.style.height = '20px';
            }
        }
        if (
            e.target.tagName === 'P' ||
            e.target.tagName === 'INPUT' ||
            e.target.tagName === 'TEXTAREA' ||
            e.target.tagName === 'A' ||
            e.target.tagName === 'H1' ||
            e.target.tagName === 'H2' ||
            e.target.tagName === 'H3' ||
            e.target.tagName === 'H4' ||
            e.target.tagName === 'SPAN' ||
            e.target.tagName === 'BUTTON' ||
            e.target.tagName === 'LI' ||
            e.target.closest('svg') !== null
        ) {
            // Make the cursor transparent when hovering over text elements
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '0.3';
            }
        }
    };

    const handleMouseOut = (e) => {
        if (
            e.target.tagName === 'A' ||
            e.target.tagName === 'BUTTON' ||
            e.target.tagName === 'INPUT' ||
            e.target.tagName === 'TEXTAREA'
        ) {
            if (cursorRef.current) {
                cursorRef.current.style.width = '40px';
                cursorRef.current.style.height = '40px';
            }
            if (innerRef.current) {
                innerRef.current.style.width = '0px';
                innerRef.current.style.height = '0px';
            }
        }
        if (
            e.target.tagName === 'P' ||
            e.target.tagName === 'INPUT' ||
            e.target.tagName === 'TEXTAREA' ||
            e.target.tagName === 'A' ||
            e.target.tagName === 'H1' ||
            e.target.tagName === 'H2' ||
            e.target.tagName === 'H3' ||
            e.target.tagName === 'H4' ||
            e.target.tagName === 'SPAN' ||
            e.target.tagName === 'BUTTON' ||
            e.target.tagName === 'LI' ||
            e.target.closest('svg') !== null
        ) {
            // Reset the cursor opacity when leaving the text element
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '1';
            }
        }
    };

    useEffect(() => {
        // Attach event listeners for mouse movement and hover effects
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        // Start the animation loop
        animateCursor();

        return () => {
            // Clean up event listeners on component unmount
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    // Inline styles
    const cursorStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition:
            'width 0.3s ease, height 0.3s ease-out, opacity 0.3s ease-out',
    };

    const innerStyle = {
        width: '0px',
        height: '0px',
        borderRadius: '50%',
        position: 'absolute',
        pointerEvents: 'none',
        transition: 'width 0.3s ease, height 0.3s ease-out',
    };

    return (
        <div>
            <div
                ref={cursorRef}
                style={cursorStyle}
                className='bg-black dark:bg-white'
            >
                <div
                    ref={innerRef}
                    style={innerStyle}
                    className='dark:bg-black bg-white'
                />
            </div>
        </div>
    );
};

export default CustomCursor;
