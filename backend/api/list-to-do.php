<?php 
//versione breve per stampare la lista

# 1 recupero il file (formato stringa) con i data che mi serve stampare
$json_file_list = file_get_contents('../data/datalist.json');

/* VERSIONE ESTESA in caso:
va aggiunta la logica per un eventuale trattamento dei dati
es: (filtrare l'array)
1 - trasformo
    $array = json_decode($json_file_list)
    function...ecc...
2 - ri-trasformo
    $file_json = json_encode($array)
*/

# 2 recupero l'header per indicare il content type al browser
header('Content-Type: application/json');

# 3 stampo
echo $json_file_list;