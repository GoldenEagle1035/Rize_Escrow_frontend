import { Box } from "@mui/material";
import Particles from 'react-tsparticles';

const RizeLogo = ({
    props,
    size,
    unit,
    particleColor,
    delay,
}) => {
    return (
        <Box sx={{
            ...props,
            width: `${size}${unit}`,
            height: `${size * 1.5}${unit}`,
        }}>


            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                maskImage: 'url(./images/content/logo/rize-logo-mask-out.png)',
                maskType: 'alpha',
                maskSize: 'cover',
                minWidth: '400px'
            }}>
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '1px',
                    boxShadow: '#fff 0px 0px 4px, #33ff00 0px 0px 8px, #33ff00 0px 0px 10px, #33ff00 0px 0px 20px, #33ff00 0px 0px 30px, #32f501 0px 0px 40px',
                    backgroundColor: '#0f0',
                    // animation: `rise-up ${delay}s linear`,
                    '@keyframes rise-up': {
                        '0%': {
                            bottom: '0%',
                        },
                        '100%': {
                            bottom: '100%',
                        },
                    },
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    // animation: `grow-up ${delay}s linear`,
                    '@keyframes grow-up': {
                        '0%': {
                            height: '0%',
                        },
                        '100%': {
                            height: '100%',
                        },
                    },
                }}>
                    <Box sx={{
                        width: `${size}${unit}`,
                        height: `${size * 1.5}${unit}`,
                        position: 'absolute',
                        bottom: '0',
                        '& canvas': {
                            position: 'absolute !important',
                        },
                        maskImage: 'url(./images/content/logo/rize-logo-mask.png)',
                        maskType: 'alpha',
                        maskSize: 'contain',
                    }}>

                        <Particles
                            id={'1'}
                            options={{
                                fullScreen: {
                                    enable: false,
                                    zIndex: 0
                                },
                                particles: {
                                    shadow: {
                                        enable: true,
                                        color: '#ffffff',
                                        blur: 4
                                    },
                                    number: {
                                        value: 800,
                                        limit: 800,
                                        density: {
                                            enable: true,
                                            value_area: 800
                                        }
                                    },
                                    color: {
                                        value: '#33ff00'
                                    },
                                    shape: {
                                        type: "circle",
                                        stroke: {
                                            width: 2,
                                            color: '#33ff00'
                                        },
                                        polygon: {
                                            nb_sides: 2
                                        },
                                    },

                                    opacity: {
                                        value: 1,
                                        random: true,
                                        anim: {
                                            enable: true,
                                            speed: 0.1,
                                            opacity_min: 0.1,
                                            sync: false
                                        }
                                    },
                                    size: {
                                        value: 2,
                                        random: true,
                                        anim: {
                                            enable: true,
                                            speed: 3,
                                            size_min: 1,
                                            sync: false
                                        }
                                    },
                                    line_linked: {
                                        enable: true,
                                        distance: 40,
                                        color: '#33ff00',
                                        opacity: 0.6,
                                        width: 1,
                                    },
                                    move: {
                                        enable: true,
                                        speed: 0.1,
                                        direction: "none",
                                        random: false,
                                        straight: false,
                                        out_mode: "out",
                                        bounce: false,
                                        attract: {
                                            enable: false,
                                            rotateX: 300,
                                            rotateY: 1200
                                        }
                                    }
                                }
                            }}
                        />
                    </Box>
                    <img alt='' src='./images/content/logo/rize-logo-mainline.png'
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            width: `${size}${unit}`,
                            height: `${size * 1.5}${unit}`,
                            zIndex: 1,
                        }} />
                </Box>
            </Box>
        </Box >
    );
}

export default RizeLogo;