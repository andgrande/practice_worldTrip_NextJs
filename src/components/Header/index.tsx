import { Flex, Icon, IconButton, Img, useColorMode, Link as ChakraLink } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex
          as="header"
          h={{ base: '50px', sm: '100px' }}
          py={{ sm: '25px'}}
          maxWidth={1920}
          mt="1"
          mx="auto"
          align="center"
          justify="center"
        >
          <ChakraLink href="/">
            <Img
              src='/assets/Logo.png'
              alt="Logo World Trip"
              w={{ base: '81px', sm: '184px' }}
              h={{ base: '20px', sm: '46px' }}
            />
          </ChakraLink>

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

