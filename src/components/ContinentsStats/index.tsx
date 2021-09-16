import { Box, Icon, Text, Tooltip } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

interface ContinentsStatsProps {
    statsAmount: number;
    statsTitle: string;
    hasInfo?: boolean;
}

export default function ContinentsStats({ statsAmount, statsTitle, hasInfo = false, ...rest }: ContinentsStatsProps) {
    return (
        <Box>
            <Text
                fontWeight="600"
                fontSize={{ base: "24px", md: "48px" }}
                color="orange.900"
                textAlign="center"
            >
                {statsAmount}
            </Text>

            <Text
                fontWeight="600"
                fontSize={{ base: "18px", lg: "24px" }}
                color="gray.700"
            >
                {statsTitle} {hasInfo && (
                    <Tooltip label="Best cities" bg="gray.200" placement="top-end" shouldWrapChildren>
                        <Icon as={RiInformationLine} color="gray.500" w="16px" />
                    </Tooltip>
                )}
            </Text>
        </Box>
    )
}