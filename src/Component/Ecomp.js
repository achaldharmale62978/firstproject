import { UserConsumer } from "./UserContext";

const Ecomp = ()=>{
    return (
        <>
          
         <UserConsumer>
            {
                User=>{
                    return (
                        <>
                            <h2>Username : {User}</h2>
                        </>
                    )
                }
            }
         </UserConsumer>
        </>
    )
}
export default Ecomp;