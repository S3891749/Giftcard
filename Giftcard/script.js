document.getElementById('giftCardForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Generate gift card
    const giftCard = `
        <h2>Gift Card</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><em>Thank you for generating your gift card! The gift card will be send to your email!</em></p>
    `;

    // Display the generated gift card
    const resultDiv = document.getElementById('giftCardResult');
    resultDiv.innerHTML = giftCard;
    resultDiv.style.display = 'block';

    // Clear the form
    document.getElementById('giftCardForm').reset();
});
