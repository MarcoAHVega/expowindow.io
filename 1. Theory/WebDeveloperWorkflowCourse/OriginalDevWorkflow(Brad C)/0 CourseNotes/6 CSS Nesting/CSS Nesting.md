<!-- 
(18.7)   
* normally when we write `postCSS` or SASS `we like to make use of the nesting feature` to conceptually group code that is related to each other. 

   * `the nesting feature gets compiled into a descendant selector`. And while this will work in the browser, `descendant selectors go against the beam philosophy`.

   * How can we `write nested CSS to help us stay organized conceptually without having Web pack compile things down to a descendant selector`.

   * the ampersand `(&)` will give   us `.large-hero` and then we can say underscore underscore text content `(__text-content)` go ahead and hit save that will generate `the exact bem class name`.

   .large-hero {
      position: relative;

      &__text-content {
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         left: 0;
         width: 100%;
         text-align: center;
         }

      &__title {
         font-weight: 300;
         color: #2f5572;
         font-size: 4.8rem;
         }
            
      &__subtitle {
         font-weight: 300;
         color: #2f5572;
         font-size: 2.9rem;
      } 
   }
 -->