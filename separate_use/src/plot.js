import { themes } from '../plotlyjs/theme.js'

let baseLayout_dark = {
    font: {
        color: "#ffffff"
    },
    paper_bgcolor: 'rgb(0,0,0,0)',
    plot_bgcolor: 'rgb(0,0,0,0)',
    color: "white",
    xaxis: {
        tickcolor: "rgb(255,255,255)",
        gridcolor: "#ffffff",
        zerolinecolor: '#ffffff',

    },
    yaxis: {
        tickcolor: "rgb(255,255,255)",
        gridcolor: "#ffffff",
        zerolinecolor: '#ffffff',
    },
};
let baseLayout_light = {
    xaxis: {
        gridcolor: "#000",
    },
    yaxis: {
        gridcolor: "#000",
    },
};

function plot_main(event) {
    math.config({
        matrix: 'Array'  // Choose 'Matrix' (default) or 'Array'
    })
    let template = themes.PLOTLY_DARK;
    if (event.type == "DOMContentLoaded") {
        template = themes.PLOTLY_DARK;
    }
    else if (event.type == "beforeprint") {
        template = themes.PLOTLY_WHITE;
    }

    Plotly.newPlot(
        document.getElementById("plot_1"),
        [{
            x: math.range(1, 20),
            y: math.range(20, 40),
            type: "scatter",
            mode: "line+marker",
            marker: {
                size: 10,
                color: "red"
            }
        }],
        {
            template: template,
            title: "plotly demo",
        }
    )
};


document.addEventListener("DOMContentLoaded", plot_main);
window.addEventListener("beforeprint", plot_main);

