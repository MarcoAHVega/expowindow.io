<!--

<!DOCTYPE html>
<html>
-----------------------------------------------
~ Travel Site (head Tag)
<head>

  todo> add viewport meta tag
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  todo> add fonts
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700' rel='stylesheet' type='text/css'>
  
  todo> add title
  <title>Clear View Escapes</title>
  
  todo> add keywords and description meta tags
  <meta name="keywords" content="Travel planning, travel bundles, travel escapes, affordable travel">
  <meta name="description" content="Your clarify. One trip away. We create soul restoring journeys that inspire you to be you.">

</head>
------------------------------------------------- 
~ (1)Travel Site (header section)


<body>


  todo> header tag for all elements in the (site header bar)
  * _site-header.css 
  <header class="site-header">


      todo> div for all sections (wrapper)  
      * _wrapper.css
      <div class="wrapper">


         todo> div for the header (logo)
         * _site-header.css
         <div class="site-header__logo">
            <img src="assets/images/icons/clear-view-escapes.svg">
         </div>
         

         todo> div for the (mobil menu icons) (hamburger menu)
         * _site-header.css
         <div class="site-header__menu-icon">

            todo> div for (each mobil menu icon) 
            * _site-header.css  
            <div class="site-header__menu-icon__top"></div>

            * _site-header.css
            <div class="site-header__menu-icon__middle"></div>

            * _site-header.css
            <div class="site-header__menu-icon__bottom"></div>
         </div>


         todo> div for (all menu content)
         * _site-header.css
         <div class="site-header__menu-content">
            

            todo> div for (button container)
            * _site-header.css
            <div class="site-header__btn-container">
               

               todo> a tag for (header button)
               * _bnt.css 
               <a href="#" class="btn open-modal">Get in Touch</a>
            </div>


            todo> nav tag for the (header links)
            * _primary-nav.css
            <nav class="primary-nav primary-nav--pull-right">
               <ul>
               <li><a href="#our-beginning" id="our-beginning-link">Our Beginning</a></li>
               <li><a href="#features" id="features-link">Features</a></li>
               <li><a href="#testimonials" id="testimonials-link">Testimonials</a></li>
               </ul>
            </nav>
         </div>
      </div>
  </header>
 -----------------------------------------------------------
~ Travel Site (hero section)html

  todo> div for the (hero section)
  *_large-hero.css
  <div class="large-hero">

      todo> picture tag the (hero image)
      <picture>
         <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w ">
         <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w">
         <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg 990w, assets/images/hero--large-hi-dpi.jpg 1980w">
         
         todo> img tag for (hero image)
         *_large-hero.css
         <img srcset="assets/images/hero--smaller.jpg 640w , assets/images/hero--large-hi-dpi.jpg 1280w" alt="Costal view of ocean and mountains" class="large-hero__image">
      </picture>

      todo> div for the (hero text content)
      *_large-hero.css
      <div class="large-hero__text-content">

         todo> div for all sections (wrapper)
         * _wrapper.css
         <div class="wrapper">

            todo> h1 tag for (hero title)
            *_large-hero.css
            <h1 class="large-hero__title">Your clarity.</h1>
            
            todo> h2 tag for (hero subtitle)
            *_large-hero.css
            <h2 class="large-hero__subtitle">One trip away.</h2>
            
            todo> p tag for (hero description)
            *_large-hero.css
            <p class="large-hero__description">We create soul restoring journeys that inspire you to be you.</p>

            todo> p tag for (hero button)
            *_btn.css
            <p><a href="#" class="btn btn--orange btn--large open-modal" >Get Started Today</a></p>

         </div>
      </div>
  </div>
