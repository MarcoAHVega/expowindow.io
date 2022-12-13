> CASCADE

- Process of combining different stylesheets and resolving
  conflicts between different CSS rules and declarations, when more than one rule applies to a certain element.

- a declaration for a certain style property like font size can appear in several stylesheets and also several times inside one single stylesheet.

> Now CSS can also come from different sources.

> • Author

- The most common one is the CSS that we the developers write.

- These declarations that we put in our stylesheets are called the author declarations.

> • User

- Another source can be the user declarations, which is CSS coming from the user.

- For instance, when the user changes the default font size in the browser then that is user CSS

> • Browser (user agent)

- and last but not least there are the default browser declarations.

- For instance, if we put an anchor tag in our HTML for a link and then don't style it at all it will usually be rendered with blue text and underlined.

- That's called the user agent CSS, because it's set by the browser.

> Cascade Process

the cascade looks at the `importance (Weight)`,

at the selector `specificity`,

and to `source order`

of conflicting declarations in order to determine which one takes precedence.

> importance (Weight)

- First off the cascade starts by giving the conflicting declarations different importance's based on where they are declared, so `based on their source`.

- The most important declarations are `user` declarations marked with the `!important` keyword.

- Next the second most important declarations are the `author` declarations marked with `!important`

- Third, the normal author declarations,

- then the normal user declarations,

- and finally the least important ones are the default browser declarations, which actually makes a lot of sense so that we can easily overwrite these declarations coming by default from the browser

> Specificity

- Now a lot of times we will just have a bunch of conflicting rules in our author stylesheets without any important keyword.

- That is actually the most common scenario and in this case all the declarations have the exact same importance.

- What the cascade does if this is the case is to calculate and compare the specificities of the declaration selectors, and this is how it works.

> 1 Inline styles

- Inline styles have the highest specificity

> 2 IDs

- followed by IDs,

> 3 Classes, pseudo-classes, attribute selectors

- then classes, pseudo classes and attribute selectors,

> 4 Elements, pseudo-element selectors

- and finally the least specific the element and pseudo element selector.

- The specificity is actually not just one number, but `one number for each of the four categories`

`(0, 0, 1, 0)`

- we count the number of occurrences in the selector. Simple as that.

> how do we actually use these numbers to find out which of the selectors applies?

- We start to look at the numbers from left to right

- starting with the most specific category, the inline styles.

- If there is a selector with one it wins against all the other selectors, because this is the most specific category.

- The value of the winning declaration is called `the cascaded value`, because it's the result from the cascade.

> Source order

- if there's still a tie at this point then the last CSS declaration written in the code is the one that will apply.

- So again if everything is equal, if all the declarations selectors have the same specificity then it's simply the last declaration that will be used to style the selected element, that's it.

> take away's

• CSS declarations marked with `!important` have the highest priority;

• But, only use !important as a last resource. It’s better to use correct specificities — more
maintainable code!

• `Inline styles` will always have priority over styles in external stylesheets;

• A selector that contains 1 ID is more specific than one with 1000 classes;

• A selector that contains 1 class is more specific than one with 1000 elements;

• The universal selector `*` has no specificity value (0, 0, 0, 0);

• Rely more on specificity than on the order of selectors;

• But, rely on order when using 3rd-party stylesheets — always put your author stylesheet last
