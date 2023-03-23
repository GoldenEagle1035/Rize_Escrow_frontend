import { Box } from "@mui/material";
import Particles from 'react-tsparticles';

const ParticleAnimation = ({ id, props }) => {
    return (
    <div className="absolute">
        <Particles
            height="450px"
            id={id}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0
                },
                interactivity: {
                    detectsOn: "window",
                    events: {
                        onClick: {
                            enable: false,
                            mode: []
                        },
                        // onHover: {
                        //     enable: id === "id4" ? false : true,
                        //     mode: "trail",
                        //     parallax: {
                        //         enable: false,
                        //         force: 2,
                        //         smooth: 40
                        //     }
                        // },
                        resize: true
                    },
                    modes: {
                        trail: {
                            delay: 0.005,
                            pauseOnStop: true,
                            quantity: 1,
                            particles: {
                                color: {
                                    value: id === "id4" ? "#FF0000" : "#33ff00",
                                    animation: {
                                        enable: true,
                                        speed: 0,
                                        sync: true
                                    }
                                },
                                collisions: {
                                    enable: false
                                },
                                links: {
                                    enable: false
                                },
                                move: {
                                    outModes: {
                                        default: "destroy"
                                    },
                                    speed: 0
                                },
                                size: {
                                    value: 2,
                                    animation: {
                                        enable: true,
                                        speed: 0,
                                        minimumValue: 1,
                                        sync: true,
                                        startValue: "min",
                                        destroy: "max"
                                    }
                                }
                            }
                        }
                    }
                },
                particles: {
                    shadow: {
                        enable: true,
                        color: id === "id4" ? "#FF0000" : "#FFFFFF",
                        blur: id === "id4" ? 1: 4
                    },
                    number: {
                        value: id === "id4" ? 50 :  150,
                        limit: id === "id4" ? 50 :  150,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: id === "id4" ? "#FF0000" : "#33ff00"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 2,
                            color: id === "id4" ? "#FF0000" : "#33ff00"
                        },
                        polygon: {
                            nb_sides: 2
                        },
                    },

                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0,
                            size_min: 0.5,
                            sync: true
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 0,
                        color: '#33ff00',
                        opacity: 0,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0,
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
    </div>);
}

export default ParticleAnimation;