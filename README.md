## Python Django Multi-vendor Restaurant Marketplace project
![logo](/static/logo/loveForFoodLogo.png)
![Paid-badge](/static/images/paid.png)

- A live demo can be found [here](https://loveforfood.ml/)

- A GitHub repository can be found [here](https://github.com/Eva-Kuk/love-for-food)

## Overview
![home-1](/static/images/home-1.png)
![home-2](/static/images/home-2.png)
![home-3](/static/images/home-3.png)
This is a project I built while learning new Django features on a Udemy course.

The purpose of this project was to build a multi-vendor restaurant Marketplace in Ireland where the Restaurants Owners can register, add, edit/delete their restaurant menu on their Restaurant profile, receive orders from customers, see their Total earnings and revenue payment, and also is for customers who can register, set their profile, search for their favorite restaurants nearby, order and purchase food from their favorite restaurants.

The project used a ready-made FoodBakery template from [themeforest](https://themeforest.net/) customized as the goal was to focus on the backend.
The project uses Postgres Database
The project is deployed on ubuntu Linode with Nginx and Gunicorn
The project contains:
## HOME page
- search box searching restaurants by restaurant name or food name keyword
- implemented geojdango and google API power by Google autocomplete service to show results near us with a specific radius
- box with the current location, when the customer will click on the target icon, it will show the restaurants nearby the customer
-  Top Restaurants section
- Popular restaurants section with dynamic Open/Close badges which will calculate if the restaurant is open or closed and set the right badge.
## REGISTER page
- Register forms separately, one for Customer: "SIGN IN" and one for Restaurant Owner: "REGISTER RESTAURANT"
- Restaurant registration form - when the restaurant owner wants to register, the admin needs to verify and approve the owner's License Certificate to be registered.
Custom registration form when the user registers, the activation form will be sent to the user which he needs to verify to get registered

## LOGIN page
For the Customer and the Restaurant/Vendor account, the same contains an email address and password and Forgot Password feature.

## Vendor Dashboard
- appears after the Restaurant owner login to his profile 
- A dynamically set cover and profile photo default or chosen by the profile owner
- The menu on the left contains:
    - DASHBOARD - contains Total Orders, Total Revenue Tax, current month, recent orders, search box searching orders by the order number, date, name and status.
    - MY RESTAURANT - to manage the restaurant details like profile picture, cover photo, License, Restaurant name, the address with google API autocomplete feature and automatically filled latitude and longitude, Eircode.
    - MENU BUILDER - the vendor can add, edit or delete a Category and also add food, price, and description to the particular category in their restaurant.
    - OPENINGS HOURS - the vendor can set the opening hours for the restaurant which will be automatically added without reloading the page, and linked with the OPEN/CLOSE badge on Home Page.
    - ORDERS - contains the list of orders, search box and Show box to list specified list of items.

## Customer Dashboard
- appears after login with the dynamically set cover and profile photo - The menu on the left contains:
    - DASHBOARD - contains Total Orders, Edit Profile Settings for the customer, recent orders box, search box, list of orders 
    - MY ORDERS - contains orders for the customer, box show 10 recent orders, the search box to find the order
    - PROFILE SETTINGS - to manage the customer details like profile picture, cover photo, name, phone number, the address with google API autocomplete feature and automatically filled latitude and longitude, Eircode.
## MARKETPLACE Page
- contains a list of all found restaurants with an information badge whether they are open or closed and the ability to view the menu of a specific restaurant
## Cart page
- contains Cart Items section with displayed order items
- Your Order section with calculated Subtotal, Vat, Total and Process to checkout button which leads to the PayPal payment method
## CHECKOUT page
- contains the customer Billing Address section and Your Order customer section whit payment PayPal method which when completes successfully will move the customer to the order completion page.


### Website Functionalities Implemented:

- Custom User Model, media files, Django signals
- User Registration
- Restaurant/Vendor Registration & authentication functionalities
- Token Verification & Email Configuration
- Menu Builder - Category & Food Items CRUD functionalities
- Marketplace implementation
- Google autocomplete field
- Location Queries
- PostgresSQL Database Configuration
- Django messages
- Vendor approval by admin
- Django forms
- Custom form validators
- Cart Functionalities with Ajax request
- Basic search, smart search functionalities
- Location-based search functionalities with nearby restaurants
- Show nearby restaurants on the Homepage based on the user's current location
- Dynamic Tax Module
- Orders, Checkout & After Order functionalities
- PayPal Payment Gateway
- ManyToMany Relationships
- Integrated Email Templates
- User Profile Settings
- Deployment on Ubuntu Linode hosting server
- Gunicorn and Nginx configuration
- Custom domain name with certbot SSL certificate configuration