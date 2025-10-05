import { Container } from "@/shared/components/ui/Container/";
import { Outlet } from "react-router";



function AppRoot() {
   return(
     <main>
        <Container>
            <Outlet />
        </Container>
    </main>
   )
}

export default AppRoot;