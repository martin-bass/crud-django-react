import { useForm } from "react-hook-form";
import { createPost } from "../api/posts.api";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function PostFormPage({ setOpenModal, openModal }: any) {
  const { register, handleSubmit } = useForm();
  const [isRequired, setIsRequired] = useState(false);

  const onSubmit = handleSubmit(async (data: any) => {
    if (data.post.startsWith("https://www.instagram.com/")) {
      await createPost({ ...data, done: true });
      setOpenModal(!openModal);
      location.reload();
    } else {
      setIsRequired(true);
    }
  });

  return (
    <FormControl>
      <form onSubmit={onSubmit} id="new-form">
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
          <Button mt={4} colorScheme="teal" type="submit" form="new-form">
            Submit
          </Button>
        </Box>
      </form>
    </FormControl>
  );
}

export default PostFormPage;
