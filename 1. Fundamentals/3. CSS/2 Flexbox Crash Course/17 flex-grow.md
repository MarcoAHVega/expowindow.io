# flex-grow

the next property that can be applied to a flex item is the flex grow property
flex grow specifies what amount of space inside the fixed container the item
should take up if necessary the flex grow factor is always relative
to the size of the other children in the flex container let's understand how it works with the
ui by default you can see that the flex items only take up space that is
required to fit the content so there is a lot of extra space within
the container sometimes you don't want the additional white space
instead you want the flex items to grow to take up the remaining space
by default all flex items have a flex grow value of 0 which is why they don't
take up the available extra space let's change that for one of the items
and see what happens in the css file for item 5 i will set
flex grow to 0 to begin with
when i refresh the browser you can see there is no change so 0 is the default value
when i change this to 1 though refresh
you can see the change right away item 5 now grows to take up all the
remaining space in the container let's add the property to item 6 as well
flex grow set to 1. now if we refresh
we can see that the additional space has been evenly distributed between the two flex items
if there was 100 pixels available item 5 would grow by an additional 50 pixels
and item 6 would also grow by an additional 50 pixels
now let me change the value of flex grill on item 6 to 3 from 1.
what do you think is going to happen refresh
and you can see that item five and six both grow but item six takes up the extra space
three times as much as item five remember flex grow factor is relative
if item 5 grows by 25 pixels item 6 has to be 3 times that and hence grows by 75
pixels you can specify decimal values as well to flex grow and it works completely
fine do not specify negative values
now if we want all the items to grow to take up the extra space evenly we simply add flex grow and set it to 1
for all the flex items so in the css let me comment out flex
grow on the individual items and instead on the flex item class which
is applied to every item in the html let's add flex grow and set it to one
refresh and you can see all the items grow evenly to take up the
leftover space nice and clean so the flexgear property dictates what
amount of the available space inside the flex container the item should take up
flexible factor is also relative to the other items in the container
by default the value is 0 which dictates the items should not grow
setting a flex grow value of 1 on all the flex items will cause the flex items
to grow evenly whenever there is additional space in the container
