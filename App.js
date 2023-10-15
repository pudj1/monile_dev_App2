import {
    Alert,
    Box,
    Button,
    CloseIcon,
    HStack,
    Icon,
    IconButton,
    Input,
    NativeBaseProvider,
    Pressable,
    Text,
    VStack,
    Collapse
} from "native-base"
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function App() {
    const [show, setShow] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const usersArray = [
        { name: "John", password: 123 },
        { name: "Alice", password: 0 },
        { name: "Bob", password: 1 },
        { name: "Eve", password: 2 },
        { name: "Charlie", password: 3 },
        { name: "Sophia", password: 4 },
        { name: "Daniel", password: 5 },
        { name: "Olivia", password: 6 },
        { name: "Grace", password: 7 },
        { name: "James", password: 8 },
        { name: "Lily", password: 9 },
        { name: "Michael", password: 10 }
    ];

    function handleLogIn() {
        console.log(name,parseInt(password) )
        console.log(usersArray.some(user => user.name === name && user.password === parseInt(password)))
        if (usersArray.some(user => user.name === name && user.password === parseInt(password))){
            setIsError(false);
            setIsSuccess(true);
        }else {
            setIsError(true);
            setIsSuccess(false);
        }
    }
    console.log(name,password)
    return (

        <NativeBaseProvider>

            <Box  style={{
                flex:1,
                alignItems: "center",
                justifyContent: 'center'}}>

                <Input w={{base: "75%", md: "25%"}}
                       type={"text"}
                       value={name}
                       onChangeText={(text)=>setName(text)}
                       placeholder="Name"
                       InputLeftElement={<Icon
                                           as={<MaterialIcons name="person" />}
                                           size={5}
                                           ml="2"
                                           color="muted.400" />}
                       />

                <Input w={{base: "75%", md: "25%"}}
                       value={password}
                       onChangeText={(text)=>setPassword(text)}
                       m={"30px"}
                       type={show ? "text" : "password"}
                       InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                       size={5} mr="2" color="muted.400" />
                </Pressable>} placeholder="Password" />

                <Button onPress={handleLogIn} size={"lg"} w={"200px"}>Log In</Button>

                <Collapse isOpen={isSuccess}>
                <Alert  m={"10px"}  w="100%" status="success">
                    <VStack space={2} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={1} alignItems="center" justifyContent="space-between">
                            <HStack space={2} flexShrink={1} alignItems="center">
                                <Alert.Icon />
                                <Text fontSize="md" fontWeight="medium" _dark={{
                                    color: "coolGray.800"
                                }}>
                                    Successfully log In!
                                </Text>
                            </HStack>
                            <IconButton variant="unstyled" _focus={{
                                borderWidth: 0
                            }} icon={<CloseIcon size="3" />} _icon={{
                                color: "coolGray.600"
                            }} onPress={()=>setIsSuccess(prevState => {
                                if (prevState)
                                    return !prevState
                            })}/>
                        </HStack>
                        <Box pl="6" _dark={{
                            _text: {
                                color: "coolGray.600"
                            }
                        }}>
                            Your are successfully log In into the app!
                        </Box>
                    </VStack>
                </Alert>
                </Collapse>
                <Collapse isOpen={isError}>
                    <Alert  m={"10px"}  w="100%" status="error">
                        <VStack space={2} flexShrink={1} w="100%">
                            <HStack flexShrink={1} space={1} alignItems="center" justifyContent="space-between">
                                <HStack space={2} flexShrink={1} alignItems="center">
                                    <Alert.Icon />
                                    <Text fontSize="md" fontWeight="medium" _dark={{
                                        color: "coolGray.800"
                                    }}>
                                        Wrong password or name!
                                    </Text>
                                </HStack>
                                <IconButton variant="unstyled" _focus={{
                                    borderWidth: 0
                                }} icon={<CloseIcon size="3" />} _icon={{
                                    color: "coolGray.600"
                                }} onPress={()=>setIsError(prevState => {
                                    if (prevState)
                                        return !prevState
                                })}/>
                            </HStack>
                            <Box pl="6" _dark={{
                                _text: {
                                    color: "coolGray.600"
                                }
                            }}>
                                Please check your password or name!
                            </Box>
                        </VStack>
                    </Alert>
                </Collapse>
            </Box>
        </NativeBaseProvider>
    )
}
