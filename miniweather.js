$(document).ready(function () {
    $("#btn").click(async function() {
        const city = $("#city").val();
        if(!city) {
            console.log("Enter city:");
            return;
        }
        try {
            const response = await fetch(
                `https://wttr.in/${city}?format=j1`
            );
            const data = await response.json();
            const temp = data.current_condition[0].temp_C;

            $("#result").text(
                `Current temprature in ${city}: ${temp}C`
            );
            drawChart(temp);
        }
        catch(error) {
            console.log("error");
        }
    });
});

function drawChart(temp) {
    const canvas = document.getElementById("chart");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "skyblue";

    const height = temp * 5;

    ctx.fillRect(
        150, 
        canvas.height - height,
        100, 
        height
    );
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`${temp}C`, 165, canvas.height - height - 10);
}