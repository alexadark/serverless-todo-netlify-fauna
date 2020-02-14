import React from "react"
import { Container, Heading, Button, Flex } from "theme-ui"
export default props => (
  <Container>
    <Flex sx={{ flexDirection: "column", padding: 3 }}>
      <Heading as="h1">Get Stuff Done</Heading>
      <Button
        sx={{ marginTop: 2 }}
        onClick={() => {
          alert("click")
        }}
      >
        Log In
      </Button>
    </Flex>
  </Container>
)
