"use client";

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  TextField,
  Button,
  Fab,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Implement Drag-and-Drop",
      description:
        "Complete the drag-and-drop functionality for tasks within and between columns using @hello-pangea/dnd.",
      priority: "High",
      assignee: "Tushar Ganotra",
      dueDate: "2025-08-01",
      status: "to-do",
    },
    "task-2": {
      id: "task-2",
      title: "Design Database Schema",
      description:
        "Finalize the database schema for user authentication and task storage.",
      priority: "High",
      assignee: "Tushar Ganotra",
      dueDate: "2025-08-05",
      status: "to-do",
    },
    "task-3": {
      id: "task-3",
      title: "Set up Project Environment",
      description: "Configure React, Node.js, and database connections.",
      priority: "Medium",
      assignee: "Tushar Ganotra",
      dueDate: "2025-07-28",
      status: "in-progress",
    },
    "task-4": {
      id: "task-4",
      title: "Develop API Endpoints",
      description:
        "Create RESTful API endpoints for task creation, retrieval, update, and deletion.",
      priority: "High",
      assignee: "Tushar Ganotra",
      dueDate: "2025-08-10",
      status: "in-progress",
    },
    "task-5": {
      id: "task-5",
      title: "Write Unit Tests",
      description:
        "Develop comprehensive unit tests for all backend and frontend components.",
      priority: "Medium",
      assignee: "Tushar Ganotra",
      dueDate: "2025-08-15",
      status: "done",
    },
    "task-6": {
      id: "task-6",
      title: "Prepare Documentation",
      description:
        "Create user manuals and developer documentation for the project.",
      priority: "Low",
      assignee: "Tushar Ganotra",
      dueDate: "2025-08-20",
      status: "done",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-3", "task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-5", "task-6"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "error";
    case "Medium":
      return "warning";
    case "Low":
      return "success";
    default:
      return "default";
  }
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    assignee: "",
    dueDate: "",
    status: "column-1", // Default to the first column
  });
  const [editingTaskDescription, setEditingTaskDescription] = useState(null);
  const [editedDescription, setEditedDescription] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const theme = useTheme();

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    // Moving within the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // Moving from one column to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const updatedTask = {
      ...data.tasks[draggableId],
      status: newFinish.id,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
      tasks: {
        ...data.tasks,
        [draggableId]: updatedTask,
      },
    });
  };

  const handleAddTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTaskSubmit = () => {
    if (!newTask.title.trim()) {
      setSnackbarMessage("Task title is required.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    const newTaskId = `task-${Object.keys(data.tasks).length + 1}`;
    const taskToAdd = {
      ...newTask,
      id: newTaskId,
      status: newTask.status,
    };

    setData((prevData) => {
      const updatedTasks = {
        ...prevData.tasks,
        [newTaskId]: taskToAdd,
      };

      const updatedColumns = {
        ...prevData.columns,
        [newTask.status]: {
          ...prevData.columns[newTask.status],
          taskIds: [...prevData.columns[newTask.status].taskIds, newTaskId],
        },
      };

      return {
        ...prevData,
        tasks: updatedTasks,
        columns: updatedColumns,
      };
    });

    setNewTask({
      title: "",
      description: "",
      priority: "Low",
      assignee: "",
      dueDate: "",
      status: data.columnOrder[0],
    });
    setOpenAddTaskModal(false);
    setSnackbarMessage("Task added successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const deleteTask = (taskId, columnId) => {
    setData((prevData) => {
      const updatedTasks = { ...prevData.tasks };
      delete updatedTasks[taskId];

      const updatedColumnTaskIds = prevData.columns[columnId].taskIds.filter(
        (id) => id !== taskId
      );
      const updatedColumns = {
        ...prevData.columns,
        [columnId]: {
          ...prevData.columns[columnId],
          taskIds: updatedColumnTaskIds,
        },
      };

      return {
        ...prevData,
        tasks: updatedTasks,
        columns: updatedColumns,
      };
    });
    setSnackbarMessage("Task deleted successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const startEditingDescription = (taskId) => {
    setEditingTaskDescription(taskId);
    setEditedDescription(data.tasks[taskId].description);
  };

  const saveDescription = (taskId) => {
    setData((prevData) => ({
      ...prevData,
      tasks: {
        ...prevData.tasks,
        [taskId]: {
          ...prevData.tasks[taskId],
          description: editedDescription,
        },
      },
    }));
    setEditingTaskDescription(null);
    setEditedDescription("");
    setSnackbarMessage("Description updated successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const cancelEditingDescription = () => {
    setEditingTaskDescription(null);
    setEditedDescription("");
  };

  useEffect(() => {
    if (data.columnOrder.length > 0 && newTask.status === "") {
      setNewTask((prev) => ({ ...prev, status: data.columnOrder[0] }));
    }
  }, [data.columnOrder, newTask.status]);

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: " rgb(224, 224, 250);",
        position: "relative",
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid
          container
          spacing={3}
          wrap="nowrap"
          sx={{ overflowX: "auto", pb: 2 }}
        >
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
              <Grid
                key={column.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ minWidth: 300 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardHeader
                    title={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">{column.title}</Typography>
                        <Chip label={tasks.length} size="small" />
                      </Box>
                    }
                    sx={{ pb: 1 }}
                  />
                  <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                      <CardContent
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        sx={{
                          flexGrow: 1,
                          backgroundColor: snapshot.isDraggingOver
                            ? theme.palette.action.hover
                            : theme.palette.background.paper,
                          transition: "background-color 0.2s ease",
                          minHeight: 100,
                          p: 1,
                        }}
                      >
                        {tasks.length === 0 && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ p: 2, textAlign: "center" }}
                          >
                            No tasks in this column.
                          </Typography>
                        )}
                        {tasks.map((task, index) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Card
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                sx={{
                                  mb: 1.5,
                                  p: 1.5,
                                  backgroundColor: snapshot.isDragging
                                    ? theme.palette.primary.light
                                    : theme.palette.background.paper,
                                  boxShadow: snapshot.isDragging
                                    ? theme.shadows[6]
                                    : theme.shadows[1],
                                  display: "flex",
                                  flexDirection: "column",
                                  transition:
                                    "background-color 0.2s ease, box-shadow 0.2s ease",
                                  "&:hover .task-actions": {
                                    opacity: 1,
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    variant="subtitle1"
                                    fontWeight="medium"
                                  >
                                    {task.title}
                                  </Typography>
                                  <Box
                                    className="task-actions"
                                    sx={{
                                      opacity: { xs: 1, md: 0 },
                                      transition: "opacity 0.3s",
                                    }}
                                  >
                                    <IconButton
                                      size="small"
                                      aria-label="edit task"
                                    >
                                      <EditIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                      size="small"
                                      onClick={() =>
                                        deleteTask(task.id, column.id)
                                      }
                                      aria-label="delete task"
                                    >
                                      <DeleteIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                      size="small"
                                      {...provided.dragHandleProps}
                                      aria-label="drag handle"
                                    >
                                      <DragIndicatorIcon fontSize="small" />
                                    </IconButton>
                                  </Box>
                                </Box>

                                {editingTaskDescription === task.id ? (
                                  <Box sx={{ mt: 1 }}>
                                    <TextField
                                      fullWidth
                                      multiline
                                      rows={3}
                                      value={editedDescription}
                                      onChange={(e) =>
                                        setEditedDescription(e.target.value)
                                      }
                                      variant="outlined"
                                      size="small"
                                    />
                                    <Box
                                      sx={{
                                        mt: 1,
                                        display: "flex",
                                        justifyContent: "flex-end",
                                      }}
                                    >
                                      <Button
                                        size="small"
                                        onClick={() => saveDescription(task.id)}
                                        startIcon={<CheckIcon />}
                                        sx={{ mr: 1 }}
                                      >
                                        Save
                                      </Button>
                                      <Button
                                        size="small"
                                        onClick={cancelEditingDescription}
                                        startIcon={<CloseIcon />}
                                      >
                                        Cancel
                                      </Button>
                                    </Box>
                                  </Box>
                                ) : (
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mt: 0.5, mb: 1 }}
                                  >
                                    {task.description}
                                    <IconButton
                                      size="small"
                                      onClick={() =>
                                        startEditingDescription(task.id)
                                      }
                                      sx={{ ml: 0.5 }}
                                    >
                                      <EditIcon fontSize="inherit" />
                                    </IconButton>
                                  </Typography>
                                )}

                                <Box
                                  sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 1,
                                    alignItems: "center",
                                    mt: 1,
                                  }}
                                >
                                  <Chip
                                    label={task.priority}
                                    color={getPriorityColor(task.priority)}
                                    size="small"
                                  />
                                  {task.assignee && (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <PersonIcon
                                        sx={{ fontSize: 16, mr: 0.5 }}
                                        color="action"
                                      />
                                      <Typography
                                        variant="caption"
                                        color="text.secondary"
                                      >
                                        {task.assignee}
                                      </Typography>
                                    </Box>
                                  )}
                                  {task.dueDate && (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <CalendarMonthIcon
                                        sx={{ fontSize: 16, mr: 0.5 }}
                                        color="action"
                                      />
                                      <Typography
                                        variant="caption"
                                        color="text.secondary"
                                      >
                                        {task.dueDate}
                                      </Typography>
                                    </Box>
                                  )}
                                </Box>
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </CardContent>
                    )}
                  </Droppable>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </DragDropContext>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={() => setOpenAddTaskModal(true)}
      >
        <AddIcon />
      </Fab>

      {openAddTaskModal && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
          }}
          onClick={() => setOpenAddTaskModal(false)}
        >
          <Card
            sx={{ p: 4, width: 400, maxWidth: "90%", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton
              sx={{ position: "absolute", top: 8, right: 8 }}
              onClick={() => setOpenAddTaskModal(false)}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" gutterBottom>
              Add New Task
            </Typography>
            <TextField
              fullWidth
              label="Task Title"
              name="title"
              value={newTask.title}
              onChange={handleAddTaskChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={newTask.description}
              onChange={handleAddTaskChange}
              margin="normal"
              multiline
              rows={3}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Priority</InputLabel>
              <Select
                name="priority"
                value={newTask.priority}
                label="Priority"
                onChange={handleAddTaskChange}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Assignee"
              name="assignee"
              value={newTask.assignee}
              onChange={handleAddTaskChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Due Date"
              name="dueDate"
              type="date"
              value={newTask.dueDate}
              onChange={handleAddTaskChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Add to Column</InputLabel>
              <Select
                name="status"
                value={newTask.status}
                label="Add to Column"
                onChange={handleAddTaskChange}
              >
                {data.columnOrder.map((columnId) => (
                  <MenuItem key={columnId} value={columnId}>
                    {data.columns[columnId].title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddTaskSubmit}
              sx={{ mt: 2 }}
              fullWidth
            >
              Add Task
            </Button>
          </Card>
        </Box>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

function DailyTask() {
  return (
    <div className="rightdashboardarea">
      <div className="dashboardwrappewr">
        <h4 style={{ marginBottom: "0px" }}>Task Board</h4>
      </div>

      <div className="dashboardcontent">
        <KanbanBoard />
      </div>
    </div>
  );
}

export default DailyTask;
