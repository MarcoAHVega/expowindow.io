# working with media queries (mixins)

*let's create a new file `_mixins.scss`*

> in our app/assets/styles/base folder let's create a new file and let's name this file underscore `_mixins.scss`

*add mixins in _mixins.scss*

> let's `create a new mixin` that will make `working with media queries` throughout our entire Web site much easier.          

> a Mixin is really just `a reusable bit of code` so we don't want to store the mixin itself in this _large-hero block file instead `add mixins in _mixins.scss`... 

example:

```scss
@mixin atSmall {
       @media (min-width: 530px) {
          @content;
       }
    }

    @mixin atMedium {
       @media (min-width: 800px) {
          @content;
       }
    }

    @mixin atLarge {
       @media (min-width: 1010px) {
          @content;
       }   
    } 

    @mixin clearfix {
       &::after {
          content: "";
          clear: both;
          display: table;
       }
    }
```