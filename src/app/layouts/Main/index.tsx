import { Container } from "@/shared/components/ui/Container";
import { Outlet } from "react-router";



function MainLayout() {
   return(
     <main>
        <Container>
            <Outlet />
        </Container>
    </main>
   )
}

export default MainLayout;