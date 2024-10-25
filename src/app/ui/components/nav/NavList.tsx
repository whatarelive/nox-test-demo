import { routes } from "../../routes/routes";
import { List, ListItem } from "@chakra-ui/react";
import { NavItem } from './NavItem'

export function NavList() {
    return (
        <List gap='5' >
            {
                routes.map(route => (
                    <ListItem key={ route.label }>
                        <NavItem route={ route }/>
                    </ListItem>
                ))
            }
        </List>
    )
}