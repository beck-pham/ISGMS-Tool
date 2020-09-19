import * as colors from './utils/barChartColors';

let chartOptions = {
    category: 'Total Systems',
    groups: ['NonDisk', 'Closed', 'Open', 'NetApp', 'Isilon', 'MapR'],
    icon: 'tim-icons icon-chart-bar-32 text-info',
    maintainAspectRatio: false,
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest',
    legend: {
        display: false
    },
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
    responsive: true,
    scales: {
        yAxes: [
            {
                gridLines: {
                    drawBorder: false,
                    color: 'rgba(225,78,202,0.1)',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    suggestedMin: 60,
                    suggestedMax: 120,
                    padding: 20,
                    fontColor: '#9e9e9e'
                }
            }
        ],
        xAxes: [
            {
                gridLines: {
                    drawBorder: false,
                    color: 'rgba(225,78,202,0.1)',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    padding: 20,
                    fontColor: '#9e9e9e'
                }
            }
        ]
    }
};

// #########################################
// // // used inside Storage Equipments
// #########################################
export const chartITicket = {
    NonDisk: (canvas) => {
        return {
            labels: [
                'NetApp',
                'ZFSSA',
                'MapR',
                'Isilon',
                'Cisco',
                'Brocade',
                'SilverPeak',
                'Linux/Solaris',
                'Avere'
            ],
            datasets: [
                {
                    label: 'Non-Disk Tickets Count Per Vendor',
                    fill: true,
                    backgroundColor: [
                        colors.color1(canvas),
                        colors.color2(canvas),
                        colors.color3(canvas),
                        colors.color4(canvas),
                        colors.color5(canvas),
                        colors.color6(canvas),
                        colors.color7(canvas),
                        colors.color8(canvas),
                        colors.color9(canvas)
                    ],
                    borderColor: '#898989',
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#898989',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#898989',
                    pointborderWidth: 10,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [178, 10, 74, 3, 3, 3, 23, 0, 1]
                }
            ]
        };
    },
    Closed: (canvas) => {
        let ctx = canvas.getContext('2d');

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(29,140,248,0.4)');
        gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.2)');
        gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

        return {
            labels: [
                'iCloud Mail',
                'WWW',
                'Game Center',
                'iCloud',
                'AMP',
                'DSCE',
                'SWU'
            ],

            datasets: [
                {
                    label: 'Closed Break-fix Tickets Per Business Group',
                    fill: true,
                    backgroundColor: [
                        colors.color1(canvas),
                        colors.color2(canvas),
                        colors.color3(canvas),
                        colors.color4(canvas),
                        colors.color5(canvas),
                        colors.color6(canvas),
                        colors.color7(canvas)
                    ],
                    borderColor: '#898989',
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#898989',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#898989',
                    pointborderWidth: 10,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [1494, 35, 27, 148, 338, 32, 5]
                }
            ]
        };
    },
    Open: (canvas) => {
        return {
            labels: [
                'iCloud Mail',
                'WWW',
                'Game Center',
                'iCloud',
                'AMP',
                'DSCE',
                'SWU'
            ],

            datasets: [
                {
                    label: 'Open Break-fix Tickets Per Business Group',
                    fill: true,
                    backgroundColor: [
                        colors.color1(canvas),
                        colors.color2(canvas),
                        colors.color3(canvas),
                        colors.color4(canvas),
                        colors.color5(canvas),
                        colors.color6(canvas),
                        colors.color7(canvas)
                    ],
                    borderColor: '#898989',
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#898989',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#898989',
                    pointborderWidth: 10,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [38, 1, 0, 5, 4, 0, 1]
                }
            ]
        };
    },
    NetApp: (canvas) => {
        return {
            labels: [
                '450GB',
                '600GB-10K SAS',
                '600GB-15K SAS',
                '900GB SAS',
                '1TB SATA',
                '1.2TB SAS',
                '1.8TB SAS',
                '2TB SATA'
            ],
            datasets: [
                {
                    label: 'Netapp Disk Model',
                    fill: true,
                    backgroundColor: [
                        colors.color1(canvas),
                        colors.color2(canvas),
                        colors.color3(canvas),
                        colors.color4(canvas),
                        colors.color5(canvas),
                        colors.color6(canvas),
                        colors.color7(canvas),
                        colors.color8(canvas)
                    ],
                    borderColor: '#898989',
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#898989',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#898989',
                    pointborderWidth: 10,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [0, 983, 96, 0, 6, 294, 3, 175]
                }
            ]
        };
    },
    Isilon: (canvas) => {
        return {
            labels: ['1.2TB SAS', '2TB SATA', '3TB SATA', '600GB-10K SAS'],

            datasets: [
                {
                    label: 'Isilon Disk Model',
                    fill: true,
                    backgroundColor: [
                        colors.color1(canvas),
                        colors.color2(canvas),
                        colors.color3(canvas),
                        colors.color4(canvas)
                    ],
                    borderColor: '#898989',
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#898989',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#898989',
                    pointborderWidth: 10,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [8, 8, 11, 77]
                }
            ]
        };
    },
    MapR: (canvas) => {
        return {
            labels: ['TOTAL'],

            datasets: [
                {
                    label: 'Mapr Disk Model',
                    fill: true,
                    backgroundColor: colors.color1(canvas),
                    borderColor: '#898989',
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#898989',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#898989',
                    pointborderWidth: 10,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [147]
                }
            ]
        };
    },
    options: chartOptions
};
