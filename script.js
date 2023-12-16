var selectedEnergy = 'low'; // Default value
var selectedTime = '10'; // Default value

function selectEnergy(energy) {
    selectedEnergy = energy;
    updateButtonStyles(document.querySelectorAll('.energy-button'), energy, true);
    suggestTasks();
}

function selectTime(time) {
    selectedTime = time;
    updateButtonStyles(document.querySelectorAll('.time-button'), time, false);
    suggestTasks();
}

function updateButtonStyles(buttons, value, isEnergyButton) {
    buttons.forEach(button => {
        if (isEnergyButton) {
            // For energy buttons, just compare the button text with the value
            if (button.innerText.toLowerCase() === value) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        } else {
            // For time buttons, adjust the expected text based on the value
            var expectedText = value === '60' ? '1 hour' : value + ' minutes';
            if (button.innerText.trim() === expectedText) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        }
    });
}

function suggestTasks() {
    var suggestions = document.getElementById("suggestions");
    var tasks = {
        low: {
            "10": ["Meditate", "Read a short article"],
            "30": ["Go for a walk", "Do light stretching"],
            "60": ["Watch a TV episode", "Cook a simple meal"]
        },
        normal: {
            "10": ["Organize your desk", "Quick workout"],
            "30": ["Read a chapter of a book", "Practice a hobby"],
            "60": ["Work on a personal project", "Prepare a meal"]
        },
        high: {
            "10": ["Intense workout", "Brainstorming session"],
            "30": ["Deep cleaning", "Learn something new"],
            "60": ["Start a new project", "Go for a long run"]
        }
    };

    suggestions.innerHTML = "Suggested Tasks: <ul>" +
        tasks[selectedEnergy][selectedTime].map(task => "<li>" + task + "</li>").join("") +
        "</ul>";
}

window.onload = function() {
    selectEnergy(selectedEnergy);
    selectTime(selectedTime);
};
