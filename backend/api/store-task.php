<?php

// task da aggiungere
$new_task = [
    'text' => $_POST['text'],
    'done' => false,
];

//$json_file_list = file_get_contents('../data/datalist.json');
$datalist = json_decode(file_get_contents('../data/datalist.json'), true);
var_dump($datalist);

?>