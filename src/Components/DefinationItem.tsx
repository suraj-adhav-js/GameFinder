import { Box, Heading } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props{
    team: string;
    children: ReactNode | ReactNode[];
}

const DefinationItem = ({team, children}: Props) => {
  return (
    <Box marginY={5}>
        <Heading as="dt" fontSize='md' color='gray.600'>{team}</Heading>
        <dd>{children}</dd>
    </Box>
  )
}

export default DefinationItem