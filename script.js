function suggestTasks() {
    var energy = document.getElementById("energy").value;
    var time = document.getElementById("time").value;
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
        tasks[energy][time].map(task => "<li>" + task + "</li>").join("") + 
        "</ul>";
}

window.onload = function() {
    suggestTasks(); // Suggest tasks initially
};
