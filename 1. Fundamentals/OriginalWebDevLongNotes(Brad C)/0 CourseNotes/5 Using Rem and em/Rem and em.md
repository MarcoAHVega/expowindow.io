<!-- 
(19.4)   
* the perfect segue way into talking about `REM` 

   * Whenever we declare a `font size` or a `padding` or `margin` value `we want to do so in terms of REM`

   * when we use Rem, `Everything is relative to the root of the page` and the root of any web page is always `the HTML element`.

   * `Most web browsers` will have a `default font size` on the HTML element of about the `equivalent of 16 pixels`.

   * So when we say 1.5rem X 16px = 24 pixels.

   * we use rem instead of pixels because `not everyone in the world has their web browser configured exactly the same`.

    * their web browser `might be configured to use a font size of 20 or 25 or even 30 pixels`.

    * and if we use rem for `font size` and `padding` and `margin` our entire web design and all of the whitespace and balance will `scale accordingly to the user's font size preference`.

------------------------------------------------------------------------------

(25.14)   
* I like to define margin on my text elements in `EM instead of Rem`. The nice thing about using EM in this context is that `it's relative to the font size of the element itself` which means we can reuse this class on headlines that have different font sizes and this will always scale with it really nicely.
 -->