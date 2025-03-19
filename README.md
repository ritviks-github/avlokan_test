Build an e-commerce product catalog with features for browsing, searching, and filtering products.

How to setup : 
Pull the repo in your system, 
here the product data is being fetched from the backend and then it is loaded in the frontend, so in the backend, replace the connection string with your connection string in the file db.js



run the backend, and ensure that you have added products in the backend which are in adherence to the Products model defined in the code.
Main features implemented are :
Implement search functionality to filter products by name.
Display a list of products with images, prices, and descriptions.  #this feature might not work properly as the images i have taken are from the website of zepto, they continously change their hosting
Used a state management library (Context API) to manage product data.


start the backend by running the command node index.js in the backend directory
start the frontend by running the command npm start in the client directory
# implemented a functionality to prevent DOS attacks : a loader of few milliseconds is added so that the server won't shut in case a large number of requests are sent by any user in a very short period of time
