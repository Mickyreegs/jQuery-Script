/*
We're going to use something you haven't seen so far.
It's the (document).ready(function).
The reason for this is that it's bad practice to run jQuery before the page is fully loaded,
as you might be trying to manipulate something that has not yet been rendered on the webpage.
So what we do here is put this ready function, and then anything inside the curly brackets
will only run once the DOM is fully loaded and once the HTML is fully rendered.
*/

$(document).ready(function() {
    $("h2").addClass("underline"); //.removeClass can also be used
    $("ul").addClass("border"); //.removeClass can also be used
});

/*
In this lesson, you've also seen how you might change the HTML and still keep the style and
content separate.
In this way, you can change the CSS using predefined classes, rather than inline styles.
*/