----------------------------------------------------------------------------------
~ Travel Site (first page section)  

  todo> div for (our beginning section)
  * _page-section.css
  <div id="our-beginning" class="page-section" data-matching-link="#our-beginning-link">

	todo> div for all sections (wrapper)
	* _wrapper.css
   <div class="wrapper">
       
		 todo> h2 tag for (our beginning section headline)
		 * _headline.css
		 <h2 class="headline headline--centered headline--light headline--b-margin-small">The first trip we planned <strong>was our own.</strong></h2>
       
		 todo> h3 tag for (our beginning section sub headline)
		 * _headline.css
		 <h3 class="headline headline--centered headline--orange headline--small headline--narrow headline--light headline--b-margin-large">Ever since, we&rsquo;ve been working to make travel <strong>better for everyone.</strong></h3>
		 
		 todo> div for medium wrapper for (first image on our beginning section)
       * _wrapper.css
       <div class="wrapper wrapper--medium wrapper--b-margin">
         <img class="lazyload" sizes="(min-width: 970px) 976px, 100vw" data-srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street.">
       </div>

       todo> div for (our beginning section two row layout (4-8))
       * _row.css  
       <div class="row row--gutters">
          
          todo> div for (left 4 column row image)
          * _row.css
          <div class="row__medium-4 row__medium-4--larger row__b-margin-until-medium">
            
            todo> picture for (left 4 column row image)
            <picture>
               <source sizes="404px" data-srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)">
               <source sizes="320px" data-srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)">
               <img class="lazyload" data-srcset="assets/images/our-start-landscape.jpg 800w, assets/images/our-start-landscape-hi-dpi.jpg 1600w" alt="Our founder, Jane Doe">
             </picture>
          </div>
          
          todo> div for (right 8 column row text content)
          * _row.css
          <div class="row__medium-8 row__medium-8--smaller">
             
             todo> div for p tag (our beginning section text content)
             *_generic-content-container.css
             <div class="generic-content-container">
                
					 todo> h2 tag for (our beginning section second headline)
		 			 * _headline.css
					 <h2 class="headline headline--no-t-margin">Here&rsquo;s how we got started&hellip;</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <a href="#">quis nostrud exercitation</a> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Duis aute irure dolor in <strong>reprehenderit in</strong> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum velit esse cillum <strong>dolore eu fugiat.</strong></p>
             </div class="generic-content-container">
            </div>
         </div>
      </div>
  </div>
----------------------------------------------------------------------------------
~ Travel Site (second page section)

  todo> div for (features section)
  * _page-section.css
  <div id="features" class="page-section page-section--blue" data-matching-link="#features-link">
    
    todo> div for all sections (wrapper)
	 * _wrapper.css
    <div class="wrapper">
       
       todo> h2 tag for (features section title)
       *_section-title.css
       <h2 class="section-title">
         
         todo> img tag for (features section title icon)
         *_section-title.css
         <img class="section-title__icon" src="assets/images/icons/star.svg">
       
       Our<strong> Features</strong></h2>
       
       todo> div for (features section two row layout (6-6))
       * _row.css
       <div class="row row--gutters-large generic-content-container">
         
         todo> div for (left 6 column row)
         * _row.css
         <div class="row__medium-6">

            todo> div for (feature item card 1)
            *_feature-item.css
            <div class="feature-item">

               todo> img tag for (feature item icon)
               *_feature-item.css
               <img class="feature-item__icon" src="assets/images/icons/rain.svg">

               todo> h3 tag for (feature item title)
               *_feature-item.css
               <h3 class="feature-item__title">We&rsquo;ll Watch the Weather</h3>

               todo> p tag (for feature item text)
               * ????
               <p>Download our app and we&rsquo;ll send you a notice if it&rsquo;s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.</p>
            </div>

            todo> div for (feature item card 2)
            *_feature-item.css
            <div class="feature-item">

               todo> img tag for (feature item icon)
               *_feature-item.css
               <img class="feature-item__icon" src="assets/images/icons/globe.svg">

               todo> h3 tag for (feature item title)
               *_feature-item.css
               <h3 class="feature-item__title">Global Guides</h3>

               todo> p tag (for feature item text)
               * ????
               <p>We&rsquo;ve scoured the entire planet for the best retreats and beautiful vistas. If there&rsquo;s a corner of the world you want to escape to we know the most scenic and inspiring locations.</p>
            </div>
         </div>

         todo> div for (right 6 column row)
         * _row.css
         <div class="row__medium-6">
            
            todo> div for (feature item card 3)
            *_feature-item.css
            <div class="feature-item">

               todo> img tag for (feature item icon)
               *_feature-item.css
               <img class="feature-item__icon" src="assets/images/icons/wifi.svg">

               todo> h3 tag for (feature item title)
               *_feature-item.css
               <h3 class="feature-item__title">Wi-Fi Waypoints</h3>

               todo> p tag (for feature item text)
               * ????
               <p>We only send you on trips to places we can personally vouch for as being amazing. Which means we&rsquo;ve mapped out where local wi-fi spots are and marked them in our app&rsquo;s map view.</p>
            </div>
            
            todo> div for (feature item card 4)
            *_feature-item.css
            <div class="feature-item">

               todo> img tag for (feature item icon)
               *_feature-item.css
               <img class="feature-item__icon" src="assets/images/icons/fire.svg">

               todo> h3 tag for (feature item title)
               *_feature-item.css
               <h3 class="feature-item__title">Survival Kit</h3>

               todo> p tag (for feature item text)
               * ????
               <p>Everytime you book an escape with us we send you a survival kit with the finest materials. The kit will allow you to setup a tent, start a fire, scratch your own back and lower your taxes.</p>
            </div>
         </div>
       </div>
   </div>
  </div>
