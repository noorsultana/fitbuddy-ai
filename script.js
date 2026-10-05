document.getElementById("fitnessForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const goal = document.getElementById("goal").value;
    const intensity = document.getElementById("intensity").value;

    const result = document.getElementById("result");

    result.innerHTML = `
        <h2>Your FitBuddy Plan</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Goal:</strong> ${goal}</p>
        <p><strong>Intensity:</strong> ${intensity}</p>

        <h3>7-Day Fitness Plan</h3>

        <p><strong>Day 1:</strong> Full Body Workout</p>
        <p><strong>Day 2:</strong> Cardio & Core</p>
        <p><strong>Day 3:</strong> Upper Body</p>
        <p><strong>Day 4:</strong> Rest & Recovery</p>
        <p><strong>Day 5:</strong> Lower Body</p>
        <p><strong>Day 6:</strong> Cardio & Flexibility</p>
        <p><strong>Day 7:</strong> Full Body & Recovery</p>

        <h3>Nutrition Tip</h3>
        <p>Stay hydrated and choose balanced meals that support your fitness goal.</p>
    `;
});
