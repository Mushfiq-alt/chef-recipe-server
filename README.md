# KitKitchen Server

This repository contains the server-side code for the Chef Recipe application.

## Description

The KitKitchen handles API requests for chef details and popular food data.

## Installation

1. Clone this repository: `git clone https://github.com/Mushfiq-alt/chef-recipe-server.git`
2. Navigate to the project directory.
3. Install dependencies: `npm install`

## Usage

1. Run the server: `npm start`
2. The server will start at `http://localhost:5000`.

## Endpoints

### Chef Data

- `GET /chef`: Retrieves all chef details.
- `GET /chef/:id`: Retrieves details of a specific chef by ID.

### Popular Foods

- `GET /popular-foods`: Retrieves information about popular dishes.

## File Structure

- `index.js`: Main server file handling routes and API logic.
- `data/`: Contains JSON files with chef and popular dish information.

## Technologies Used

- Node.js
- Express.js
- CORS

