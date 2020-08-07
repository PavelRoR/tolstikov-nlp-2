<?php

$sales1 = array('1 000р.','500р.');
$sales2 = array('2 000р.','1 000р.');
$sales3 = array('3 000р.','1 500р.');

$todays1 = array('9 900р.','10 400р.');
$todays2 = array('19 900р.','20 900р.');
$todays3 = array('29 900р.','31 400р.');

$links1 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=341&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=342&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=343&clean=true&lg=ru');
$links2 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=344&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=345&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=346&clean=true&lg=ru');
$links3 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=347&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=348&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=349&clean=true&lg=ru');

$prepLinks = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=350&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=351&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=352&clean=true&lg=ru');

$dates = array(strtotime('2020-08-11'),strtotime('2020-08-12'),strtotime('2020-08-13'));
$now = strtotime('now');

if ($now < $dates[0]) {
    $sale1 = $sales1[0];
    $sale2 = $sales2[0];
    $sale3 = $sales3[0];

    $today1 = $todays1[0];
    $today2 = $todays2[0];
    $today3 = $todays3[0];

    $link1 = $links1[0];
    $link2 = $links2[0];
    $link3 = $links3[0];

    $prepLink =$prepLinks[0];
}
elseif (($now >= $dates[0])&&($now < $dates[1])) {
    $sale1 = $sales1[1];
    $sale2 = $sales2[1];
    $sale3 = $sales3[1];

    $today1 = $todays1[1];
    $today2 = $todays2[1];
    $today3 = $todays3[1];

    $link1 = $links1[1];
    $link2 = $links2[1];
    $link3 = $links3[1];

    $prepLink =$prepLinks[1];
}

else {
    $link1 = $links1[2];
    $link2 = $links2[2];
    $link3 = $links3[2];
    $prepLink =$prepLinks[2];
}

?>
