import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data/index";
import {
  TimeLine,
  MediaMsg,
  DocMsg,
  Linkmsg,
  ReplyMsg,
  TextMsg,
} from "./MessageTypes";

const Message = () => {
  return (
    <Box p={2}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el} />;
                case "doc":
                  return <DocMsg el={el} />;
                case "link":
                  return <Linkmsg el={el} />;
                case "reply":
                  return <ReplyMsg el={el} />;
                default:
                  return <TextMsg el={el} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
