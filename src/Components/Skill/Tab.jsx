import { Box, CircularProgress, Flex, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Circular from './Circular'

export const SkillTab= () => {
  return (
      <Flex justifyContent={"center"} minH="50vh" mb='4rem' border={'1px solid black'}>
          <Box  width={'100%'}  m="auto" mb='5rem' >
              <Tabs width={'80%'} m='auto' isFitted variant='enclosed' colorScheme="red" border={'1px solid red'}>
                  <TabList  w={{base:"70%",lg:"50%"}} m="3rem auto" display={"flex"} gap={10} justifyContent='center'>
                      <Tab >
                          <Text>FRONTEND</Text>
                      </Tab>
                      <Tab>
                          <Text>BACKEND</Text>
                      </Tab>
                  </TabList>
                  <TabPanels bg={'red.100'}>
                      <TabPanel >
                          <Grid border={'1px solid black'} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gridTemplateRows="auto" gap={{base:"2rem",md:"3rem",lg:"4rem"}}>
                              <GridItem>
                                   <Circular value={90} text={"90%"} color="blue" />
                                    <Text>HTML&CSS</Text>
                              </GridItem>
                              <GridItem>
                                   <Circular value={80} text={"80%"} color="green" />
                                    <Text>REACT</Text>
                              </GridItem>
                              <GridItem>
                                   <Circular value={85} text={"85%"} color="purple" />
                                    <Text>REDUX</Text>
                              </GridItem>
                              <GridItem>
                                   <Circular value={95} text={"95%"} color="cyan" />
                                    <Text>CHAKRA-UI</Text>
                              </GridItem>
                         </Grid>
                      </TabPanel>
                      <TabPanel>
                          <Grid gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap={{base:"2rem",md:"3rem",lg:"4rem"}}>
                              <GridItem>
                                   <Circular value={80} text={"80%"} color="green" />
                                    <Text>NODE JS</Text>
                              </GridItem>
                              <GridItem>
                                   <Circular value={90} text={"90%"} color="BROWN" />
                                    <Text>MONGO DB</Text>
                              </GridItem>
                              <GridItem>
                                   <Circular value={85} text={"85%"} color="purple" />
                                    <Text>EXPRESS</Text>
                              </GridItem>
                              <GridItem>
                                   <Circular value={90} text={"90%"} color="green" />
                                    <Text>MONGOOSE</Text>
                              </GridItem>
                         </Grid>
                      </TabPanel>
                  </TabPanels>
              </Tabs>
          </Box>
     </Flex>
  )
}
