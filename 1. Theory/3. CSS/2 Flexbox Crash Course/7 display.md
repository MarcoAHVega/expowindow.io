# display

now we can focus on our very first
property which is the display property

- > create a flex container

to create a flex container we make use
of the display property and set it to a value of flex

in the css file on the container class add the property display
and set it to flex

```css

```

now when i refresh the browser you can immediately see the change

- > as with all properties in css some initial values are defined

so when creating a flex container all of the contained flex items behave
in a certain way

- first they will display in a row

- second items start from the beginning of the main access that is the leftmost point, but do not stretch till the end

however they can shrink to a certain extent

third items will stretch to fill the size of the cross axis, that is from the
top to the bottom

- also you can notice from the border that the container itself has 100 percent width so it does behave similar to a `block level element`

- > create an inline flex container

now if you do not want a block level flex container you can set the display
property to inline flex and create an inline flex container

so back in the css file display is inline flex

```scc

```

if i now refresh you can see the border now wraps around
the flex items

the container only takes up width to accommodate its children

- > so the display property is used to create either a block level or inline level flex container

the possible values are flex and inline-flex
