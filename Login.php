<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Get JSON data from the request body
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
error_log("Received data: " . print_r($data, true));

$nhs = isset($data['nhs']) ? $data['nhs'] : null;
$email = isset($data['email']) ? $data['email'] : null;
$pass = isset($data['pass']) ? $data['pass'] : null;


if(empty($nhs) || empty($email) || empty($pass)){
    die("Error: Please enter all fields");
}
else{

// Connect to the database
$DB = new SQLite3('LocalGPSurgery.db');

// Query the database for the patient with the given email and password
$SQL = $DB->prepare("SELECT * FROM LocalPatient WHERE NHSNumber=:nhs");
$SQL->bindValue(':nhs', $nhs, SQLITE3_INTEGER);
$result = $SQL->execute();

$arrayr = [];

while($user = $result->fetchArray(SQLITE3_ASSOC)){
    $arrayr[] = $user;
}

if(empty($arrayr)){
    echo "User not identified";
}
else{
    echo "User identified";
}

// Return the data as a JSON response
  echo json_encode($arrayr);
}
?>
