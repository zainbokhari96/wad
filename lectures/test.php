
<h1>
<?php
/**
 * Created by PhpStorm.
 * User: l1f18bscs0504
 * Date: 12/26/2018
 * Time: 5:27 PM
 */


Echo "Benefits Of Plant" ;

?>
</h1>

<?php

$array = ["Reducing carbon dioxide levels","Increasing humidity","Reducing levels of certain pollutants, such as benzene and nitrogen dioxide ","Reducing airborne dust levels" ];

for ($i=0; $i<4 ; $i++){
    echo "<li> $array[$i] </li>" ;
}
?>