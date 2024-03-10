<?php

// task da aggiungere
//var_dump($_POST);
$new_task = [
    'text' => $_POST['text'],
    'done' => false,
];
// recuperare il contenuto nel datalist.json e trasformarlo in array
$file_list = file_get_contents('../data/datalist.json');
$datalist = json_decode($file_list, true);

//aggiungo il nuovo elemento
$datalist[] = $new_task;

// ritrasformo il contenuto array del datalist per renderlo leggibile per il json 
$json_file_list = json_encode($datalist);

// il nuovo elemento viene aggiunto al file datalist.json
$file_list = file_put_contents('../data/datalist.json', $json_file_list);

//indico il content type al browser
header('Content-Type: application/json');

//stampo la lista aggiornata
echo $json_file_list;

?>