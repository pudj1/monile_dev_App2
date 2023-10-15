import {Box, Button, Center, Input, NativeBaseProvider, Stack} from "native-base"
import React from "react";

export default function App() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow((prevState) => !prevState);

    return (
        <NativeBaseProvider>
            <Box style={{}}>
                <Input type={show ? "text" : "password"} InputRightElement={<Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>} placeholder="Password" />
                <Button size="lg" colorScheme="secondary" onPress={() => console.log("hello world")}>
                    Register
                </Button>
            </Box>
        </NativeBaseProvider>
    )
}
