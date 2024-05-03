# Capstone Project - Issue Tracker
<img width="1678" alt="Screenshot 2024-05-04 at 2 38 27 AM" src="https://github.com/Aunixx/capstone-project/assets/46573638/acebdb29-0731-46d4-909f-7dbe7720d48c">

## Description

This project is an issue tracker web application built using React. It allows users to manage and track issues with different statuses, categories, priorities, and tags. The 
implementation focuses highly on keeping the application performant despite handling a large dataset by following reacts best practices in terms of performance. 

## Limitations

The backend resource does not allow cross origin resource sharing, in order for the live app to work as expected kindly enable CORS in your browser, or run the app locally. 


## Features

- Filter issues by category, priority, team, and tags
- View issues categorized by status (To Do, In Progress, Review, Completed)
- Search for issues by title
- Infinite scroll for displaying large lists of issues
- Reset filters to view all issues
- Loading spinner while fetching data

## Installation

1. Clone the repository:

```
git clone <repository_url>
```

2. Navigate to the project directory:

```
cd capstone-project
```

3. Install dependencies:

```
npm install
```

4. Run the project:

```
npm start
```

5. Open the application in your browser:

```
http://localhost:3000
```

6. Run test cases:

```
npm run test
```

## Usage

1. Upon launching the application, you will see a list of issues categorized by status.
2. Use the filter area on the left to filter issues by category, priority, team, and tags.
3. You can also search for specific issues by typing in the search bar.
4. Scroll down to load more issues dynamically using infinite scroll.
5. Click on the "Reset Filter" button to clear all filters and view all issues.

## File Structure

- `src/Layout/Main.tsx`: Main component containing the main layout of the application and integrating the FilterArea and ListArea components.
- `src/Layout/ListArea/ListArea.tsx`: Component responsible for displaying issues categorized by status using the Lane component.
- `src/Layout/FilterArea/FilterArea.tsx`: Component containing filter options for categories, priorities, teams, and tags.
- `src/components/AsyncSelect/AsyncSelect.tsx`: Component for asynchronous multi-select dropdown for tags.
- `src/components/Select/Select.tsx`: Component for multi-select dropdowns for categories, priorities, and teams.
- `src/components/IssueItem/IssueItem.tsx`: Component representing individual issue items.
- `src/components/Lane/Lane.tsx`: Component representing lanes for different issue statuses.
- `src/App.css` and `src/Layout/Main.css`: Styling files for the application layout.

## Technologies Used

- React
- Axios (for HTTP requests)
- React Infinite Scroll Component (for infinite scrolling)
- React Select (for dropdowns)
- React Icons (for icons)
- CSS (for styling)

## Credits

This project was created by Sahil E Arwand.
