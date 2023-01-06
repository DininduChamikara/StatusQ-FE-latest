import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Box, Stack, Drawer, IconButton } from "@mui/material";

import ChatAccount from "./ChatAccount";
import ChatSearchResults from "./ChatSearchResults";
import ChatContactSearch from "./ChatContactSearch";
import ChatConversationList from "./ChatConversationList";
import useResponsive from "../../hooks/useResponsive";
import Iconify from "../../components/Iconify";
import Scrollbar from "../../components/Scrollbar";

// ----------------------------------------------------------------------

const ToggleButtonStyle = styled((props) => (
  <IconButton disableRipple {...props} />
))(({ theme }) => ({
  left: 0,
  zIndex: 9,
  width: 32,
  height: 32,
  position: "absolute",
  top: theme.spacing(13),
  borderRadius: `0 12px 12px 0`,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.customShadows.primary,
  "&:hover": {
    backgroundColor: theme.palette.primary.darker,
  },
}));

// ----------------------------------------------------------------------

const SIDEBAR_WIDTH = 320;
const SIDEBAR_COLLAPSE_WIDTH = 96;

export default function ChatSidebar() {
  const theme = useTheme();

  const { pathname } = useLocation();

  const [openSidebar, setOpenSidebar] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [isSearchFocused, setSearchFocused] = useState(false);

  // const { conversations, activeConversationId } = useSelector((state) => state.chat);
  ////// Dinindu
  const conversations = {
    byId: {
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2": {
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
            lastActivity: "2023-01-05T14:59:00.568Z",
            status: "online",
            position: "Full Stack Designer",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 0,
        messages: [
          {
            id: "dbf52d4c-9c8b-439d-9182-8e07853836de",
            body: "Quis veniam aut saepe aliquid nulla.",
            contentType: "text",
            attachments: [
              "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_2.jpg",
            ],
            createdAt: "2023-01-06T05:59:00.569Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
          },
          {
            id: "95d25e9a-6a6c-46c1-82e5-af2a52df5210",
            body: "Reprehenderit ut voluptas sapiente ratione nostrum est.",
            contentType: "text",
            attachments: [
              "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_3.jpg",
            ],
            createdAt: "2023-01-06T13:59:00.569Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "60cea1c7-b6cc-45f7-adf6-2f8e8c2935df",
            body: "Error ut sit vel molestias velit.",
            contentType: "text",
            attachments: [
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_12.mp4",
            ],
            createdAt: "2023-01-06T15:51:00.569Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
          },
          {
            id: "9545e4b7-34f3-4967-8032-4fec5250f18d",
            body: "Quo quia sit nihil nemo doloremque et.",
            contentType: "text",
            attachments: [
              "https://mail.google.com/mail/u/file1.docx",
              "https://mail.google.com/mail/u/file2.xlsx",
              "https://mail.google.com/mail/u/file3.pptx",
            ],
            createdAt: "2023-01-06T15:53:00.569Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "c1eb03aa-fa11-4844-95db-07504e9f87e1",
            body: "Autem doloribus harum vero laborum.",
            contentType: "text",
            attachments: [
              "https://mail.google.com/mail/u/file4.pdf",
              "https://mail.google.com/mail/u/file5.psd",
              "https://mail.google.com/mail/u/file6.esp",
              "https://mail.google.com/mail/u/file7.sketch",
            ],
            createdAt: "2023-01-06T15:55:00.569Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
          },
          {
            id: "1f07a736-87a8-4117-a1a5-64aac8a44980",
            attachments: [],
            contentType: "image",
            body: "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_5.jpg",
            createdAt: "2023-01-06T15:57:00.569Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
          },
          {
            id: "32f78a96-b2c8-4eba-983d-343dd0f34ad1",
            contentType: "text",
            body: "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
            attachments: [],
            createdAt: "2023-01-06T15:57:00.569Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "0c6dedb9-7f6a-4355-ba1c-c3882972c998",
            body: "Voluptas sunt magni adipisci praesentium saepe.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T15:57:00.569Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
            name: "Deja Brady",
            username: "deja.brady",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg",
            address: "18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337",
            phone: "399-757-9909",
            email: "milo.farrell@hotmail.com",
            lastActivity: "2023-01-04T13:59:00.568Z",
            status: "busy",
            position: "Backend Developer",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 0,
        messages: [
          {
            id: "0445406f-d38a-46fb-b64d-b284bd72d290",
            body: "Ea architecto quas voluptates voluptas earum illo est vel rem.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T07:59:00.570Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
          },
          {
            id: "c288f1f6-db8b-430a-b534-bf5cdbcd32dc",
            body: "Ipsum expedita reiciendis ut.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T09:59:00.570Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "eb3dbc16-2b10-4e00-9d56-2b4f49bf83fb",
            body: "Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T11:29:00.570Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
          },
          {
            id: "626ea2f7-09d0-4891-ab08-9de80a9d43ce",
            body: "Reiciendis enim officiis cupiditate eaque distinctio laudantium modi similique consequatur.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T13:44:00.570Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "eb1d0ae3-bace-43e9-a109-1bf407471625",
            body: "Ab autem consequatur itaque mollitia ipsum cupiditate error repudiandae nobis.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T14:44:00.570Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
          },
          {
            id: "bfb8c4af-2c51-493e-b737-c9b1476d09e0",
            body: "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_8.jpg",
            attachments: [],
            contentType: "image",
            createdAt: "2023-01-06T14:59:00.570Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
          },
          {
            id: "4bd27706-ffd1-46b2-bbd9-4932888e738f",
            body: "Distinctio architecto debitis eligendi consequatur unde id modi accusantium possimus.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T15:14:00.570Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
            name: "Harrison Stein",
            username: "harrison.stein",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg",
            address: "110 Lamar Station Apt. 730 - Hagerstown, OK / 49808",
            phone: "692-767-2903",
            email: "violet.ratke86@yahoo.com",
            lastActivity: "2023-01-03T02:45:36.448Z",
            status: "offline",
            position: "UX Designer",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 0,
        messages: [
          {
            id: "7084f5a6-dba9-41c1-a1ef-523e9480a996",
            body: "At ut voluptate accusantium.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-05T21:45:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
          },
          {
            id: "85b5335b-e940-4a87-bf23-ab30e1d24271",
            body: "Repudiandae ut qui veritatis sint.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-05T23:45:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "e600b5b8-b6a9-4687-aaea-e08f35ee8018",
            body: "Laboriosam blanditiis quo sed et qui esse ipsam necessitatibus sed.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T01:15:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
          },
          {
            id: "d42e650d-6f59-4d4a-99ac-e47a51b3fe49",
            body: "Et molestiae et excepturi maxime omnis.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T03:30:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "de3e2051-80ea-4830-86bc-945abe8bd337",
            body: "Sint dolorem quam eum magnam.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T04:30:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
          },
          {
            id: "42027325-a358-4a8a-813f-86f554a223c6",
            body: "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_6.jpg",
            contentType: "image",
            attachments: [],
            createdAt: "2023-01-06T04:45:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
          },
          {
            id: "0d4f8c07-ef42-4179-87ec-897aee29f702",
            body: "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_7.jpg",
            contentType: "image",
            attachments: [],
            createdAt: "2023-01-06T04:45:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
            name: "Reece Chung",
            username: "reece.chung",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg",
            address: "36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836",
            phone: "990-588-5716",
            email: "letha_lubowitz24@yahoo.com",
            lastActivity: "2023-01-02T01:45:36.448Z",
            status: "online",
            position: "UX Designer",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 2,
        messages: [
          {
            id: "6d285743-d859-400f-9f6e-ea097f304854",
            body: "Rerum ut iusto iste quam voluptatem necessitatibus.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-05T19:45:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
          },
          {
            id: "14e57b0d-11a3-4e34-a3a8-a0b77cc6eda2",
            body: "Et quam in.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T03:45:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "5c223025-bd3c-4018-a06d-e6e123fdb2db",
            body: "Fugit esse tenetur.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:40:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
          },
          {
            id: "c322419a-6922-4879-8a8c-cafd8bf13543",
            body: "Dolorem dolor porro nihil cupiditate molestiae deserunt ut.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:42:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "57f7e63d-6cc2-4c44-a046-ef17df9f24eb",
            body: "Omnis beatae eos eius aut molestias laboriosam laborum et optio.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "806a73fc-923a-45f6-a9df-01b8b286229a",
            body: "Ut veniam quam assumenda ut voluptatibus ducimus accusamus.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
            name: "Lainey Davidson",
            username: "lainey.davidson",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_6.jpg",
            address:
              "2089 Runolfsson Harbors Suite 886 - Chapel Hill, TX / 32827",
            phone: "955-439-2578",
            email: "aditya_greenfelder31@gmail.com",
            lastActivity: "2023-01-01T00:45:36.448Z",
            status: "away",
            position: "Project Manager",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 0,
        messages: [
          {
            id: "89972058-d829-4c3c-8431-ff806d7bc02f",
            body: "Quos dignissimos neque omnis reiciendis voluptatem ducimus.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "ba5f1b90-f37c-48bc-b81b-9d6022418672",
            body: "Laboriosam quia ut esse.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
            name: "Cristopher Cardenas",
            username: "cristopher.cardenas",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg",
            address:
              "279 Karolann Ports Apt. 774 - Prescott Valley, WV / 53905",
            phone: "226-924-4058",
            email: "lenna_bergnaum27@hotmail.com",
            lastActivity: "2022-12-30T23:45:36.448Z",
            status: "online",
            position: "Leader",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 2,
        messages: [
          {
            id: "58a20f4e-15d2-4692-813a-053379d75289",
            body: "Sit reiciendis nihil qui molestias et.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "f2de17d8-ec62-4cec-9698-e037d5e390b0",
            body: "Facilis cupiditate minima ratione quaerat omnis velit non ex totam.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
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
            lastActivity: "2023-01-05T04:45:36.446Z",
            status: "online",
            position: "Full Stack Designer",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
            name: "Deja Brady",
            username: "deja.brady",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg",
            address: "18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337",
            phone: "399-757-9909",
            email: "milo.farrell@hotmail.com",
            lastActivity: "2023-01-04T03:45:36.448Z",
            status: "away",
            position: "Backend Developer",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
            name: "Reece Chung",
            username: "reece.chung",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg",
            address: "36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836",
            phone: "990-588-5716",
            email: "letha_lubowitz24@yahoo.com",
            lastActivity: "2023-01-02T01:45:36.448Z",
            status: "online",
            position: "UX Designer",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
            name: "Harrison Stein",
            username: "harrison.stein",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg",
            address: "110 Lamar Station Apt. 730 - Hagerstown, OK / 49808",
            phone: "692-767-2903",
            email: "violet.ratke86@yahoo.com",
            lastActivity: "2023-01-03T02:45:36.448Z",
            status: "offline",
            position: "UX Designer",
          },
        ],
        type: "GROUP",
        unreadCount: 5,
        messages: [
          {
            id: "a54abf66-a15e-4f2d-b318-256f363f14d5",
            body: "Provident sint esse voluptatem voluptas eveniet est.",
            contentType: "text",
            attachments: [
              "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_2.jpg",
              "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_3.jpg",
              "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_4.jpg",
              "https://minimal-assets-api.vercel.app/assets/images/feeds/feed_5.jpg",
              "https://mail.google.com/mail/u/file1.docx",
            ],
            createdAt: "2023-01-03T03:15:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "6ec99d7b-7022-4496-9a0a-a7a76da027f8",
            body: "Molestias consequatur ea facilis.",
            contentType: "text",
            attachments: ["https://mail.google.com/mail/u/file2.xlsx"],
            createdAt: "2023-01-03T03:16:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
          },
          {
            id: "0719cf4b-46d0-40b1-8d54-01c22312f815",
            body: "Tempora voluptatibus autem ut ut porro quae delectus dolorum.",
            contentType: "text",
            attachments: ["https://mail.google.com/mail/u/file3.psd"],
            createdAt: "2023-01-03T03:17:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
          },
          {
            id: "5a99b73c-2728-4733-8b38-7b6543ff514d",
            body: "Et consequatur amet nemo ducimus voluptatem placeat voluptas.",
            contentType: "text",
            attachments: ["https://mail.google.com/mail/u/file3.pptx"],
            createdAt: "2023-01-03T03:18:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
          },
          {
            id: "754e53f6-1fbe-435b-b32e-be652426bfc2",
            body: "Modi iste atque hic voluptas sit quis deleniti quas consequatur.",
            contentType: "text",
            attachments: ["https://mail.google.com/mail/u/file3.ai"],
            createdAt: "2023-01-03T03:19:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "389b2008-219c-426c-af09-e4b12f11c95e",
            body: "Omnis est aliquid odio mollitia aliquid ex.",
            contentType: "text",
            attachments: ["https://mail.google.com/mail/u/file3.mp4"],
            createdAt: "2023-01-03T05:45:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
            name: "Melanie Noble",
            username: "melanie.noble",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg",
            address:
              "96607 Claire Square Suite 591 - St. Louis Park, HI / 40802",
            phone: "552-917-1454",
            email: "luella.ryan33@gmail.com",
            lastActivity: "2022-12-29T22:45:36.448Z",
            status: "offline",
            position: "Backend Developer",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 0,
        messages: [
          {
            id: "069c30b9-8867-4427-bf65-edb5fb9462f1",
            body: "Officia possimus veniam quod molestias.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "d1cec53d-0b65-4e12-a6f7-d89093e2cb1d",
            body: "Quis veniam aut saepe aliquid nulla.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
            name: "Chase Day",
            username: "chase.day",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg",
            address: "9388 Auer Station Suite 573 - Honolulu, AK / 98024",
            phone: "285-840-9338",
            email: "joana.simonis84@gmail.com",
            lastActivity: "2022-12-28T21:45:36.448Z",
            status: "offline",
            position: "Project Manager",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 0,
        messages: [
          {
            id: "31ca6a18-b8e0-4f97-a5ed-087df762c65e",
            body: "Reprehenderit ut voluptas sapiente ratione nostrum est.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "a573495c-bfcb-4860-b8c7-e7f66ee4090c",
            body: "Error ut sit vel molestias velit.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
            name: "Shawn Manning",
            username: "shawn.manning",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_10.jpg",
            address: "47665 Adaline Squares Suite 510 - Blacksburg, NE / 53515",
            phone: "306-269-2446",
            email: "marjolaine_white94@gmail.com",
            lastActivity: "2022-12-27T20:45:36.448Z",
            status: "busy",
            position: "UI Designer",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 0,
        messages: [
          {
            id: "7ca366c9-0dc5-4123-8bd3-ca8e681780ad",
            body: "Quo quia sit nihil nemo doloremque et.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "c29a628a-3429-4e0f-9e68-33c984408f69",
            body: "Autem doloribus harum vero laborum.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b12": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b12",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
            name: "Cristopher Cardenas",
            username: "cristopher.cardenas",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg",
            address:
              "279 Karolann Ports Apt. 774 - Prescott Valley, WV / 53905",
            phone: "226-924-4058",
            email: "lenna_bergnaum27@hotmail.com",
            lastActivity: "2022-12-30T23:45:36.448Z",
            status: "online",
            position: "Leader",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
            name: "Melanie Noble",
            username: "melanie.noble",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg",
            address:
              "96607 Claire Square Suite 591 - St. Louis Park, HI / 40802",
            phone: "552-917-1454",
            email: "luella.ryan33@gmail.com",
            lastActivity: "2022-12-29T22:45:36.448Z",
            status: "offline",
            position: "Backend Developer",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
            name: "Chase Day",
            username: "chase.day",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg",
            address: "9388 Auer Station Suite 573 - Honolulu, AK / 98024",
            phone: "285-840-9338",
            email: "joana.simonis84@gmail.com",
            lastActivity: "2022-12-28T21:45:36.448Z",
            status: "offline",
            position: "Project Manager",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
            name: "Shawn Manning",
            username: "shawn.manning",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_10.jpg",
            address: "47665 Adaline Squares Suite 510 - Blacksburg, NE / 53515",
            phone: "306-269-2446",
            email: "marjolaine_white94@gmail.com",
            lastActivity: "2022-12-27T20:45:36.448Z",
            status: "busy",
            position: "UI Designer",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11",
            name: "Soren Durham",
            username: "soren.durham",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_11.jpg",
            address: "989 Vernice Flats Apt. 183 - Billings, NV / 04147",
            phone: "883-373-6253",
            email: "vergie_block82@hotmail.com",
            lastActivity: "2022-12-26T19:45:36.448Z",
            status: "offline",
            position: "UI/UX Designer",
          },
        ],
        type: "GROUP",
        unreadCount: 0,
        messages: [
          {
            id: "52478a1b-0be6-4c69-9b66-182dff489ac7",
            body: "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-03T03:15:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "6ffc327b-4f70-4b04-8bf5-5c768c7ee029",
            body: "Voluptas sunt magni adipisci praesentium saepe.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-03T03:16:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
          },
          {
            id: "9ed1dc25-0491-48b0-9619-9f98356f7bc7",
            body: "Ea architecto quas voluptates voluptas earum illo est vel rem.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-03T03:17:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11",
          },
          {
            id: "5f9ca58f-7772-4470-81f0-01b46bd34489",
            body: "Ipsum expedita reiciendis ut.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-03T03:18:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
          },
          {
            id: "3e6c3e7c-8279-4f21-8ae9-43694cd26b4a",
            attachments: [],
            body: "Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.",
            contentType: "text",
            createdAt: "2023-01-03T03:19:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "65d12011-6db4-440d-bbf3-7625af10afa0",
            body: "Reiciendis enim officiis cupiditate eaque distinctio laudantium modi similique consequatur.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-03T05:45:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
          },
          {
            id: "ae25ba93-a17e-4e3d-8912-99d13cf4c4f8",
            body: "Ab autem consequatur itaque mollitia ipsum cupiditate error repudiandae nobis.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-03T05:45:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
          },
        ],
      },
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b13": {
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b13",
        participants: [
          {
            id: "8864c717-587d-472a-929a-8e5f298024da-0",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_15.jpg",
            name: "Jaydon Frankie",
            username: "jaydon.frankie",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11",
            name: "Soren Durham",
            username: "soren.durham",
            avatar:
              "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_11.jpg",
            address: "989 Vernice Flats Apt. 183 - Billings, NV / 04147",
            phone: "883-373-6253",
            email: "vergie_block82@hotmail.com",
            lastActivity: "2022-12-26T19:45:36.448Z",
            status: "offline",
            position: "UI/UX Designer",
          },
        ],
        type: "ONE_TO_ONE",
        unreadCount: 0,
        messages: [
          {
            id: "6f1abe12-6311-4d54-b780-9687d1985bac",
            body: "Distinctio architecto debitis eligendi consequatur unde id modi accusantium possimus.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "8864c717-587d-472a-929a-8e5f298024da-0",
          },
          {
            id: "2ae6d209-5a27-4253-9853-6ce8a1d6f6f6",
            body: "At ut voluptate accusantium.",
            contentType: "text",
            attachments: [],
            createdAt: "2023-01-06T05:44:36.449Z",
            senderId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11",
          },
        ],
      },
    },
    allIds: [
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b12",
      "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b13",
    ],
  };

  const activeConversationId = "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3";

  //////

  const isDesktop = useResponsive("up", "md");

  const displayResults = searchQuery && isSearchFocused;

  const isCollapse = isDesktop && !openSidebar;

  useEffect(() => {
    if (!isDesktop) {
      return handleCloseSidebar();
    }
    return handleOpenSidebar();
  }, [isDesktop, pathname]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!openSidebar) {
      return setSearchFocused(false);
    }
  }, [openSidebar]);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const handleToggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const handleClickAwaySearch = () => {
    setSearchFocused(false);
    setSearchQuery("");
  };

  const handleChangeSearch = async (event) => {


    try {
        const { value } = event.target;
        setSearchQuery(value);
        if (value) {
        //   const response = await axios.get('/api/chat/search', {
        //     params: { query: value },
        //   });
        //   setSearchResults(response.data.results);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error(error);
      }

    // setSearchResults([
    //   {
    //     address: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    //     avatar:
    //       "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg",
    //     email: "nannie_abernathy70@yahoo.com",
    //     id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
    //     lastActivity: "2023-01-06T05:45:36.446Z",
    //     name: "Jayvion Simon",
    //     phone: "365-374-4961",
    //     position: "UX Designer",
    //     status: "away",
    //     username: "jayvion.simon",
    //   },
    // ]);
    
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchSelect = (username) => {
    setSearchFocused(false);
    setSearchQuery("");
    // navigate(PATH_DASHBOARD.chat.view(username));
  };

  const handleSelectContact = (result) => {
    if (handleSearchSelect) {
      handleSearchSelect(result.username);
    }
  };

  const renderContent = (
    <>
      <Box sx={{ py: 2, px: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          {!isCollapse && (
            <>
              <ChatAccount />
              <Box sx={{ flexGrow: 1 }} />
            </>
          )}

          <IconButton onClick={handleToggleSidebar}>
            <Iconify
              width={20}
              height={20}
              icon={
                openSidebar
                  ? "eva:arrow-ios-back-fill"
                  : "eva:arrow-ios-forward-fill"
              }
            />
          </IconButton>
        </Stack>

        {!isCollapse && (
          <ChatContactSearch
            query={searchQuery}
            onFocus={handleSearchFocus}
            onChange={handleChangeSearch}
            onClickAway={handleClickAwaySearch}
          />
        )}
      </Box>

      <Scrollbar>
        {!displayResults ? (
          <ChatConversationList
            conversations={conversations}
            isOpenSidebar={openSidebar}
            activeConversationId={activeConversationId}
            sx={{ ...(isSearchFocused && { display: "none" }) }}
          />
        ) : (
          <ChatSearchResults
            query={searchQuery}
            results={searchResults}
            onSelectContact={handleSelectContact}
          />
        )}
      </Scrollbar>
    </>
  );

  return (
    <>
      {!isDesktop && (
        <ToggleButtonStyle onClick={handleToggleSidebar}>
          <Iconify width={16} height={16} icon={"eva:people-fill"} />
        </ToggleButtonStyle>
      )}

      {isDesktop ? (
        <Drawer
          open={openSidebar}
          variant="persistent"
          sx={{
            width: SIDEBAR_WIDTH,
            transition: theme.transitions.create("width"),
            "& .MuiDrawer-paper": {
              position: "static",
              width: SIDEBAR_WIDTH,
            },
            ...(isCollapse && {
              width: SIDEBAR_COLLAPSE_WIDTH,
              "& .MuiDrawer-paper": {
                width: SIDEBAR_COLLAPSE_WIDTH,
                position: "static",
                transform: "none !important",
                visibility: "visible !important",
              },
            }),
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          ModalProps={{ keepMounted: true }}
          open={openSidebar}
          onClose={handleCloseSidebar}
          sx={{
            "& .MuiDrawer-paper": { width: SIDEBAR_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}
