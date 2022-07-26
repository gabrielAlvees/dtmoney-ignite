import { Summary } from "../Summary";
import { TransactionsTables } from "../TransactionsTables";
import { Container } from "./styles";

export const Dashboard = ()=>{
    return(
        <Container>
            <Summary/>
            <TransactionsTables/>
        </Container>
    );
}