# WanderLust
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
