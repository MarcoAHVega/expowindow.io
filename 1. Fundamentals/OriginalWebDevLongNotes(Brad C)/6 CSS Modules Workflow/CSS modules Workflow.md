<!--
create a list of all the blocks  to be use in all projects in the ProjectContent 


& Steps to follow when creating a new Block

? In this example, we are creating a Block for the site-hero section (<div class="site-hero">)
   in this case, this Block only applies to the site-hero section but in general Blocks will style multiple sections or even multiple components for example:
   
   site-section, section-row, section-title, section-button

todo> within the modules folder, create a new css partial file named:
^
_site-hero.css

todo> inside the _site-hero.css, create a css rule to be apply to the site-hero class
^
.site-hero {
   
}

todo> from the styles.css file (main styles file), import the new partial css file
^
@import "normalize.css";
@import "base/_global";
@import "base/_variables";
@import "base/_mixins";
@import "modules/_section-hero"; 

todo> start adding the properties to style the block according to the design
^
.site-hero {
   position: relative;
}

-->