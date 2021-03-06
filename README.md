# Zimbra

This project is developed using Angular version 8.3.21. This is a test project for an E-Commerce website showing basic listing and details page.

## Pre-requisite
1. Node must be installed in your system.
1. Npm must be installed in your system.

## Steps to run in dev mode

1. Firstly, install all the project dependencies below command, in project root directory:

    ```
    npm install
    ```

1. Now we need to run the API server by command:
    ```
    npm run server
    ```
    > Note: Once server is up you will see message something like this in your screen
    ```
    Resources
    http://localhost:3000/categories
    http://localhost:3000/products

    Home
    http://localhost:3000
    ```
    And you will be able to access APIs at `http://localhost:3000`

1. Now we need to run angular in dev mode using cmd:
    ```
    npm start
    ```
    Once server is up navigate to `http://localhost:4200/`.

    >NOTE: If you face any issues while running `npm start` then try to download angular in your local machine and then run `ng serve`.
