import Acomp from "./Acomp"
import { UserProvider } from "./UserContext"


const ParentComp = ()=>{
    return (
        <>
        <h1>I am ParentComponent</h1>
        <UserProvider value="reg@gmail.com">
            <Acomp/>
        </UserProvider>
        
        </>
    )
}
export default ParentComp;