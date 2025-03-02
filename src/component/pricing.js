import SmartsuppChat from "./chatbot"
export default function (){

    return(
        
<>


{ /* start main-wrapper section */ }
<div className="main-wrapper">
    
    <div id="google_translate_element" />

                    <script type="text/javascript">{`
                        function googleTranslateElementInit() {
                            new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
                        }
                    `}</script>

                    <script type="text/javascript" src="../translate.google.com/translate_a/elementa0d8.js?cb=googleTranslateElementInit" />

    { /* start header section */ }
    <header className="header-style1 menu_area-light">
        <div id="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-xs-12">
                        <div className="top-bar-info">
                            <ul>
                                <li><i className="fas fa-envelope" />support@Hillmixholdings.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3 xs-display-none">
                        <ul className="top-social-icon">

                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="navbar-default">

            { /* start top search */ }
            <div className="top-search bg-theme">
                <div className="container">
                    <form className="search-form" action="#" method="GET" acceptCharset="utf-8">
                        <div className="input-group">
                        <span className="input-group-addon cursor-pointer">
                            <button className="search-form_submit fas fa-search font-size18 text-white" type="submit" />
                        </span>
                            <input type="text" className="search-form_input form-control" name="s" autoComplete="off" placeholder="Type & hit enter..." />
                            <span className="input-group-addon close-search"><i className="fas fa-times font-size18 line-height-28 margin-5px-top" /></span>
                        </div>
                    </form>
                </div>
            </div>
            { /* end top search */ }

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-12">
                        <div className="menu_area alt-font">
                            <nav className="navbar navbar-expand-lg navbar-light no-padding">

                                <div className="navbar-header navbar-header-custom">
                                    { /* start logo */ }
                                    <a href="index.html" className="navbar-brand logo2">
                            <img src="img/logo.png" alt="Hillmixholdings Logo" style={{ height: '40px' }} />
                        </a>
                        { /* end logo */ }
                                </div>

                                <div className="navbar-toggler" />

                                { /* menu area */ }
                                <ul className="navbar-nav ml-auto" id="nav" style={{ display: "none" }}>
                                    <li><a href="/">Home</a></li>

                                    <li><a href="/pricing">Pricing</a></li>

                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="https://Hillmixholdings.com/signup"><span className="btn-style2 small theme">JOIN NOW</span></a></li>
                                </ul>
                                { /* end menu area */ }

                                { /* start attribute navigation */ }
                                <div className="attr-nav sm-no-margin sm-margin-70px-right xs-margin-65px-right">
                                    <span className="sm-margin-20px-right xs-margin-5px-right">
                                        <a href="https://Hillmixholdings.com/" className="btn-style2 small theme">
                                            { /* <i class="fa fa-user-circle">Account</i> */ }
                                            <span>LOGIN</span>
                                        </a>
                                    </span>
                                    
                                    { /* <li class="search"><a href="javascript:void(0)"><i class="fas fa-search"></i></a></li> */ }
                                </div>
                                { /* end attribute navigation */ }

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
    { /* end header section */ }



        { /* start page title section */ }
        <section className="page-title-section2 bg-img cover-background" data-overlay-dark="5" data-background="assets/miner/img/bg/pricing-bg.jpg">

<div className="container">

    <div className="row">
        <div className="col-md-12">
            <h1>Investment Plans</h1>
        </div>
    </div>

</div>

</section>
{ /* end page title section */ }
        
<section className="price bg-light-gray">
    <div className="container">

        <div className="section-heading">
            <h3>Our Investment Pricing</h3>
        </div>

        <div className="row">


                            <div className="col-lg-4">
                    <div className="item text-center">
                        <div className="type">
                            <span className="icon"><i className="icofont icofont-diamond" /></span>
                            <h4>GOLD</h4>
                        </div>
                        <div className="value">
                            <h3>500<span>$</span></h3>
                            <span className="per">Minimum</span>
                        </div>
                        <div className="features">
                            <ul>
                                <li>Starting at $500</li>
                                <li>0% Commission</li>
                                <li>0.57% ROI</li>
                                <li>4 Week(s)</li>
                                <li>Referral Bonus</li>
                            </ul>
                        </div>
                        <div className="order">
                            <a href="https://Hillmixholdings.com/signup" className="butn small"><span>Choose Plan</span></a>
                        </div>
                    </div>
                </div>
                            <div className="col-lg-4">
                    <div className="item text-center">
                        <div className="type">
                            <span className="icon"><i className="icofont icofont-diamond" /></span>
                            <h4>SILVER</h4>
                        </div>
                        <div className="value">
                            <h3>5,000<span>$</span></h3>
                            <span className="per">Minimum</span>
                        </div>
                        <div className="features">
                            <ul>
                                <li>Starting at $5,000</li>
                                <li>0% Commission</li>
                                <li>0.85% ROI</li>
                                <li>5 Week(s)</li>
                                <li>Referral Bonus</li>
                            </ul>
                        </div>
                        <div className="order">
                            <a href="https://Hillmixholdings.com/signup" className="butn small"><span>Choose Plan</span></a>
                        </div>
                    </div>
                </div>
                            <div className="col-lg-4">
                    <div className="item text-center">
                        <div className="type">
                            <span className="icon"><i className="icofont icofont-diamond" /></span>
                            <h4>DIAMOND</h4>
                        </div>
                        <div className="value">
                            <h3>8,000<span>$</span></h3>
                            <span className="per">Minimum</span>
                        </div>
                        <div className="features">
                            <ul>
                                <li>Starting at $8,000</li>
                                <li>0% Commission</li>
                                <li>1.14% ROI</li>
                                <li>6 Week(s)</li>
                                <li>Referral Bonus</li>
                            </ul>
                        </div>
                        <div className="order">
                            <a href="https://Hillmixholdings.com/signup" className="butn small"><span>Choose Plan</span></a>
                        </div>
                    </div>
                </div>
                            <div className="col-lg-4">
                    <div className="item text-center">
                        <div className="type">
                            <span className="icon"><i className="icofont icofont-diamond" /></span>
                            <h4>VIP</h4>
                        </div>
                        <div className="value">
                            <h3>25,000<span>$</span></h3>
                            <span className="per">Minimum</span>
                        </div>
                        <div className="features">
                            <ul>
                                <li>Starting at $25,000</li>
                                <li>0% Commission</li>
                                <li>1.42% ROI</li>
                                <li>7 Week(s)</li>
                                <li>Referral Bonus</li>
                            </ul>
                        </div>
                        <div className="order">
                            <a href="https://Hillmixholdings.com/signup" className="butn small"><span>Choose Plan</span></a>
                        </div>
                    </div>
                </div>
                            <div className="col-lg-4">
                    <div className="item text-center">
                        <div className="type">
                            <span className="icon"><i className="icofont icofont-diamond" /></span>
                            <h4>VIP+</h4>
                        </div>
                        <div className="value">
                            <h3>100,000<span>$</span></h3>
                            <span className="per">Minimum</span>
                        </div>
                        <div className="features">
                            <ul>
                                <li>Starting at $100,000</li>
                                <li>0% Commission</li>
                                <li>1.71% ROI</li>
                                <li>6 Week(s)</li>
                                <li>Referral Bonus</li>
                            </ul>
                        </div>
                        <div className="order">
                            <a href="https://Hillmixholdings.com/signup" className="butn small"><span>Choose Plan</span></a>
                        </div>
                    </div>
                </div>
            

        </div>
    </div>
</section>

{ /* start begin investing section */ }
<section className="position-relative bg-transparent no-padding">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 sm-margin-70px-bottom xs-margin-50px-bottom">
                <div className="pattern-img position-relative z-index-9">
                    <img src="assets/miner/img/content/signup.jpg" alt="" className="rounded" />
                </div>
            </div>
            <div className="col-md-10 col-lg-6">

                <div className="service-design padding-45px-left sm-no-padding-left">
                    <span>What Next?</span>
                    <h3>Begin your wealth journey with us now!</h3>
                    <p>We are inviting you to come onboard the Hillmix Holdings investment platform and begin enjoying outstanding returns on your investment.</p>
                    <div className="display-inline-block vertical-align-middle font-weight-700 font-size18 sm-font-size16 margin-25px-right">Register</div>
                    <div className="display-inline-block vertical-align-middle about-video padding-20px-tb">
                        <a className="video video_btn video_btn-style2 small" href="https://Hillmixholdings.com/signup"><i className="fas fa-play" /></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
{ /* end begin investing section */ }


{ /* special pricing */ }
    <section className="price bg-light-gray">
        <div className="container">

            <div className="section-heading">
                <h3>Special Plans</h3>
            </div>

            <div className="row">
                { /* start table */ }
                <div className="col-lg-5 sm-margin-30px-bottom">
                    <div className="item text-center active">
                        <div className="type">
                            <h4>Hillmix Holdings LP</h4>
                        </div>
                        <div className="value">
                            <h3>Custom Pricing</h3>
                            { /* <span class="per">Minimum</span> */ }
                        </div>
                        <div className="features">
                            <ul>
                                <li>Unlimited Amount</li>
                                <li>Protocol Based</li>
                                <li>Custom Duration</li>
                                <li>Investors Only</li>
                            </ul>
                        </div>
                        <p>Our Hillmix Holdings LP fund is one of our funds which gives investors direct profit opportunities.</p>
                        <div className="order">
                            <a href="mailto:support@Hillmixholdings.com" className="butn medium"><span>GET STARTED</span></a>
                        </div>
                    </div>
                </div>
                { /* end table */ }

                { /* start table */ }
                <div className="col-lg-5 sm-margin-30px-bottom">
                    <div className="item text-center active">
                        <div className="type">
                            <h4>Hillmix Holdings 2.0</h4>
                        </div>
                        <div className="value">
                            <h3>Custom Pricing</h3>
                            { /* <span class="per">Minimum</span> */ }
                        </div>
                        <div className="features">
                            <ul>
                                <li>Longterm</li>
                                <li>Protocol Based</li>
                                <li>Custom Duration</li>
                                <li>Investors Only</li>
                            </ul>
                        </div>
                        <p>Our Hillmix Holdings 2.0 is our longterm ecosystem blockchain trust in protocols with our Web 3 partners on 3x scale.</p>
                        <div className="order">
                            <a href="mailto:support@Hillmixholdings.com" className="butn theme medium"><span>GET STARTED</span></a>
                        </div>
                    </div>
                </div>
                { /* end table */ }
            </div>
        </div>
    </section>
    { /* end special section */ }

        { /* start advice section */ }
        <section className="parallax" data-overlay-dark="7" data-background="https://Hillmixholdings.com/assets/miner/img/bg/talk-to-advisor.jpg" id="advice">
            <div className="container text-center">
                <div className="section-heading title-style5 half white">
                    <h4>Didn't find the right plan for your financial goals?</h4>
                    <p>Talk to one of our investment advisors to create a custom plan for you right away.</p>
                </div>
                <a href="https://Hillmixholdings.com/" className="butn theme white-hover" target="_blank"><span>Talk To An Advisor</span></a>
            </div>
        </section>
        { /* end advice section */ }

      

        { /* start footer section */ }
    <footer className="bg-img background-size-cover" data-overlay-dark="9" data-background="assets/miner/img/bg/footer-bga.jpg">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 col-md-6 sm-margin-50px-bottom xs-margin-30px-bottom">
                    <div className="padding-30px-right border-right xs-border-bottom xs-no-border-right  border-color-light-white xs-padding-30px-bottom xs-no-padding-right height-100">
                        <h3 className="footer-title-style7 text-white">Contact Us</h3>
                        <ul className="footer-list">
                            <li>
                                <span className="d-inline-block vertical-align-top font-size18"><i className="fas fa-map-marker-alt text-theme-color" /></span>
                                <span className="d-inline-block width-85 vertical-align-top padding-10px-left">Flat 221 Langworthy Road, Salford, United Kingdom, M6 5PQ</span>
                            </li>

                            <li>
                                <span className="d-inline-block vertical-align-top font-size18"><i className="far fa-envelope text-theme-color" /></span>
                                <span className="d-inline-block width-85 vertical-align-top padding-10px-left">support@Hillmixholdings.com</span>
                            </li>

                        </ul>
                        <div className="footer-social-icons small margin-15px-top">
                            <ul>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 sm-margin-50px-bottom xs-margin-30px-bottom">
                    <div className="padding-30px-right sm-no-padding-right border-right xs-border-bottom sm-no-border-right border-color-light-white xs-padding-30px-bottom height-100">
                        <h3 className="footer-title-style7 text-white">Newsletter</h3>
                        <p className="margin-20px-bottom">You can subscribe to our free newsletter to stay updated with information anf offers from Hillmix Holdings</p>
                        <form className=" newsletter-form w-sm-90 mx-auto mx-lg-0" action="#">

                            <div className="quform-elements">

                                <div className="row">

                                    { /* Begin Text input element */ }
                                    <div className="col-md-12">
                                        <div className="quform-element">
                                            <div className="quform-input">
                                                <input className="form-control" id="email_address" type="text" name="email_address" placeholder="Subscribe with Hillmix Holdings" />
                                            </div>
                                        </div>
                                    </div>
                                    { /* End Text input element */ }

                                    { /* Begin Submit button */ }
                                    <div className="col-md-12">
                                        <div className="quform-submit-inner">
                                            <button className="btn btn-white text-theme-color m-0" type="submit"><i className="fas fa-paper-plane" /></button>
                                        </div>
                                        <div className="quform-loading-wrap"><span className="quform-loading" /></div>
                                    </div>
                                    { /* End Submit button */ }

                                </div>

                            </div>

                        </form>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="height-100">
                        <h3 className="footer-title-style7 text-white">About Us</h3>
                        <p className="margin-20px-bottom">Hillmix Holdings is a company involved in a blockchain assets hedge fund.</p>
                        <p className="margin-20px-bottom">The company invests in cryptocurrency protocols, companies, stocks, and stock trading.</p>
                        <a href="about.html" className="butn theme white-hover small"><span>Read More</span></a>
                    </div>
                </div>
                
                <div id="google_translate_element" />

                    <script type="text/javascript">{`
                        function googleTranslateElementInit() {
                            new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
                        }
                    `}</script>

                    <script type="text/javascript" src="../translate.google.com/translate_a/elementa0d8.js?cb=googleTranslateElementInit" />
                    
            </div>

        </div>

        <div className="footer-bar bg-transparent border-top border-color-light-white position-relative z-index-1">
            <div className="container">
                <p>©
                    <script>{`
                        document.write(new Date().getFullYear())
                    `}</script> Hillmix Holdings</p>
            </div>
        </div>
    </footer>
    { /* end footer section */ }

</div>
{ /* end main-wrapper section */ }

{ /* start scroll to top */ }
<a href="#!" className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true" /></a>
{ /* end scroll to top */ }

{ /* all js include start */ }

{ /* jquery */ }
<script src="assets/miner/js/jquery.min.js" />

{ /* popper js */ }
<script src="assets/miner/js/popper.min.js" />

{ /* bootstrap */ }
<script src="assets/miner/js/bootstrap.min.js" />

{ /* navigation */ }
<script src="assets/miner/js/nav-menu.js" />

{ /* serch */ }
<script src="assets/miner/search/search.js" />

{ /* tab */ }
<script src="assets/miner/js/easy.responsive.tabs.js" />

{ /* owl carousel */ }
<script src="assets/miner/js/owl.carousel.js" />

{ /* jquery.counterup.min */ }
<script src="assets/miner/js/jquery.counterup.min.js" />

{ /* stellar js */ }
<script src="assets/miner/js/jquery.stellar.min.js" />

{ /* waypoints js */ }
<script src="assets/miner/js/waypoints.min.js" />

{ /* countdown js */ }
<script src="assets/miner/js/countdown.js" />

{ /* jquery.magnific-popup js */ }
<script src="assets/miner/js/jquery.magnific-popup.min.js" />

{ /* isotope.pkgd.min js */ }
<script src="assets/miner/js/isotope.pkgd.min.js" />

{ /*  chart js */ }
<script src="assets/miner/js/chart.min.js" />

{ /* thumbs js */ }
<script src="assets/miner/js/owl.carousel.thumbs.js" />

{ /* animated js */ }
<script src="assets/miner/js/animated-headline.js" />

{ /*  clipboard js */ }
<script src="assets/miner/js/clipboard.min.js" />

{ /*  prism js */ }
<script src="assets/miner/js/prism.js" />

{ /* revolution slider js files start */ }
<script src="assets/miner/js/rev_slider/jquery.themepunch.tools.min.js" />
<script src="assets/miner/js/rev_slider/jquery.themepunch.revolution.min.js" />
<script src="assets/miner/js/rev_slider/extensions/revolution.extension.actions.min.js" />
<script src="assets/miner/js/rev_slider/extensions/revolution.extension.carousel.min.js" />
<script src="assets/miner/js/rev_slider/extensions/revolution.extension.kenburn.min.js" />
<script src="assets/miner/js/rev_slider/extensions/revolution.extension.layeranimation.min.js" />
<script src="assets/miner/js/rev_slider/extensions/revolution.extension.migration.min.js" />
<script src="assets/miner/js/rev_slider/extensions/revolution.extension.navigation.min.js" />
<script src="assets/miner/js/rev_slider/extensions/revolution.extension.parallax.min.js" />
<script src="assets/miner/js/rev_slider/extensions/revolution.extension.slideanims.min.js" />
<script src="assets/miner/js/rev_slider/extensions/revolution.extension.video.min.js" />

{ /* custom scripts */ }
<script src="assets/miner/js/main.js" />

{ /* quform plugins js */ }
<script src="assets/miner/quform/js/plugins.js" />

{ /* quform scripts js */ }
<script src="assets/miner/quform/js/scripts.js" />

{ /* all js include end */ }

<SmartsuppChat></SmartsuppChat>



</>

    )
}
