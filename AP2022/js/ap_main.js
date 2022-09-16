


$(function(){

	const myModalEl = document.getElementById('VideoAnimePocos');
	myModalEl.addEventListener('hidden.bs.modal', event => {
	 $('video')[0].pause();
	});
	
	myModalEl.addEventListener('shown.bs.modal', event => {
	 $('video')[0].play();
	});

});





const imgs = ['images/bg_hero.webp','images/bg_hero_2.webp','images/bg_hero_4.webp','images/bg_hero_3.webp','images/bg_hero_1.webp'];


tsParticles.load("particles-js", {
    "autoPlay": true,
    "fullScreen": {
        "enable": false,
        "zIndex": 0
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    "interactivity": {
        "detectsOn": "window",
        "events": {
            "resize": true
        },
        "modes": {
            "attract": {
                "distance": 200,
                "duration": 0.4,
                "easing": "ease-out-quad",
                "factor": 1,
                "maxSpeed": 50,
                "speed": 1
            },
            "bounce": {
                "distance": 200
            },
            "bubble": {
                "distance": 400,
                "duration": 2,
                "mix": false,
                "opacity": 0.8,
                "size": 40,
                "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "selectors": []
                }
            },
            "slow": {
                "factor": 3,
                "radius": 200
            }
        }
    },
    "manualParticles": [],
    "motion": {
        "disable": false,
        "reduce": {
            "factor": 4,
            "value": true
        }
    },
    "particles": {
        "bounce": {
            "horizontal": {
                "random": {
                    "enable": false,
                    "minimumValue": 0.1
                },
                "value": 1
            },
            "vertical": {
                "random": {
                    "enable": false,
                    "minimumValue": 0.1
                },
                "value": 1
            }
        },
        "collisions": {
            "bounce": {
                "horizontal": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                },
                "vertical": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                }
            },
            "enable": false,
            "mode": "absorb",
            "overlap": {
                "enable": true,
                "retries": 0
            }
        },
        "color": {
            "value": "#ffffff",
            "animation": {
                "h": {
                    "count": 0,
                    "enable": true,
                    "offset": 0,
                    "speed": 1,
                    "decay": 0,
                    "sync": true
                },
                "s": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "decay": 0,
                    "sync": true
                },
                "l": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "decay": 0,
                    "sync": true
                }
            }
        },
        "move": {
            "angle": {
                "offset": 0,
                "value": 90
            },
            "attract": {
                "distance": 200,
                "enable": false,
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "center": {
                "x": 550,
                "y": 50,
                "radius": 0
            },
            "decay": 0,
            "distance": {},
            "direction": "bottom-right",
            "drift": 0,
            "enable": true,
            "gravity": {
                "acceleration": 9.81,
                "enable": true,
                "inverse": false,
                "maxSpeed": 8
            },
            "outModes": {
                "default": "out"
            },
            "random": false,
            "size": false,
            "speed": {
				"min": 75,
				"max": 150
			  },
            "straight": false
        },
        "number": {
            "density": {
                "enable": true,
                "area": 800,
                "factor": 1000
            },
            "limit": 0,
            "value": 12
        },
        "opacity": {
            "random": {
                "enable": true,
                "minimumValue": 0.2
            },
            "value": {
                "min": 0.2,
                "max": 1
            }
        },
        "shape": {
            "options": {
				"image": [
				  {
					"src": "images/sakuras/s1.png",
					"width": 50,
					"height": 50,
					"particles": {
					  "size": {
						"value": 35
					  }
					}
				  },
				  {
					"src": "images/sakuras/s2.png",
					"width": 50,
					"height": 50,
					"particles": {
					  "size": {
						"value": 35
					  }
					}
				  },
				  {
					"src": "images/sakuras/s3.png",
					"width": 50,
					"height": 50,
					"particles": {
					  "size": {
						"value": 35
					  }
					}
				  },
				  {
					"src": "images/sakuras/s4.png",
					"width": 50,
					"height": 50,
					"particles": {
					  "size": {
						"value": 35
					  }
					}
				  },
				  {
					"src": "images/sakuras/s5.png",
					"width": 50,
					"height": 50,
					"particles": {
					  "size": {
						"value": 35
					  }
					}
				  },
				  {
					"src": "images/sakuras/s6.png",
					"width": 50,
					"height": 50,
					"particles": {
					  "size": {
						"value": 35
					  }
					}
				  },
				  {
					"src": "images/sakuras/s7.png",
					"width": 50,
					"height": 50,
					"particles": {
					  "size": {
						"value": 35
					  }
					}
				  },
				  {
					"src": "images/sakuras/s8.png",
					"width": 50,
					"height": 50,
					"particles": {
					  "size": {
						"value": 35
					  }
					}
				  },
				  {
					"src": "images/sakuras/s9.png",
					"width": 50,
					"height": 50,
					"particles": {
					  "size": {
						"value": 35
					  }
					}
				  }
				  
				  
				  ]},
		  
            "type": "image"
        },
        "size": {
            "random": {
                "enable": true,
                "minimumValue": 10
            },
            "value": {
                "min": 10,
                "max": 15
            },
            "animation": {
                "count": 0,
                "enable": false,
                "speed": 40,
                "decay": 0,
                "sync": false,
                "destroy": "none",
                "startValue": "random",
                "minimumValue": 0.1
            }
        },
        "stroke": {
            "width": 0
        },
        "zIndex": {
            "random": {
                "enable": false,
                "minimumValue": 0
            },
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
        }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "style": {},
    "themes": [],
    "zLayers": 100
});