import SmartsuppChat from "./smartsup"
export default function About(){

    return (
            <>
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
                                <li><i className="fas fa-envelope" />support@hillmixholdings.com</li>
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
                                    <li><a href="https://dashboard.hillmixholdings.com/signup"><span className="btn-style2 small theme">JOIN NOW</span></a></li>
                                </ul>
                                { /* end menu area */ }

                                { /* start attribute navigation */ }
                                <div className="attr-nav sm-no-margin sm-margin-70px-right xs-margin-65px-right">
                                    <span className="sm-margin-20px-right xs-margin-5px-right">
                                        <a href="https://dashboard.hillmixholdings.com/" className="btn-style2 small theme">
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



{ /* start banner */ }
<section className="bg-img cover-background full-screen no-padding" data-overlay-dark="5" data-background="assets/miner/img/slider/slide-bg1.jpg">

<div className="container d-flex flex-column">

    <div className="row align-items-center justify-content-start min-vh-100 static-banner">
        <div className="col-md-9 col-lg-7 display-table h-100 z-index-1 width-100">
        { /* start banner headline text */ }
            <div className="display-table-cell vertical-align-middle">
                <p>We built a company that investors would love.</p>
                <h1>Learn More, About Us!</h1>
                <a href="#about" className="butn theme"><span>Get Started</span></a>
            </div>
        { /* end banner headline text */ }

        </div>
    </div>

</div>

{ /* start banner shape */ }
<div className="static-banner-shape">
    <img src="assets/miner/img/content/banner-bg05.png" alt="..." />
</div>
{ /* end banner shape */ }

</section>
{ /* end banner */ }

{ /* start about section */ }
<section id="about">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="padding-30px-right">

                    <h4 className="font-weight-600 text-theme-color">About Hillmix Holdings</h4>

                    <p className="margin-10px-bottom"><span className="font-weight-600">Hillmix Holdings is a British venture capital firm managing a crypto hedge fund that specializes in blockchain technology, early token sales, and stock investments. Founded to reinvent investment strategies in the token economy, Hillmix Holdings exclusively invests in early token sales tied to real businesses, avoiding Initial Coin Offerings (ICOs) that lack a product or business model. Stocks and stock trading are also part of its portfolio, providing a balanced, diversified approach.</span></p>
                    <p className="margin-30px-bottom sm-margin-25px-bottom xs-margin-20px-bottom">The firm focuses on tokens that incentivize essential protocol actions and drive innovation in smart contract functionality. Its earliest public investments included Tezos, MakerDAO, and Ethereum. Today, Hillmix Holdings continues to support promising blockchain ecosystems such as IPFS, RChain, Polkadot, Dfinity, and Cosmos, which it believes are poised to power the future of Web 3. Notably, the firm does not invest in general crypto applications.</p>
                    <p>Hillmix Holdings’s approach is strategic and selective, aiming to back projects with strong, sustainable potential. By targeting foundational technologies, the firm aligns itself with projects capable of reshaping the digital economy. Its careful selection criteria and focus on blockchain infrastructure help distinguish its portfolio from other venture capital firms.</p>
                    <p className="no-margin-bottom">While Hillmix Holdings did not conduct an Initial Coin Offering, it has secured over $400 million in funding from prestigious Silicon Valley venture firms, including Andreessen Horowitz, Abstract Ventures, Founders Fund, Sequoia Capital, and Union Square Ventures. This support underscores the confidence in Octa’s vision for a robust and sustainable investment model for blockchain and stocks alike.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 sm-display xm-display">
                <div className="bg-img cover-background box-shadow-primary h-100" data-overlay-dark="0" data-background="assets/miner/img/content/confidence.jpg">
                </div>
            </div>

        </div>
    </div>
</section>
{ /* end about section */ }

{ /* start counter section */ }
<section className="parallax" data-overlay-dark="7" data-background="assets/miner/img/bg/counterbg.jpg">
    <div className="container">
        <div className="row">

            <div className="col-md-5 col-sm-12 xs-margin-20px-bottom">
                <div className="story-video">

                    <div className="text-center center-col absolute-middle-center z-index-1">
                        <a className="video video_btn" href="#"><i className="fas fa-play font-size18 xs-font-size16" />
                    </a>
                    </div>

                </div>
            </div>

            <div className="col-md-7 col-sm-12 col-12">

                <h4 className="text-white font-weight-600">More investment options. More opportunities to grow.</h4>

                <p className="font-size16 sm-font-size14 text-white line-height-30 sm-line-height-28 width-90 no-margin">Gain access to a diverse portfolio of crypto assets, blockchain protocols, hedge funds, cryptocurrency companies, stocks, and stock trading opportunities, empowering you to stay diversified and seize a broader range of investment opportunities.</p>
                <div className="separator-line-horrizontal-full bg-white opacity2 margin-50px-tb md-margin-40px-tb sm-margin-30px-tb xs-margin-25px-tb" />

                <div className="row">
                    <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="counter-box text-left xs-text-center">

                            <h4 className="countup text-white display-block">138,598</h4>
                            <div className="separator-line-horrizontal-medium-light3 bg-theme margin-15px-tb sm-margin-10px-tb xs-margin-10px-tb opacity5 xs-center-col" />
                            <p className="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin">Satisfied Investors</p>
                        </div>
                    </div>
                    <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="counter-box text-left xs-text-center">
                            <h4 className="countup text-white display-block xs-text-center">1,000,000</h4>
                            <div className="separator-line-horrizontal-medium-light3 bg-theme margin-15px-tb sm-margin-10px-tb xs-margin-10px-tb opacity5 xs-center-col" />
                            <p className="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin">Completed Trades</p>
                        </div>
                    </div>
                    <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="counter-box text-left xs-text-center">
                            <h4 className="countup text-white display-block xs-text-center">36</h4>
                            <div className="separator-line-horrizontal-medium-light3 bg-theme margin-15px-tb sm-margin-10px-tb xs-margin-10px-tb opacity5 xs-center-col" />
                            <p className="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin">Industry Partners</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>
{ /* end counter section */ }

{ /* start about section */ }
<section className="zigzag-section" id="Vision">
    <div className="container">
        <div className="row align-items-center no-gutters">
            <div className="col-lg-6 order-2 order-lg-1">
                <div className="padding-20px-tb padding-50px-lr md-padding-30px-lr sm-no-padding-lr sm-padding-40px-tb mobile-padding-20px-bottom zigzag-block">
                    <span className="title">More About Us</span>
                    <h4 className="font-weight-700 margin-30px-bottom md-margin-25px-bottom sm-margin-15px-bottom">Our Vision and Mission</h4>
                    <ul className="list-style2">
                        <li><span>V</span>
                            <p>To create alternative investment opportunities for individuals who want to attain financial stability and build wealth.</p>
                        </li>
                        <li><span>M</span>
                            <p>Using our intrinsic value-based investment philosophy to providing investment products and services that offer investors a better way to invest</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/miner/img/content/vision.jpg" alt="" />
            </div>
        </div>
    </div>
</section>
{ /* end about section */ }

{ /* start what we do section */ }
<section>
    <div className="container">
        <div className="section-heading">
            <h3>What We Do</h3>
        </div>
        <div className="row feature-boxes-container">

            <div className="col-lg-4 col-md-12 sm-margin-20px-bottom feature-box-04">
                <div className="feature-box-inner h-100">
                    <i className="icon-layers font-size50 md-font-size46 sm-font-size40 xs-font-size38" />
                    <h4 className="font-size15 xs-font-size14 margin-10px-top xs-margin-8px-top text-uppercase font-weight-600 text-black">Select Assets</h4>
                    <div className="sepratar" />
                    <p>We carefully select financial assets and their instruments, which have a high record of performance, and great future prospects. We then offer these assets to investors.</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-12 sm-margin-20px-bottom feature-box-04">
                <div className="feature-box-inner h-100">
                    <i className="icon-genius font-size50 md-font-size46 sm-font-size40 xs-font-size38" />
                    <h4 className="font-size15 xs-font-size14 margin-10px-top xs-margin-8px-top text-uppercase font-weight-600 text-black">Trade Assets</h4>
                    <div className="sepratar" />
                    <p>We have a team of seasoned traders and market analysts who handle trades on behalf of our investors. Our traders combine analysis from artificial intelligence with human experise.</p>
                </div>

            </div>

            <div className="col-lg-4 col-md-12 feature-box-04">
                <div className="feature-box-inner h-100">
                    <i className="icon-hotairballoon font-size50 md-font-size46 sm-font-size40 xs-font-size38" />
                    <h4 className="font-size15 xs-font-size14 margin-10px-top xs-margin-8px-top text-uppercase font-weight-600 text-black">Manage Assets</h4>
                    <div className="sepratar" />
                    <p>We manage these trades on behalf of our investors, provide guidance to them on how to reinvest or plan for future financial security, and generally how to achieve their wealth goals.</p>
                </div>
            </div>

        </div>

    </div>
</section>
{ /* end what we do section */ }

{ /* start service section */ }
<section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6">

                        <div className="display-table height-100">
                            <div className="display-table-cell vertical-align-middle">
                                <h3 className="font-size34 md-font-size32 sm-font-size28 xs-font-size24 text-uppercase font-weight-800 no-margin xs-margin-20px-bottom">Why You Should<br /> choose <br /><span className="text-theme-color">Hillmix Holdings</span></h3>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-7 col-md-6">
                        <div className="height-100 border-left border-color-light-black padding-30px-left xs-no-padding-left">
                            <p className="no-margin width-95">Commission-free trades are everywhere. Smarter investors are here.</p>
                            <p className="no-margin width-95">Powerful, intuitive platforms for every kind of investor</p>
                            <p className="no-margin width-95">More investment options. More opportunities to grow.</p>
                            <p className="no-margin width-95">Knowledgeable support when you need it</p>
                        </div>
                    </div>

                    <div className="col-12 margin-50px-tb sm-margin-40px-tb xs-margin-30px-top xs-margin-40px-bottom">
                        <div className="bg-black separator-line-horrizontal-full opacity1" />
                    </div>

                </div>
                <div className="row">
                    { /* start feature box item */ }
                    <div className="col-lg-4 col-md-6 col-sm-12 display-table sm-display-inline margin-40px-bottom sm-margin-30px-bottom">
                        <span className="display-table-cell sm-display-inline-block vertical-align-top"><i className="icon-briefcase font-size30 md-font-size28 sm-font-size26 text-theme-color xs-margin-5px-top" /></span>
                        <div className="width-90 sm-width-80 margin-20px-left xs-margin-15px-left sm-display-inline-block">
                            <span className="display-block alt-font font-weight-700 text-uppercase letter-spacing-1 margin-5px-bottom">Multiple Products</span>
                            <p className="no-margin">Hillmix Holdings provides access to over 74 investment classes. We offer both individual and corporate services with vast growth opportunities.</p>
                            <p>
                        </p></div>
                    </div>
                    { /* end feature box item */ }

                    { /* start feature box item */ }
                    <div className="col-lg-4 col-md-6 col-sm-12 display-table sm-display-inline margin-40px-bottom sm-margin-30px-bottom">
                        <span className="display-table-cell sm-display-inline-block vertical-align-top"><i className="icon-browser font-size30 md-font-size28 sm-font-size26 text-theme-color xs-margin-5px-top" /></span>
                        <div className="width-90 sm-width-80 margin-20px-left xs-margin-15px-left sm-display-inline-block">
                            <span className="display-block alt-font font-weight-700 text-uppercase letter-spacing-1 margin-5px-bottom">Advanced Technology</span>
                            <p className="no-margin">Dynamic trading tools, extensive IT infrastructure make Hillmix Holdings a powerful industry leader. We are self-made, which means flexible.</p>
                        </div>
                    </div>
                    { /* end feature box item */ }

                    { /* start feature box item*/ }
                    <div className="col-lg-4 col-md-6 col-sm-12 display-table sm-display-inline margin-40px-bottom sm-margin-30px-bottom">
                        <span className="display-table-cell sm-display-inline-block vertical-align-top"><i className="icon-profile-male font-size30 md-font-size28 sm-font-size26 text-theme-color xs-margin-5px-top" /></span>
                        <div className="width-90 sm-width-80 margin-20px-left xs-margin-15px-left sm-display-inline-block">
                            <span className="display-block alt-font font-weight-700 text-uppercase letter-spacing-1 margin-5px-bottom">Expert Teams</span>
                            <p className="no-margin">Hillmix Holdings team is made up of more than 50 IT and finance specialists, each contributing their own expertise to provide the highest quality of service available.</p>
                        </div>
                    </div>
                    { /* end feature box item */ }
                    <div className="col-lg-4 col-md-6 col-sm-12 display-table sm-display-inline sm-margin-30px-bottom">
                        <span className="display-table-cell sm-display-inline-block vertical-align-top"><i className="icon-lock font-size30 md-font-size28 sm-font-size26 text-theme-color xs-margin-5px-top" /></span>
                        <div className="width-90 sm-width-80 margin-20px-left xs-margin-15px-left sm-display-inline-block">
                            <span className="display-block alt-font font-weight-700 text-uppercase letter-spacing-1 margin-5px-bottom">AI Security</span>
                            <p className="no-margin">Our security and privacy systems are powered by artificial intelligence, and are designed to detect and disarm any form of threat to our investors funds and assets.</p>
                        </div>
                    </div>
                    { /* end feature box item */ }

                    { /* start feature box item */ }
                    <div className="col-lg-4 col-md-6 col-sm-12 display-table sm-display-inline xs-margin-30px-bottom">
                        <span className="display-table-cell sm-display-inline-block vertical-align-top"><i className="icon-presentation font-size30 md-font-size28 sm-font-size26 text-theme-color xs-margin-5px-top" /></span>
                        <div className="width-90 sm-width-80 margin-20px-left xs-margin-15px-left sm-display-inline-block">
                            <span className="display-block alt-font font-weight-700 text-uppercase letter-spacing-1 margin-5px-bottom">Investment Knowledge</span>
                            <p className="no-margin">Hillmix Holdings provides investors with knowledge about investments and about how they can take advantage of the financial industry freely, as part of our values.</p>
                        </div>
                    </div>
                    { /* end feature box item */ }

                    { /* start feature box item*/ }
                    <div className="col-lg-4 col-md-6 col-sm-12 display-table sm-display-inline">
                        <span className="display-table-cell sm-display-inline-block vertical-align-top"><i className="icon-chat font-size30 md-font-size28 sm-font-size26 text-theme-color xs-margin-5px-top" /></span>
                        <div className="width-90 sm-width-80 margin-20px-left xs-margin-15px-left sm-display-inline-block">
                            <span className="display-block alt-font font-weight-700 text-uppercase letter-spacing-1 margin-5px-bottom">24/7 Live Support</span>
                            <p className="no-margin">We also provide a 24/7 live support service to all our investors on our platforms. Our support team is always happy to help with any need you might have.</p>
                        </div>
                    </div>
                    { /* end feature box item */ }
                </div>

            </div>
        </section>
        { /* end service section */ }

{ /* start request form */ }
<section className="parallax" data-overlay-dark="4" data-background="assets/miner/img/bg/request-call.jpg">
            <div className="container">

                <div className="section-heading title-style4 white border-bottom border-color-light-white padding-25px-bottom sm-padding-15px-bottom">
                    <h3><span>Request</span> a call</h3>
                    <p className="width-55 sm-width-75 xs-width-95">We have investment advisors on ground, ready to call you and offer financial advice to you. Request a free call today.</p>
                </div>

                <div className="row">

                    <div className="col-lg-10 center-col">
                        <div className="contact-form-box">

                            { /* start form here */ }

                            <form className="quform" action="#" method="post" encType="multipart/form-data" onClick={event => {}}>

                                <div className="quform-elements">

                                    <div className="row">

                                        { /* Begin Text input element */ }
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <input id="name" type="text" name="name" placeholder="Your name here" />
                                                </div>
                                            </div>

                                        </div>
                                        { /* End Text input element */ }

                                        { /* Begin Text input element */ }
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <input id="email" type="text" name="email" placeholder="Your email here" />
                                                </div>
                                            </div>
                                        </div>
                                        { /* End Text input element */ }

                                        { /* Begin Text input element */ }
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <div className="quform-input">
                                                    <input id="phone" type="text" name="phone" placeholder="Your phone number" />
                                                </div>
                                            </div>

                                        </div>
                                        { /* End Text input element */ }

                                        { /* Begin Submit button */ }
                                        <div className="col-md-6">
                                            <div className="quform-submit-inner">
                                                <button className="butn white-hover theme" type="submit"><span>Submit Comment</span></button>
                                            </div>
                                            <div className="quform-loading-wrap text-left"><span className="quform-loading" /></div>
                                        </div>
                                        { /* End Submit button */ }

                                    </div>

                                </div>

                            </form>

                            { /* end form here */ }

                        </div>
                    </div>

                </div>

            </div>
        </section>
        { /* end request form */ }



{ /* start contact us section */ }
<section>

            <div className="container">
                <div className="text-center section-heading">
                    <h3>Contact Us</h3>
                </div>

                { /* start contact detail */ }
                <div className="row margin-50px-bottom sm-margin-30px-bottom">
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-box"><i className="fas fa-phone" />
                            <h4>Call Us</h4><span /></div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-box"><i className="fas fa-map-marker-alt" />
                            <h4>Visit Us</h4><span>Flat 221 Langworthy Road, Salford, United Kingdom, M6 5PQ</span></div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-box"><i className="far fa-envelope" />
                            <h4>Mail Us</h4><span>support@hillmixholdings.com</span></div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-box"><i className="far fa-comments" />
                            <h4>Live Chat</h4><span>Chat with Us 24/7</span></div>
                    </div>
                </div>
                { /* end contact detail */ }

            </div>
            <div className="row margin-50px-bottom sm-margin-30px-bottom">
                { /* start map section */ }
                <div className="col-12">
                <iframe className="contact-map" id="gmap_canvas" width="100%" height="600" frameBorder="2" scrolling="no" marginHeight={0} marginWidth={0} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201880.51115438552!2d-122.57768437848272!3d37.757617097271385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1625447072010!5m2!1sen!2sca" />
                </div>
                { /* end map section */ }
            </div>            

        </section>
{ /* end contact us section */ }
                



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
                                <span className="d-inline-block width-85 vertical-align-top padding-10px-left">support@hillmixholdings.com</span>
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


{ /* custom scripts */ }
<script src="assets/miner/js/main.js" />

{ /* quform plugins js */ }
<script src="assets/miner/quform/js/plugins.js" />

{ /* quform scripts js */ }
<script src="assets/miner/quform/js/scripts.js" />

{ /* all js include end */ }

<SmartsuppChat></SmartsuppChat>

</>
            </>

    )
}
