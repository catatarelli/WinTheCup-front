# Data Layer

## Data

- Users array. {email: string, password: string, email: string, predictions: object}

## Data Modifications

- Create a new user, create modify and delete prediction.

# Components

## App

### Show data

- Show Register and Login form when you are not logged in.
- Show Predictions List when logged in.

### Get actions

- Get the array of predictions from the API and pass it to the list.

## PredictionCard

### Show data

- Show the information of the recevied prediction (image, match, score).
- Show edit and delete button

### Get actions

- Go to edit/delete form on tap

## PredictionList

### Show data

- Show PredictionCards.

## PredictionDetail

### Show data

- Show the information of the received prediction (image, match, score, red cards, yellow cards, penalties)
- Show edit and delete button

### Get actions

- Go to edit/delete form on tap

## LoginForm

### Show data

- Show the created inputs.

### Get actions

- Login a user when the introduced credentials are ok.

## RegisterForm

### Show data

- Show the created inputs.

### Get actions

- Create a new user with the introduced data.

## Button

### Show data

- Show the text received inside the button.

### Get actions

- Call the received action on tap.

## Navigation Bar

### Show data

- Show the navigation links

### Get actions

- Navigate through pages on tap

## Loading

### Show data

- Show visual loading

## Feedback

### Show data

- Show the text received with the corresponding color (error, success)
