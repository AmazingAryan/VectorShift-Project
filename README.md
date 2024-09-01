# Pipeline Builder (Internship assesment)

## Project Overview

This project is a web application that allows users to create and visualize pipelines using a drag-and-drop interface. The application is built using **React.js** for the frontend and **FastAPI** for the backend. The main features include the ability to construct pipelines, calculate properties such as the number of nodes and edges, and determine if the pipeline forms a Directed Acyclic Graph (DAG).

### Author

**Aryan Neelam**

---

## Features

### Frontend
- **Drag-and-Drop Interface**: Users can create nodes and edges to build their pipelines.
- **Interactive UI**: The frontend provides a smooth, user-friendly interface to manage and visualize pipelines.
- **Submission**: A submit button is provided to send the constructed pipeline to the backend for analysis.
- **Alert**: Upon receiving a response from the backend, an alert displays the number of nodes, edges, and whether the pipeline is a DAG.

### Backend
- **FastAPI**: The backend is built using FastAPI, which handles requests from the frontend.
- **Pipeline Parsing**: The backend receives the nodes and edges from the frontend and computes the following:
  - The number of nodes
  - The number of edges
  - Whether the pipeline forms a Directed Acyclic Graph (DAG)
- **JSON Response**: The backend responds with a JSON object containing the computed information.

---

## Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **Python** (v3.8 or higher)
- **FastAPI** framework for the backend
- **React.js** for the frontend

### Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/aryanneelam/pipeline-builder.git
    cd pipeline-builder
    ```

2. **Backend Setup**
    - Create a virtual environment and activate it:
        ```bash
        python -m venv .venv
        source .venv/bin/activate  # On Windows: .venv\Scripts\activate
        ```
    - Install dependencies:
        ```bash
        pip install -r requirements.txt
        ```
    - Run the backend server:
        ```bash
        uvicorn main:app --reload
        ```
    - The backend will be available at `http://127.0.0.1:8000`.

3. **Frontend Setup**
    - Navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    - Install the necessary dependencies:
        ```bash
        npm install
        ```
    - Start the frontend development server:
        ```bash
        npm start
        ```
    - The frontend will be available at `http://localhost:3000`.

---

## Usage

1. **Creating a Pipeline**
   - Use the drag-and-drop interface to create nodes and edges that form your pipeline.

2. **Submitting the Pipeline**
   - After constructing your pipeline, click the "Submit" button to send the data to the backend for analysis.

3. **Receiving the Results**
   - After submission, an alert will display the number of nodes, the number of edges, and whether the pipeline forms a DAG.

---

## File Structure

```plaintext
.
├── backend
│   ├── main.py         # FastAPI backend logic
│   ├── requirements.txt # Backend dependencies
│   └── .venv/          # Virtual environment for backend
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── toolbar.js      # Toolbar component
│   │   │   ├── ui.js           # UI component for pipeline visualization
│   │   │   ├── submit.js       # Submit button component
│   │   └── store.js            # Zustand store for managing state
│   ├── App.js         # Main app component
│   ├── index.js       # Entry point for the React app
│   └── package.json   # Frontend dependencies
└── README.md          # Project documentation
```

---

## Future Enhancements

- **Node Customization**: Add more options for customizing nodes (e.g., different types of operations).
- **Validation**: Implement more robust validation for the pipeline (e.g., detecting invalid connections).
- **Persistent Storage**: Save and load pipelines from a database or external file.
- **Deployment**: Deploy the application to a cloud platform for broader accessibility.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contact

If you have any questions or feedback, feel free to contact **Aryan Neelam** at [aryan191990@gmail.com](mailto:aryan191990@gmail.com).

---

This README provides a comprehensive guide to your project, including setup instructions, usage details, and an overview of the project's structure. You can adjust any section to fit your specific needs.