const emailjs = require('emailjs-com');

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const response = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            { name, email, message },
            process.env.EMAILJS_PUBLIC_KEY
        );
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email.');
    }
});
