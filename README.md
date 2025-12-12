# WanderLust

WanderLust​‍​‌‍​‍‌​‍​‌‍​‍‌ is a full-stack web application inspired from Airbnb. It is an online platform that allows users to post listings for their homes in the case of a short vacation stay, browse and read the details of different properties, and also write their opinions and give a rating to the accommodation. The app implements the MVC (Model-View-Controller) architecture and also has features like encrypted user login, user picture storage, and user-friendly ​‍​‌‍​‍‌​‍​‌‍​‍‌maps.

## Live Project Link: [https://project-wanderlust-psi.vercel.app/listings](https://project-wanderlust-psi.vercel.app/listings)

## Features

- **User Authentication:** Secure signup and login functionality using Passport.js.
- **Listing Management:** Users can create, read, update, and delete (CRUD) their own property listings.
- **Reviews & Ratings:** Authenticated users can leave reviews and star ratings for listings.
- **Image Uploads:** Integration with Cloudinary for storing and retrieving listing images.
- **Map Integration:** Displays the location of the property on an interactive map using Mapbox.
- **Responsive Design:** Built with Bootstrap to ensure usability across various device sizes.
- **Session Management:** Uses Express Session and Connect Mongo for maintaining user sessions.
- **Flash Messages:** Provides immediate feedback to users (e.g., success or error messages).

## Tech Stack

- **Frontend:** EJS (Embedded JavaScript), HTML5, CSS3, Bootstrap 5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport.js (Local Strategy)
- **Cloud Storage:** Cloudinary
- **Maps:** Mapbox GL JS, Mapbox SDK

## Installation & Setup

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kamlesh0928/project-wanderlust.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd project-wanderlust
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add the following credentials:

    ```env
    # Cloudinary Setup (for Image Storage)
    CLOUD_NAME=your_cloudinary_cloud_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_API_SECRET=your_cloudinary_api_secret

    # Mapbox Setup (for Maps)
    MAP_TOKEN=your_mapbox_public_token

    # Database & Session Setup
    ATLASDB_URL=your_mongodb_connection_string
    SECRET=your_session_secret_key
    ```

5.  **Seed the Database (Optional):**
    To populate the database with initial sample listings, run the initialization script.
    
    ```bash
    node init/index.js
    ```
    *Note: By default, this script connects to a local MongoDB instance. If you wish to seed a cloud database, update the connection string in `init/index.js`.*

6.  **Start the Application:**
    ```bash
    node app.js
    ```
    
7.  **Access the App:**
    Open your browser and navigate to `http://localhost:8080`.


## Contributions
Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License. Please see the [LICENSE](LICENSE) file for more information.

<br>

### Thank you Shradha Ma'am for your guidance and support throughout the development of this project.
