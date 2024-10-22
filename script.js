document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.getElementById('dynamicQuote');

    // Array of quotes with line breaks using <br>
    const quotes = [
        "Hare Krishna Hare Krishna Krishna Krishna Hare Hare<br>Hare Rama Hare Rama Rama Rama Hare Hare",
        "Wishing you and your family a joyous and prosperous Diwali!<br>May the divine light of Lord Jagannath guide your path to happiness and success.",
        "May the blessings of Lord Rama fill your life with peace, love, and harmony.<br>Happy Diwali!",
        "On this festival of lights, may your home be illuminated with joy<br>and your heart be filled with devotion.<br>Happy Diwali!"
    ];

    let quoteIndex = 0;

    // Function to change the quote every 10 seconds
    function changeQuote() {
        quoteElement.innerHTML = quotes[quoteIndex]; // Use innerHTML to interpret <br>
        quoteIndex = (quoteIndex + 1) % quotes.length; // Loop back to the first quote when reaching the end
    }

    // Change quote immediately on load
    changeQuote();

    // Set interval to change quote every 10 seconds
    setInterval(changeQuote, 10000);

    // Initialize fireworks effect
    $('.fireworks').fireworks({
        sound: true, // sound effect
        opacity: 0.5, 
        width: '100%', 
        height: '100%'
    });
});
