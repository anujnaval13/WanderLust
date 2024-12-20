# WanderLust

**WanderLust** is a full-stack web application designed for exploring, creating, and managing travel-related listings. Users can browse various listings, create new ones, leave reviews, and manage their account information. It is built using the **MERN stack** with additional libraries for authentication and user experience.

## Features

- **User Authentication**: 
  - Secure sign-up, login, and logout using Passport.js.
  - User sessions managed with `express-session`.

- **Listings Management**:
  - Create, view, edit, and delete travel listings.
  - Each listing includes details such as title, description, images, and ratings.
  - Integrated middleware for validation and error handling.

- **Reviews**:
  - Add reviews to listings with comments and ratings.
  - Manage review permissions and ensure authenticated interactions.

- **Flash Messages**:
  - Success and error messages using `connect-flash` for better user feedback.

- **Secure Routes**:
  - Middleware to restrict access to certain features to logged-in users.

## Technology Stack

### Backend
- **Node.js** with **Express.js**: Backend framework.
- **Mongoose**: MongoDB object modeling for the database.
- **Passport.js**: Authentication middleware.

### Frontend
- **EJS**: Server-side rendering of views.
- **Bootstrap**: UI components for responsive design.

### Database
- **MongoDB**: Document database for storing user, listing, and review data.

## File Structure

- **`models`**: Mongoose schemas for Listings, Reviews, and Users.
- **`routes`**: Modular route handlers for Listings, Reviews, and Users.
- **`views`**: EJS templates for rendering the frontend.
- **`public`**: Static assets like CSS, JavaScript, and images.
- **`utils`**: Reusable utilities like custom error handling and async wrapper functions.

## Installation

### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running locally.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/username/WanderLust.git
   cd WanderLust

2. Install dependencies:
    ```bash
    npm install

3. Set up MongoDB:
    Ensure MongoDB is running locally or replace the mongoURL in app.js with your MongoDB URI.

4. Start the server:
    ```bash
    node app.js

5. Open the application in your browser at http://localhost:8080

### Usage
1. Register for an account
2. Browse or search for listings.
3. Create a new listing using the /listings/new route.
4. Leave reviews on existing listings.
5. Edit or delete your listings if necessary.

### Future Enhancements
1. Implement user roles (e.g., admin privileges).
2. Add advanced search and filter options for listings.
3. Improve UI with modern frameworks like React.
