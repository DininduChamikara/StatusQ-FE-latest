// @mui
import { Box, Divider, Stack } from "@mui/material";

import ChatHeaderDetail from "./ChatHeaderDetail";
import ChatMessageInput from "./ChatMessageInput";
import ChatMessageList from "./ChatMessageList";


export default function ChatWindow() {

  const participants = [
    {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      avatar:
        "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
      name: "Lakshan Wijesinghe",
      username: "lwijesinghe",
      address: "1147 Rohan Drive Suite 819 - Burlington, VT / 82021",
      phone: "904-966-2836",
      email: "ashlynn_ohara62@gmail.com",
      position: "Full Stack Designer",
      status: "busy",
      lastActivity: "2023-01-05T16:15:22.838Z",
    },
  ];

  const activeConversationId = "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2";

  const conversation = {
    id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
    participants: [
      {
        id: "8864c717-587d-472a-929a-8e5f298024da-0",
        avatar:
          "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
        name: "Jaydon Frankie",
        username: "jaydon.frankie",
      },
      {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
        name: "Lucian Obrien",
        username: "lucian.obrien",
        avatar:
          "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
        address: "1147 Rohan Drive Suite 819 - Burlington, VT / 82021",
        phone: "904-966-2836",
        email: "ashlynn_ohara62@gmail.com",
        lastActivity: "2023-01-05T16:15:22.838Z",
        status: "busy",
        position: "Full Stack Designer",
      },
    ],
    type: "ONE_TO_ONE",
    unreadCount: 0,
    messages: [
      {
        id: "bf65820a-09b8-449b-b66f-5a354010fe16",
        body: "Hi, I'm interested in creating an ad campaign for my business. Can you help me understand the process?",
        contentType: "text",
        attachments: [
          "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_2.jpg",
        ],
        createdAt: "2023-01-06T07:15:22.849Z",
        senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      },
      {
        id: "37a7b97d-598e-4059-b7da-7ad958165b63",
        body: "Of course! I'd be happy to help. Can you tell me a bit more about what you're looking to achieve with the campaign?",
        contentType: "text",
        attachments: [
          "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_3.jpg",
        ],
        createdAt: "2023-01-06T15:15:22.849Z",
        senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
      },
      {
        id: "0e2e377e-852c-4445-bb7f-a34da376ba20",
        body: "Sure, I'm looking to increase brand awareness and drive more traffic to my website.",
        contentType: "text",
        attachments: [
          "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_12.mp4",
        ],
        createdAt: "2023-01-06T17:07:22.849Z",
        senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      },
      {
        id: "8e7e33a2-f35b-4481-a836-93f171f3aa27",
        body: "Great! The first step in the process is to determine your target audience and the messaging that will resonate with them. We can work with you to identify the demographics and interests of your target audience and create messaging that will grab their attention.",
        contentType: "text",
        attachments: [
          "https://mail.google.com/mail/u/file1.docx",
          "https://mail.google.com/mail/u/file2.xlsx",
          "https://mail.google.com/mail/u/file3.pptx",
        ],
        createdAt: "2023-01-06T17:09:22.849Z",
        senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
      },
      {
        id: "60afe060-4cf0-4b50-9462-b0017bd6bfe1",
        body: "That sounds like a good starting point. What's next?",
        contentType: "text",
        attachments: [
          "https://mail.google.com/mail/u/file4.pdf",
          "https://mail.google.com/mail/u/file5.psd",
          "https://mail.google.com/mail/u/file6.esp",
          "https://mail.google.com/mail/u/file7.sketch",
        ],
        createdAt: "2023-01-06T17:11:22.849Z",
        senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      },
    ],
  };


  const displayParticipants = participants.filter(
    (item) => item.id !== "8864c717-587d-472a-929a-8e5f298024da-0"
  );

  const handleSendMessage = async (value) => {
    try {
      // dispatch(onSendMessage(value));
      console.log("msg input is ", value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack sx={{ flexGrow: 1, minWidth: "1px" }}>
      <ChatHeaderDetail participants={displayParticipants} />

      <Divider />

      <Box sx={{ flexGrow: 1, display: "flex", overflow: "hidden" }}>
        <Stack sx={{ flexGrow: 1 }}>
          <ChatMessageList conversation={conversation} />

          <Divider />

          <ChatMessageInput
            conversationId={activeConversationId}
            onSend={handleSendMessage}
            // disabled={pathname === PATH_DASHBOARD.chat.new}
          />
        </Stack>
      </Box>
    </Stack>
  );
}
