import React from "react";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "To be done",
      backgroundColor: "#fff",
      cards: [
        {
          id: 1,
          title: "Task 1",
          description: "Task 1 content",
        },
        {
          id: 2,
          title: " Task 2",
          description: "Task 2 content",
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 4,
          title: "Task 1 ",
          description: "Task 1",
        },
      ],
    },
    {
      id: 3,
      title: "Done",
      cards: [
        {
          id: 5,
          title: "Task 5 ",
          description: "Task 5 done",
        },
      ],
    },
    {
      id: 4,
      title: "Backlog",
      cards: [],
    },
  ],
};

function UncontrolledBoard() {
  return (
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={(draftCard) => ({
        id: new Date().getTime(),
        ...draftCard,
      })}
      onCardNew={console.log}
    />
  );
}

function DailyTask() {
  return (
    <div className="rightdashboardarea">
      <div className="dashboardwrappewr">
        <h4 style={{ marginBottom: "0px" }}>Task Board</h4>
      </div>

      <div className="dashboardcontent">
        <UncontrolledBoard />
      </div>
    </div>
  );
}

export default DailyTask;
