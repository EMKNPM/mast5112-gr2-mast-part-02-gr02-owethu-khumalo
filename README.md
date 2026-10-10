Owethu Khumalo
ST10513544
# ChefMenuApp

## About the Project

ChefMenuApp is a mobile application developed for the MAST5112 Mobile App Scripting Part 2 POE. The purpose of the app is to help chefs manage restaurant menu items by adding dish details and viewing the available items in one place.

The application was built using React Native and Expo, with Expo Router for navigation. Its design uses a simple layout and a cream and brown colour scheme to make the screens clear and easy to use.

## Features

- Add a menu item with its dish name, description, course and price.
- Display multiple menu items on the menu screen.
- Automatically update the menu when a new item is added.
- Validate required fields before adding a dish.
- Display error messages when information is missing or the price is invalid.
- Show a confirmation message when a menu item is added successfully.
- Display a message when the menu is empty.
- Navigate between the Home, Add Menu Item and Menu screens.

## Technologies Used

- React Native
- Expo
- Expo Router
- TypeScript
- Visual Studio Code
- Git and GitHub

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- Visual Studio Code
- Expo Go on your mobile device, if you want to test the app on your phone

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder in Visual Studio Code.

3. Navigate to the Expo project directory:

   ```bash
   cd ChefMenuApp
   ```

4. Install the dependencies:

   ```bash
   npm install
   ```

5. Start the application:

   ```bash
   npx expo start
   ```

6. Scan the QR code using Expo Go to open the app on your phone, or use an available emulator.

## How to Use the App

1. Open ChefMenuApp and view the Home screen.
2. Select the option to add a menu item.
3. Enter the dish name, description, course and price.
4. Press the Add Menu Item button.
5. The app validates the information, saves the item and navigates to the Menu screen.
6. View the newly added dish and its details.

## Project Structure

```text
mast5112-gr2-mast-part-02-gr02-owethu-khumalo/
└── ChefMenuApp/
    ├── app/
    │   ├── _layout.tsx
    │   ├── index.tsx
    │   ├── add-item.tsx
    │   └── menu.tsx
    ├── data/
    │   └── menuData.ts
    ├── assets/
    ├── package.json
    └── README.md
```

## Testing

The application was tested by adding menu items, checking that all required fields were completed, entering invalid prices, and confirming that new items appeared on the Menu screen. Navigation between the app screens was also tested.

## Project Information

**Module:** MAST5112 – Mobile App Scripting

**Assessment:** Practical Outcomes Evidence (POE), Part 2

**Developer:** Owethu Khumalo

## Conclusion

ChefMenuApp provides a simple way for chefs to add and view restaurant menu items. The project demonstrates the use of React Native components, state management, form validation and screen navigation in a mobile application.
