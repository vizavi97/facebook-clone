import React from 'react'
import {Box, Grid} from "@chakra-ui/core";
import {LeftSideBar} from "../components/pages/main/LeftSideBar";
import {RightSideBar} from "../components/pages/main/RightSideBar";
import {ProfileWall} from "../components/pages/main/ProfileWall";

interface MainProps {}

const styles = {
  container: {
    gridTemplateColumns: "4fr 7fr 4fr",
    gap: 0
  },
  fixed: {
    width: "100%",
    maxHeight: "calc(100vh - 68px)",
    overflow: "auto",
    top: 0,
    left: 0,
    paddingTop: "1rem"
  },
  middleSide: {
    width: "100%",
    padding: "1rem 2rem",
  }
}

export const Main :React.FC<MainProps> = ( ) => {
  return (
  <>
      <Grid {...styles.container}>
        <Box  position={"relative"}>
          <Box  style={styles.fixed}>
            <LeftSideBar/>
          </Box>
        </Box>
        <Box style={styles.middleSide}>
          <ProfileWall/>
        </Box>
        <Box position={"relative"}>
          <Box style={styles.fixed}>
            <RightSideBar/>
          </Box>
        </Box>
      </Grid>
  </>
  )
}
