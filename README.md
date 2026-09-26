# FitLog — Workout Planning & Tracking App

FitLog is a modern workout planning and tracking web application built with Next.js. It allows users to browse a workout library, add exercises to their daily workout plan, save workouts for later, track workout progress, and organize exercises using sorting options.

The application is designed with a clean, dark-themed fitness interface and provides a smooth, responsive experience across desktop, tablet, and mobile devices.

## 🚀 Live Project

[Live Demo](https://fit-log-project-fawn.vercel.app/)

---

## ✨ Key Features

### 1. Workout Planning

Users can browse the workout library and add exercises to their **Today's Plan**.

- Add workouts directly from the workout cards
- Track the number of selected exercises
- Prevent duplicate workouts from being added
- Remove workouts from the daily plan
- View all selected workouts in the My Plan section

### 2. Dynamic Workout Statistics

Workout statistics update automatically based on the user's selected exercises.

The dashboard dynamically calculates:

- Total exercises
- Total workout duration
- Total calories burned

When a workout is added or removed, the statistics update immediately.

### 3. Save Workouts for Later

Users can save workouts without adding them to their current workout plan.

- Save workouts for later
- View saved workouts separately
- Remove saved workouts
- Sort saved workouts by duration, calories, or rating

### 4. Workout Progress Tracking

Users can mark exercises in their **Today's Plan** as completed.

The application keeps track of the completion status of each planned workout, allowing users to easily identify workouts they have already finished.

### 5. Sorting & Interactive User Experience

Users can organize their workouts using the sorting dropdown.

Available sorting options:

- Duration
- Calories
- Rating

The application also provides toast notifications using React Toastify for important user actions such as adding, saving, removing, and completing workouts.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Next.js | Build the application and UI |
| React | Build reusable components and manage UI interactions |
| Next.js App Router | Handle page navigation and application routing |
| Tailwind CSS | Styling, layout, and responsive design |
| DaisyUI | UI components such as buttons, tabs, select elements, and skeleton loaders |
| React Context API | Manage workout plan and saved workout state globally |
| React Toastify | Display user feedback and action notifications |
| JavaScript (ES6+) | Application logic and functionality |
| REST API | Fetch workout data dynamically |
| LocalStorage | Persist workout plan and saved workouts after page refresh |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── FitnessCard.jsx
│   │   ├── PlanCard.jsx
│   │   ├── SaveCard.jsx
│   │   └── FitnessLibrarySkeleton.jsx
│   │
│   ├── context/
│   │   └── workoutcontext.jsx
│   │
│   ├── my-plan/
│   │   └── page.jsx
│   │
│   ├── workouts/
│   │   └── page.jsx
│   │
│   ├── layout.jsx
│   └── page.jsx
│
└── public/
    └── assets/
