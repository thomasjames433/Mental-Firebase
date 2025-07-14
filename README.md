# NITC-MindCare

This is a Next.js application designed to be a compassionate AI companion for the students of NIT Calicut, providing a safe space to discuss mental wellness.

## Running the Project Locally

To run this project on your local machine, you'll need to have Node.js and a package manager like npm (which comes with Node.js) installed.

### 1. Download the Code

First, you'll need to get the source code onto your machine. If this project is in a Git repository, you can clone it. Otherwise, download the source as a ZIP file and extract it.

### 2. Install Dependencies

Navigate to the project's root directory in your terminal and run the following command to install all the necessary packages:

```bash
npm install
```

### 3. Set Up Environment Variables

This project uses Genkit with Google's Gemini models, which requires an API key.

1.  Create a new file named `.env.local` in the root of your project directory.
2.  Go to [Google AI Studio](https://aistudio.google.com/app/apikey) to generate an API key.
3.  Add the key to your `.env.local` file like this:

    ```
    GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY_HERE
    ```

    Replace `YOUR_GOOGLE_API_KEY_HERE` with the actual key you obtained.

### 4. Run the Development Server

Once the dependencies are installed and the environment variables are set, you can start the local development server:

```bash
npm run dev
```