--------------------------------------------------------------------------------
~ Travel Site (third page-section)

  todo> div for (testimonials section)
  * _page-section.css
  <div id="testimonials" class="page-section page-section--no-b-padding-until-large page-section--testimonials" data-matching-link="#testimonials-link">
      
      todo> div for all sections (wrapper)
	   * _wrapper.css
      <div class="wrapper wrapper--no-padding-until-large">
         
         todo> h2 tag for (testimonials section title)
         *_section-title.css
         <h2 class="section-title section-title--blue">
         
         todo> img tag for (testimonials section title icon)
         *_section-title.css
         <img class="section-title__icon" src="assets/images/icons/comment.svg"> 
         
         Real <strong>Testimonials</strong></h2>

         todo> div for (testimonials section three row layout (4-4-4))
         * _row.css
         <div class="row row--gutters row--equal-height-at-large row--gutters-small row--t-padding generic-content-container">
            
            todo> div for (first 4 column row)
            * _row.css
            <div class="row__large-4">

               todo> div for (testimonial card)
               *_testimonial.css
               <div class="testimonial">

                  todo> div for (testimonial image)
                  *_testimonial.css
                  <div class="testimonial__photo">
                     <img class="lazyload" sizes="160px" data-srcset="assets/images/testimonial-jane.jpg 160w, assets/images/testimonial-jane-hi-dpi.jpg 320w" alt="Jane Doe">
                   </div>

                  todo> h3 tag for (testimonial title)
                  *_testimonial.css
                  <h3 class="testimonial__title">Jane Doe</h3>

                  todo> h4 tag for (testimonial subtitle)
                  *_testimonial.css
                  <h4 class="testimonial__subtitle">9 Time Escaper</h4>

                  todo> p tag for (testimonial text)
                  * ???
                  <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;</p>
               </div>
            </div >
            
            todo> div for (second 4 column row)
            * _row.css
            <div class="row__large-4">

               todo> div for (testimonial card)
               *_testimonial.css
               <div class="testimonial">

                  todo> div for (testimonial image)
                  *_testimonial.css
                  <div class="testimonial__photo">
                     <img class="lazyload" sizes="160px" data-srcset="assets/images/testimonial-john.jpg 160w, assets/images/testimonial-john-hi-dpi.jpg 320w" alt="John Smith">
                   </div>

                  todo> h3 tag for (testimonial title)
                  *_testimonial.css
                  <h3 class="testimonial__title">John Smith</h3>

                  todo> h4 tag for (testimonial subtitle)
                  *_testimonial.css
                  <h4 class="testimonial__subtitle">4 Time Escaper</h4>

                  todo> p tag for (testimonial text)
                  * ???
                  <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur.&rdquo;</p>
               </div>
            </div>
            
            todo> div for (third 4 column row)
            * _row.css
            <div class="row__large-4">

               todo> div for (testimonial card)
               *_testimonial.css
               <div class="testimonial testimonial--last">

                  todo> div for (testimonial image)
                  *_testimonial.css
                  <div class="testimonial__photo">
                     <img class="lazyload" sizes="160px" data-srcset="assets/images/testimonial-cat.jpg 160w, assets/images/testimonial-cat-hi-dpi.jpg 320w" alt="Cat McKitty">
                   </div>

                  todo> h3 tag for (testimonial title)
                  *_testimonial.css
                  <h3 class="testimonial__title">Cat McKitty</h3>

                  todo> h4 tag for (testimonial subtitle)
                  *_testimonial.css
                  <h4 class="testimonial__subtitle">6 Time Escaper</h4>

                  todo> p tag for (testimonial text)
                  * ???
                  <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.&rdquo;</p>
               </div>
            </div>
            
         </div>
      </div>
  </div>
---------------------------------------------------------------------------------------  
  todo> div for (react component)
  <div id="my-react-example"></div>
------------------------------------------------------------------------------
~ Travel Site (site-footer)
   todo> footer tag for (site footer section)
   *_site-footer.css
  <footer class="site-footer">

    todo> div for all sections (wrapper)
	 * _wrapper.css
    <div class="wrapper">

       todo> p tag for (site footer text) and a tag for (button)
       <p><span class="site-footer__text">Copyright &copy; 2019 Clear View Escapes. All rights reserved.</span> <a href="#" class="btn btn--orange open-modal">Get in Touch</a></p>
    </div>
  </footer> 
  
</body>
</html>

---------------------------------------------------------------------------------
(17.1) add all  HTML content and assets
* At this point we should have add the project's html and assets right from the design. 

 

todo> `go to` 6 Git-GitHub.md
-------------------------------------------------
(2)
-->
