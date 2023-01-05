<!--
~ ### Section 5 
& 1 Global CSS
? (17.3) global css properties
? (17.4) set global css to handle images larger than the browser
? (26.9) set box-sizing to border-box
--------------------------------------------------------------------------------

? (17.3) global css properties
```css
body {
font-family: 'Roboto', sans-serif;
color: #333;      //text color
}
```
? (17.4) set global css to handle images larger than the browser
```css
img {
   max-width: 100%;
   height: auto;
}
```
----------------------------------------------------------------
? (26.9) set box-sizing to border-box
- we see that our column layout broke. So our second column is now getting pushed to a second line. And `this is because the padding values that we just added upset the arithmetic that we set up earlier`. 
   
   - We cannot let the combined with of our columns be more than 100% otherwise they won't be able to both fit on a single line. 
   
   - However we can change the way that web browsers calculate the true with of elements. If we say box-sizing: border-box;

   ```css
   &--gutter > div {
      padding-right: 65px;
      box-sizing: border-box;
   }
   ```

(26.10)
- Now in recent years something that a lot of web developers have been doing is applying this `globally to all elements on the page`. 

   - let's delete this line. 

   - let's open up base/global.css create a new rule where the selector is the asterisk meaning we want to select every single element on the page 

   ```css
   body {
      font-family: 'Roboto', sans-serif;
      color: #333;
   }

   img {
      max-width: 100%;
      height: auto;
   }

   * {
      box-sizing: border-box;
   }
   ```
   - We set that property once in the global file and we can forget about it 


 -->
