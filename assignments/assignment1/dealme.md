# DealMe

DealMe is a web/mobile application that sets out to find the best time and place for any user to buy any item!

When the application opens, it will first prompt the user to enter the name of any item. The application will then take the user input and return a list of items that best fit the user's description of the item. The user then selects the item from the list of items that they would like to find the best deal for. After this, the application will prompt the user to enter a max price and whether or not the user is willing to wait to get the best deal. With these parameters, if there are no results, the application will ask the user to adjust their query. If there are results, the application will return:

* a "short-term" list of vendors selling the item at the lowest current prices along with any coupon codes necessary to get the lowest price
* a "long-term" list of vendors with estimated future prices of the item. These estimated prices are computed with machine learning algorithms using data from the price history of the item at different vendors
* a "recommendation" of when and where to buy the item with the user-set parameters

Finally, the application allows the user to modify parameters or start a new search for a different item.

A sample run of the application is as follows:
1. The user enters "video game console" on the search bar
2. The application returns a list of popular items pertaining to this, such as "Playstation 4," "Xbox One," and "Nintendo Switch"
3. The user selects "Nintendo Switch"
4. The user selects $300 as the max price and that they are willing to wait to get the best deal
5. The application returns a short term list of current prices from vendors, such as Amazon, Walmart, etc and a long term list of predicted prices. The application also returns a recommendation saying to wait until the holiday season since there are generally better deals at that time and the predicted price is lower than the current price.
6. The deal-minded user opts to wait, checks the app during the holidays, and buys the Nintendo Switch at the best price. As a reward for waiting for the best price, the user also buys the Nintendo Labo to quench his "maker" desires! :D
