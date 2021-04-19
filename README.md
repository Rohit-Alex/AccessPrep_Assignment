The App structure goes like:
Components used here:
>Header: Basically its the nav bar.
>Subhead:For diplaying subheading of list view.
>Item: for displaying each row in list view.
>Item1: for displaying each card of grid view.
>NoData: When no data is found(while the user is searching),then for displaying "no data found".
>Popup: For displaying the description,title,and author of selected book in a popup dialog.

Note: Each component has got it's specific style.css

Features:
>Toogle the theme of app(light / dark)
>Toogle the view of app(grid / list)
>Search for a specific book on the basis of title
>Click on a specific movie to get the details(it's description, author, and title).
>Sticky navbar whose color changes on scrolling.
>Transition in every book(grow and transform)
>I used Modal for popups.

Note: used concept of debouncing for efficient search. Debouncing boosts up the performance and limits the search request.

How to use Featues:
>Navbar has 4 elements: 
>1. E-book logo(doesn't have any functionality)
>2. Toogle View icon(for changing the view)
>3. Toogle Theme icon(for changing the theme)
>4. Search bar(for filtering the book)

