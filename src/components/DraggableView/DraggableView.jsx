import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { selectedReports } from "../../store/reducers/reports.slice";
import Scrollbar from "../Scrollbar";
import DraggableCard from "./DraggableCard/DraggableCard";

function DraggableView({ isDragDisabled, setSelectedFields }) {
  const [mockData, setMockData] = useState([
    {
      id: uuidv4(),
      title: "All Reports",
      fields: [
        {
          id: uuidv4(),
          title: "Users",
          value: "USERS",
        },
        {
          id: uuidv4(),
          title: "Promoters",
          value: "PROMOTERS",
        },
        {
          id: uuidv4(),
          title: "Admin",
          value: "ADMINS",
        },
        {
          id: uuidv4(),
          title: "Promoter Campaigns",
          value: "PROMOTER_CAMPAIGNS",
        },
        {
          id: uuidv4(),
          title: "Client Payments",
          value: "CLIENT_PAYMENT",
        },
        // {
        //   id: uuidv4(),
        //   title: "Promoter Payments",
        //   value: "PROMOTER_PAYMENTS",
        // },
        {
          id: uuidv4(),
          title: "System Earnings",
          value: "SYSTEM_EARNINGS",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Selections",
      fields: [
        {
          id: uuidv4(),
          title: "Campaigns",
          value: "CAMPAIGNS",
        },
      ],
    },
  ]);

  const dispatch = useDispatch();

  const { draggableViewData } = useSelector((state) => state.selectedReports);

  const [data, setData] = useState(mockData);
  // const [data, setData] = useState(draggableViewData);

  // useEffect(() => {
  //   dispatch(
  //     selectedReports({
  //       draggableViewData: data,
  //     })
  //   );
  // }, [data]);

  useEffect(() => {
    if (isDragDisabled) {
      setData(mockData);
    }
  }, [isDragDisabled]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.fields];
      const destinationTask = [...destinationCol.fields];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].fields = sourceTask;
      data[destinationColIndex].fields = destinationTask;

      setData(data);

      setSelectedFields(data[1].fields);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <Paper
                elevation={6}
                {...provided.droppableProps}
                sx={{
                  width: { xs: "100%", lg: "50%" },
                  p: { xs: 1, lg: "10px" },
                  m: { xs: 0, lg: 1 },
                }}
                ref={provided.innerRef}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 35,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.9rem", lg: "1rem" },
                      fontWeight: 700,
                      m: { xs: 0, lg: 1 },
                    }}
                  >
                    {section.title}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mt: "10px",
                    height: "363px",
                    overflowY: "auto",
                  }}
                >
                  <Scrollbar
                    sx={{
                      height: 1,
                      "& .simplebar-content": {
                        height: 1,
                        display: "flex",
                        flexDirection: "column",
                      },
                    }}
                  >
                    {section.fields.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                        isDragDisabled={isDragDisabled}
                      >
                        {(provided, snapshot) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            sx={{
                              // ...provided.dragHandleProps.style,
                              opacity: snapshot.isDragging ? 0.5 : 1,
                            }}
                          >
                            <DraggableCard task={task}></DraggableCard>
                          </Box>
                        )}
                      </Draggable>
                    ))}
                  </Scrollbar>
                </Box>
              </Paper>
            )}
          </Droppable>
        ))}
      </Box>
    </DragDropContext>
  );
}

export default DraggableView;
