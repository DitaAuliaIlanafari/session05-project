import { Button } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/react"

export default function Demo(){
    return(
        <div>
        <HStack>
            <Button width='60'>Click me</Button>
            <Button width='60'>Click me</Button>
        </HStack>
        </div>
    )
}