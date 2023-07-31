import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  HStack,
} from "@chakra-ui/react";

//Chakra ICONS
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import PostFormPage from "../pages/PostFormPage";

//Logo
import logo from "../assets/logo.webp";

import { useState } from "react";

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openModal, setOpenModal] = useState(true);

  return (
    <Stack position={"fixed"} w={"full"} zIndex={2} boxShadow={"2xl"}>
      <Box
        bg={useColorModeValue("gray.100", "blackAlpha.800")}
        px={{ base: 1, sm: 10 }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <HStack>
              <Image src={logo} w={{ base: 10, sm: 12 }} alt="logo" />
              <Text
                fontSize={{ base: 10, sm: 16 }}
                textTransform={"uppercase"}
                fontWeight={"bold"}
              >
                Instagram Post App
              </Text>
            </HStack>
          </Link>
          <Box w={"full"} pr={{ base: 0, md: 32 }}>
            <Button
              onClick={onOpen}
              size={{ base: "xs", sm: "md" }}
              textTransform={"uppercase"}
              variant={"outline"}
              colorScheme="linkedin"
            >
              Upload
            </Button>
            {openModal && (
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Upload Your Post!</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <PostFormPage
                      setOpenModal={setOpenModal}
                      openModal={openModal}
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
            )}
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Stack>
  );
}
