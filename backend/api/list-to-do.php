<?php 
//versione breve per stampare

# 1 recupero il file con i data che mi serve stampare
$json_file_list = file_get_contents('../data/datalist.json');

/* VERSIONE ESTESA in caso:
Qui va aggiunta la logica per un eventuale trattamento dei dati
es: (filtrare l'array)
*/

# 2 recupero l'header per indicare in content type al browser
header('Content-Type: application/json');

# 3 stampo
echo $json_file_list;