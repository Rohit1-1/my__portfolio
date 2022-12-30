import { Box, Flex,  Image } from '@chakra-ui/react'
import React from 'react'

const Stats = () => {
  return (
    <Box marginTop={'5rem'}>
         <h2 style={{textAlign:'center',marginBottom:'4rem',textDecoration:'underline'}}>
          GitHub <span className="different">Stats</span>
        </h2>
      <Flex >
          <Box w="80%" display={"flex"} flexDirection='column' gap="1rem" margin={'auto'}  >
              <Flex gap="1rem"  justifyContent="center">
                <Box >
                <Image width={'100%'} src="https://github-readme-streak-stats.herokuapp.com/?user=rohit1-1&hide=smalltalk&theme=algolia&layout=compact" />
                </Box>
                  
                 <Box >
                 <Image width={'100%'} src="https://github-readme-stats.vercel.app/api?username=rohit1-1&show_icons=true&theme=algolia&count_private=true" />
                 </Box>
                 
              </Flex>
              <Box w="60%" margin={'auto'} display={'flex'}  justifyContent={"center"}> <Image width={'100%'}  src=" https://github-readme-stats.vercel.app/api/top-langs/?username=rohit1-1&hide=smalltalk&theme=algolia&layout=compact" /></Box>
          </Box>
    </Flex>
    </Box>
  )
}

export default Stats
