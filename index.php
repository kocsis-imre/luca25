<?php
// put your code here
?>

<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Pizzeria di Emerigo</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="bootstrap-4.5.0/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="bootstrap-4.5.0/css/bootstrap-extension.min.css" rel="stylesheet" type="text/css"/>
        <link href="img/favicon.png" rel="shortcut icon" type="image/x-icon">
        <link href="css/style.css" rel="stylesheet" type="text/css"/>

    </head>
    <body>
        <div class="offcanvas-main">
            <div class="offcanvas-container">
                
                <!-- Alpha Slider -->
                <div class="zoom-auto" id="alpha-slider" data-interval="60000">
                    <div class="alpha-slider-item">
                        <img src="img/slide1.jpg" alt="pizza1">
                        <div class="alpha-slider-caption d-none d-md-block">
                            <h2 class="text-center display-4 text-white">Quattro piccolo pomodoro<br>Pizzeria</h2>
                            <p class="text-center lead text-white">Sed vestibulum et lectus sit amet tincidunt.<br>In fringilla et ipsum vel porta.</p>
                            <p class="text-center"><a class="btn btn-warning" href="#">Show it</a></p>
                        </div>
                    </div>
                    
                </div>
                <!-- Rólunk -->
                <section class="container-fluid bg-cream" id="rolunk">
                    <div class="container py-6">
                        <div class="row">
                            <div class="col-12 col-lg-6 col-xl-5 text-lg-right">
                                <h2 class="display-4 textfresh">Rólunk</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. 
                                </p>

                            </div>
                            <div class="col-12 col-lg-6 col-xl-5 offset-xl-2">
                                <img class="w-100" src="img/about.jpg" alt="terített asztal pizzával"/>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Étlap -->
                <section class="container-fluid parallax" data-img-src="img/bg-pizza.jpg" data-speed="0.5" id="etlap">
                    <div class="parallax-inner">
                    <div class="container py-6 text-white">
                        <h2 class="display-4 text-center ">Étlap</h2>
                        <div class="be-accordion" id="accordion1">
                            <div class="card bg-transparent border-0">
                                <div class="card-header bg-transparent border-0 p-0" id="heading11">
                                    <h3>
                                        <a class="display-7" data-toggle="collapse" data-target="#collapse11" aria-expanded="true" aria-controls="collapse11">Levesek</a>
                                    </h3>
                                </div>
                                <div id="collapse11" class="collapse show" aria-labelledby="heading11" data-parent="#accordion1">
                                    <div class="card-body px-1 pt-0 pb-5">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card bg-transparent border-0">
                                <div class="card-header bg-transparent border-0 p-0" id="heading12">
                                    <h3>
                                        <a class="display-7" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">Pizzák</a>
                                    </h3>
                                </div>
                                <div id="collapse12" class="collapse" aria-labelledby="heading12" data-parent="#accordion1">
                                    <div class="card-body px-1 pt-0 pb-5">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card bg-transparent border-0">
                                <div class="card-header bg-transparent border-0 p-0" id="heading13">
                                    <h3>
                                        <a class="display-7" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">Tészták</a>
                                    </h3>
                                </div>
                                <div id="collapse13" class="collapse" aria-labelledby="heading13" data-parent="#accordion1">
                                    <div class="card-body px-1 pt-0 pb-5">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card bg-transparent border-0">
                                <div class="card-header bg-transparent border-0 p-0" id="heading14">
                                    <h3>
                                        <a class="display-7" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">Desszertek</a>
                                    </h3>
                                </div>
                                <div id="collapse14" class="collapse" aria-labelledby="heading14" data-parent="#accordion1">
                                    <div class="card-body px-1 pt-0 pb-5">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                <!-- Heti akciók -->
                <section class="container-fluid" id="hetiakcio">
                    <div class="container py-6 text-center">
                        <h2 class="display-4 textfresh">Heti akciók</h2>
                        <div class="row">
                            <article class="col-12 col-lg-4 hover-color hover-zoom mb-5 mb-lg-1">
                                <img class="w-100" src="img/pasta.jpg" alt="tészta tányéron"/>
                                <h3 class="display-7 my-3">Pasta</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </article>
                            <article class="col-12 col-lg-4 hover-color hover-zoom mb-5 mb-lg-1">
                                <img class="w-100" src="img/pizza.jpg" alt="pizza tányéron"/>
                                <h3 class="display-7 my-3">Pizza</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </article>
                            <article class="col-12 col-lg-4 hover-color hover-zoom mb-5 mb-lg-1">
                                <img class="w-100" src="img/dessert.jpg" alt="desszert tányéron"/>
                                <h3 class="display-7 my-3">Desszert</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </article>
                            
                            
                        </div>
                    </div>
                </section>
                <!-- Elérhetőségek -->
                <section class="container-fluid parallax" data-img-src="img/bg-restaurant.jpg" id="kapcsolat">
                    <div class="parallax-inner">
                        <div class="container py-6 text-white">
                            <div class="row">
                                <div class="col-12 col-lg-6 col-lg-push-6 col-xl-5 offset-xl-1">
                                <h2 class="display-4"><mark>Elérhetőségek</mark></h2>
                                <h3>Pizza di Emerigo</h3>
                                <p><strong>Cím:</strong> 1234 Budapest Ganz utca 5-7<br>
                                    <strong>Tel:</strong> +36 20 485 5748</p>
                                <h4>Nyitvatartás:</h4>
                                <p>H-P: 9:00 - 21:00</p>
                                </div>
                                <div class="col-12 col-lg-6 col-lg-pull-6 col-xl-5 ">
                                    <div class="embed-responsive embed-responsive-4by3 border-strong text-dark">
                                        <iframe class="w-100"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.9119485530064!2d19.035320315591562!3d47.51110597917853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc1b57d98361%3A0x1dead8eaf904a9b3!2sBudapest%2C%20Ganz%20u.%205-7%2C%201027!5e0!3m2!1sen!2shu!4v1591891289513!5m2!1sen!2shu" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Láblác -->
                <footer class="container-fluid bg-dark">
                    <div class="container py-6 text-center text-light">
                        <p>Pizza di Emerigo 2020 &copy; Minden jog fenntartva!</p>
                        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2Flike-button%2F&width=300&layout=button_count&action=like&size=large&share=true&height=46&appId=195787550976831"  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </footer>
            </div>
            
        
        <script src="js/jquery-3.5.1.min.js" type="text/javascript"></script>
        <script src="bootstrap-4.5.0/js/bootstrap.bundle.min.js" type="text/javascript"></script>
        <script src="bootstrap-4.5.0/js/bootstrap-extension.min.js" type="text/javascript"></script>
        <script src="js/autofocus.js" type="text/javascript"></script>
    </body>
</html>
