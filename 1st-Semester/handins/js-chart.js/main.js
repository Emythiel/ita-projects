/* Exercise 1 - Level 1 */
const ctxe1 = document.querySelector('#chart-e1').getContext('2d');
const charte1 = new Chart(ctxe1, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Denmark',
            data: [1000, 840, 605, 360]
        }]
    }
});

/* Exercise 2 - Level 1 */
const ctxe2 = document.querySelector('#chart-e2').getContext('2d');
const charte2 = new Chart(ctxe2, {
    type: 'bar',
    data: {
        labels: ['🇩🇰', '🇸🇪', '🇳🇴', '🇬🇧'],
        datasets: [{
            label: 'Country Exports',
            data: [1000, 825, 605, 360]
        }]
    }
});

/* Exercise 3 - Level 1 */
const ctxe3 = document.querySelector('#chart-e3').getContext('2d');
const charte3 = new Chart(ctxe3, {
    type: 'pie',
    data: {
        labels: ['Kayne West Listens', 'Taylor Swift Listens'],
        datasets: [{
            data: [55, 45]
        }]
    }
});

/* Exercise 4 - Level 1 */
const ctxe4 = document.querySelector('#chart-e4').getContext('2d');
const charte4 = new Chart(ctxe4, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Denmark',
            data: [1000, 840, 605, 360]
        },
        {
            label: 'Sweden',
            data: [900, 400, 600, 700]
        }]
    }
});

/* Exercise 5 - Level 2 */
const ctxe5 = document.querySelector('#chart-e5').getContext('2d');
const charte5 = new Chart(ctxe5, {
    type: 'bar',
    data: {
        labels: ['🇩🇰', '🇸🇪', '🇳🇴', '🇬🇧'],
        datasets: [{
            label: 'Country Exports',
            data: [1000, 825, 605, 360],
            backgroundColor: ['#ff0000', '#cccccc', '#cccccc', '#cccccc']
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            }
        },
        x: {
            ticks: {
                font: {
                    size: 64,
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

/* Exercise 6 - Level 2 */
const ctxe6 = document.querySelector('#chart-e6').getContext('2d');
const charte6 = new Chart(ctxe6, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        datasets: [{
            label: 'Tiktok views',
            data: [24, 75, 88, 70],
        },
        {
            label: 'Youtube views',
            data: [68, 70, 59, 82],
            borderColor: '#15b7b7',
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'TikTok vs Youtube views'
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

/* Exercise 6.1 - Level 2 */
const ctxe61 = document.querySelector('#chart-e6-1').getContext('2d');
const charte61 = new Chart(ctxe61, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        datasets: [{
            label: 'Tiktok views',
            data: [24, 75, 88, 70],
        },
        {
            label: 'Youtube views',
            data: [68, 70, 59, 82],
            borderColor: '#15b7b7',
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'TikTok vs Youtube views'
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        transitions: {
            show: {
                animations: {
                    x: {
                        from: 0
                    }
                }
            },
            hide: {
                animations: {
                    x: {
                        to: 0
                    }
                }
            }
        }
    }
});

/* Exercise 7 - Level 3 */
const ctxe7 = document.querySelector('#chart-e7').getContext('2d');
const charte7 = new Chart(ctxe7, {
    type: 'scatter',
    data: {
        labels: [100, 110, 120, 155],
        datasets: [{
            label: 'Houses',
            data: [1000000, 2500000, 2000000, 3000000],
            backgroundColor: 'rgba(220,84,84,0.87)',
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'House prices vs size (m²)'
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                min: 90
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

/* Exercise 8 - Level 2 */
const ctxe8 = document.querySelector('#chart-e8').getContext('2d');
const charte8 = new Chart(ctxe8, {
    type: 'bar',
    data: {
        labels: ['🇩🇰', '🇸🇪', '🇳🇴', '🇬🇧'],
        datasets: [{
            label: 'Country Exports',
            data: [1000, 825, 605, 360],
        }]
    },
    options: {
        legend: {
            labels: {
                filter: function(item) {
                    if (item.text === '🇩🇰' || item.text === '🇸🇪') {
                        return false;
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Country exports'
            },
            legend: {
                display: false
            }
        },
        x: {
            ticks: {
                font: {
                    size: 64,
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

const originalLabels = charte8.data.labels;
const originalData = charte8.data.datasets[0].data;
function resetData() {
    charte8.data.labels = originalLabels;
    charte8.data.datasets[0].data = originalData;
}

const showDKandSEbtn = document.querySelector('#chart-e8-dkse-btn');
const showNOandGBbtn = document.querySelector('#chart-e8-nogb-btn');
const showAllbtn = document.querySelector('#chart-e8-all-btn');

showDKandSEbtn.addEventListener('click', function() {
    resetData()
    charte8.data.labels = ['🇩🇰', '🇸🇪'];
    charte8.update();
});
showNOandGBbtn.addEventListener('click', function() {
    resetData()
    charte8.data.labels = ['🇳🇴', '🇬🇧'];
    charte8.data.datasets[0].data = [originalData[2], originalData[3]];
    charte8.update();
});
showAllbtn.addEventListener('click', function() {
    resetData()
    charte8.update();
});
