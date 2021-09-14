import { Flex, Icon, IconButton, Img, useColorMode, Box } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex
          as="header"
          h={{ base: '50px', md: '100px' }}
          maxWidth={1920}
          mt="1"
          mx="auto"
          align="center"
          justify="center"
        >
          <Img
            src='/assets/Logo.png'
            alt="Logo World Trip"
            w={{ base: '81px', md: '184px' }}
            h={{ base: '20px', md: '46' }}
          />

          <IconButton
            aria-label="Switch color mode"
            icon={colorMode === "light" ? <Icon as={RiMoonLine} />: <Icon as={RiSunLine} />}
            fontSize="20"
            variant="unstyled"
            color="gray.300"
            onClick={toggleColorMode}
          />

        </Flex>
    )
}

