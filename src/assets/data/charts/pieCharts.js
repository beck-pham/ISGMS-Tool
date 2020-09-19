import * as colors from './utils/barChartColors';
export const chartByBU = {
    data: (canvas) => {
        return {
            labels: ['AMP', 'iCloud Mail', 'Game Center', 'WWW', 'DSCE', 'SWU'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: true,
                    backgroundColor: [
                        '#ffc107',
                        '#5e72e4',
                        '#e14eca',
                        '#ff5252',
                        '#00f2c3',
                        '#ff8d72'
                    ],
                    borderColor: colors.color1(canvas),
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#9a9a9a',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#9a9a9a',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [74, 660, 4, 4, 20, 12]
                }
            ]
        };
    },
    options: {
        name: 'Netapp Filers by Business Unit',
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
        },
        legend: {
            display: true,
            position: 'left',
            labels: {
                boxWidth: 15,
                fontColor: '#5e72e4',
                padding: 10
            }
        },
        responsive: true
    }
};

export const chartByDC = {
    data: (canvas) => {
        let ctx = canvas.getContext('2d');

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)');
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)');

        return {
            labels: ['NK', 'MR', 'ST', 'MS', 'PV'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: true,
                    backgroundColor: [
                        '#ffc107',
                        '#5e72e4',
                        '#e14eca',
                        '#ff5252',
                        '#00f2c3',
                        '#ff8d72'
                    ],
                    borderColor: gradientStroke,
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#9a9a9a',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#9a9a9a',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [74, 218, 260, 18, 204]
                }
            ]
        };
    },
    options: {
        name: 'Netapp Filers by DC',
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
        },
        legend: {
            display: true,
            position: 'left',
            labels: {
                boxWidth: 15,
                fontColor: '#5e72e4',
                padding: 10
            }
        },
        responsive: true
    }
};

export const chartByModel = {
    data: (canvas) => {
        let ctx = canvas.getContext('2d');

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)');
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)');

        return {
            labels: [
                'FAS3070',
                'FAS3170',
                'FAS3220',
                'FAS6080',
                'FAS6210',
                'FAS6220',
                'FAS6240',
                'FAS6250',
                'FAS6280',
                'FAS8020',
                'FAS8040',
                'FAS8060',
                'FAS8200'
            ],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: true,
                    backgroundColor: [
                        '#ffc107',
                        '#5e72e4',
                        '#e14eca',
                        '#ff5252',
                        '#00f2c3',
                        '#ff8d72',
                        '#b71c1c',
                        '#78909c',
                        '#ff6491',
                        '#795548',
                        '#dd2c00',
                        '#18ffff',
                        '#6200ea',
                        '#1565c0'
                    ],
                    borderColor: gradientStroke,
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#9a9a9a',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#9a9a9a',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [2, 46, 4, 4, 146, 320, 14, 4, 52, 2, 8, 10, 162]
                }
            ]
        };
    },
    options: {
        name: 'Netapp Filers by Systel Model',
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
        },
        legend: {
            display: true,
            position: 'left',
            labels: {
                boxWidth: 15,
                fontColor: '#5e72e4',
                padding: 10
            }
        },
        responsive: true
    }
};

export const chartIsilon = {
    data: (canvas) => {
        let ctx = canvas.getContext('2d');

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)');
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)');

        return {
            labels: ['DSCE', 'AMP', 'Game Center', 'DMZ', 'QA'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: true,
                    backgroundColor: [
                        '#ffc107',
                        '#5e72e4',
                        '#e14eca',
                        '#ff5252',
                        '#00f2c3',
                        '#ff8d72'
                    ],
                    borderColor: gradientStroke,
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#9a9a9a',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#9a9a9a',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [48, 154, 36, 60, 15]
                }
            ]
        };
    },
    options: {
        name: 'Isilon',

        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
        },
        legend: {
            display: true,
            position: 'left',
            labels: {
                boxWidth: 15,
                fontColor: '#5e72e4',
                padding: 10
            }
        },
        responsive: true
    }
};

export const chartAvere = {
    data: (canvas) => {
        let ctx = canvas.getContext('2d');

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)');
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)');

        return {
            labels: ['AMP'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: true,
                    backgroundColor: ['#ffc107'],
                    borderColor: gradientStroke,
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#9a9a9a',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#9a9a9a',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [170]
                }
            ]
        };
    },
    options: {
        name: 'Avere',

        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
        },
        legend: {
            display: true,
            position: 'left',
            labels: {
                boxWidth: 15,
                fontColor: '#5e72e4',
                padding: 10
            }
        },
        responsive: true
    }
};
export const chartMapr = {
    data: (canvas) => {
        let ctx = canvas.getContext('2d');

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)');
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)');

        return {
            labels: ['iCloud Mail'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: true,
                    backgroundColor: ['#5e72e4'],
                    borderColor: gradientStroke,
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#9a9a9a',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#9a9a9a',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [69]
                }
            ]
        };
    },
    options: {
        name: 'MapR',
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
        },
        legend: {
            display: true,
            position: 'left',
            labels: {
                boxWidth: 15,
                fontColor: '#5e72e4',
                padding: 10
            }
        },
        responsive: true
    }
};
