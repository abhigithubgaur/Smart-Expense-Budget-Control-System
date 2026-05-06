import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress
} from "@mui/material";
import API from "../services/api";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newChat = [...chat, { role: "user", text: message }];
    setChat(newChat);
    setMessage("");
    setLoading(true);

    try {
      const res = await API.post("/ai/chat", {
        message: message
      });

      setChat([
        ...newChat,
        { role: "ai", text: res.data }
      ]);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        🤖 AI Financial Assistant
      </Typography>

      <Box sx={{ height: 300, overflowY: "auto", mb: 2 }}>
        {chat.map((msg, index) => (
          <Box
            key={index}
            sx={{
              textAlign: msg.role === "user" ? "right" : "left",
              mb: 1
            }}
          >
            <Typography
              sx={{
                display: "inline-block",
                p: 1,
                borderRadius: 2,
                bgcolor:
                  msg.role === "user" ? "primary.main" : "grey.300",
                color: msg.role === "user" ? "white" : "black"
              }}
            >
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          fullWidth
          label="Ask about your expenses..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" onClick={sendMessage}>
          Send
        </Button>
      </Box>

      {loading && <CircularProgress sx={{ mt: 2 }} />}
    </Paper>
  );
};

export default AIAssistant;