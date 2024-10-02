const ctx = document.getElementById('areaChart').getContext('2d');

const areaChart = new Chart(ctx, {
    type: 'line', // Use 'line' for area chart
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
        datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40], // Data points
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area fill color (translucent)
            borderColor: 'rgba(75, 192, 192, 1)', // Line border color
            borderWidth: 2, // Border width of the line
            fill: true // Enable fill to create the area effect
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Y-axis starts at zero
            }
        }
    }
});