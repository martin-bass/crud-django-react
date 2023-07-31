import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import { Post } from "../api/types";
import { updatePost, getPost } from "../api/posts.api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  post: Post;
}

function ModalUpgrate({ post }: Props) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { register, handleSubmit, setValue } = useForm();
  const [isRequired, setIsRequired] = useState(false);

  const onSubmit = handleSubmit(async (data: any) => {
    if (post.id) {
      if (data.post.startsWith("https://www.instagram.com/")) {
        await updatePost(Number(post.id), data);
        location.reload();
      } else {
        setIsRequired(true);
      }
    }
  });

  useEffect(() => {
    const loadPost = async () => {
      if (post.id) {
        const { data }: any = await getPost(Number(post.id));
        setValue("name", data.name);
        setValue("post", data.post);
      }
    };
    loadPost();
  }, []);

  return (
    <>
      <Button variant="outline" colorScheme="linkedin" onClick={onOpen}>
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update the {post.name}'s Post! </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* FORM */}
            <FormControl>
              <form onSubmit={onSubmit} id="update-form">
                <VStack alignItems={"start"}>
                  <FormLabel>Your Name:</FormLabel>
                  <Input
                    placeholder="Name"
                    type="text"
                    {...register("name", { required: true })}
                    required
                  />
                </VStack>
                <VStack pt={4} alignItems={"start"}>
                  <FormLabel>Copy your Instagram Post Link:</FormLabel>
                  <Input
                    placeholder="e.g. https://www.instagram.com/p/CuygJMepVpz/"
                    {...register("post", { required: true })}
                    required
                  />
                  {isRequired && (
                    <Text fontSize={12} color={"red.500"} ml={4}>
                      Please enter a valid URL
                    </Text>
                  )}
                </VStack>
                <Box display={"flex"} justifyContent={"center"}>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                    form="update-form"
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </FormControl>
            {/* FORM */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalUpgrate;
