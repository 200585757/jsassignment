<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags for character set and viewport -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Title of the page -->
    <title>Yog</title>
    <!-- Link to external stylesheet -->
    <link rel="stylesheet" href="styles.css" />
    <!-- Script source -->
    <script src="sample.js"></script>
</head>
<body>
    <main>
        <!-- Main content section -->
        <div>
        <!-- Image related to the registration -->
        <img id="blockImage" src="images/suryanamaskar.png" width="75" height="75" alt="suryanamaskar">
    <!-- Heading for registration confirmation -->
    <h3>Thank you for Registering</h3>
    <!-- PHP code to process registration -->
    <?php
        // Retrieving email address from GET request
	    $emailAddress = $_GET['emailAddress'];
        // Displaying confirmation message with the email address
	    echo('<p>You as, '.$emailAddress.' has been successfully enrolled in the participants.</p>');
    ?>
        </div>
    </main>
    <!-- Footer content -->
    <footer class= container>
        <p><small>© All rights reserved. Javascript Assignment </small></p>
	</footer>
</body>
</html>