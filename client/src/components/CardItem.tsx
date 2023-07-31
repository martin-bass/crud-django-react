import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  ButtonGroup,
  Button,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Post } from "../api/types";

//Instagram Embed
import { InstagramEmbed } from "react-social-media-embed";

//Components
import ModalAlertDelete from "./ModalAlertDelete";
import ModalUpgrate from "./ModalUpgrate";

interface Props {
  post: Post;
}

function CardItem({ post }: Props) {
  const { colorMode } = useColorMode();
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Card
      mx={{ base: 1, sm: 8 }}
      my={{ base: 4, sm: 8 }}
      bgColor={colorMode === "light" ? "gray.200" : "blackAlpha.500"}
    >
      <CardHeader>
        <Heading size="md" textAlign={"start"}>
          {post.name} has posted...
        </Heading>
      </CardHeader>
      <CardBody px={{ base: 1, sm: 4 }}>
        <InstagramEmbed url={post.post} />
        <ButtonGroup spacing="2">
          {/* MODAL UPGRATE */}
          <ModalUpgrate post={post} />
          {/* MODAL UPGRATE */}
          <Button
            id={`IDButton${post.id}`}
            variant="outline"
            colorScheme="red"
            onClick={onOpen}
          >
            Delete
          </Button>
        </ButtonGroup>
        <ModalAlertDelete post={post} isOpen={isOpen} onClose={onClose} />
      </CardBody>
    </Card>
  );
}

export default CardItem;
