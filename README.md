# Getting Started with Create React App

A Web App For Basic SQL editor view to demonstrate where your users can query easily on a table using SQL and have ui components for the functionalities that can be added.

From Menu Bar--->Select queries(2 predefined queries are there, one for find by value and one for add new row data )
in the find by value, the value is country names for both the tables (table name --orders, customers)
after selecting country name select one table and all the rows with with country name (shipCounty for orders table & country for customers table) will be displayed

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### [Live Version](https://glittering-granita-519887.netlify.app)

## Requirements

- npm

## Libraries Used

- [React](https://reactjs.org/)

## Frameworks Used

- [React Bootstrap](https://react-bootstrap.github.io/)

## To Run The Project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Page Load Time

Page Load Time has been calculated by using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

![Screenshot](public\image_speed_test.jpg)
![img](https://github.com/Mouma22/ATLAN_TASK/blob/611e19615bd63e77d38164c03054618b69b954ff/public/image_speed_test.jpg)

## Accessibility Improvements Needed and Done in

1.Buttons do not have an accessible name
fixed with passing a span element inside the menu button element before putting he icon.
2.Background and foreground colors do not have a sufficient contrast ratio.
fixed with replacing "secondary" colour to "success" ,grey to green
