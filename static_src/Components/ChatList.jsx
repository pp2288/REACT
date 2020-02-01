import React from 'react';
import { List, ListItem } from 'material-ui/List';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                <ListItem primaryText="Первый чат" leftIcon={<KeyboardArrowRightIcon />} />
                <ListItem primaryText="Второй чат" leftIcon={<KeyboardArrowRightIcon />} />
                <ListItem primaryText="....n" leftIcon={<KeyboardArrowRightIcon />} />
				<ListItem primaryText="nnnый чат" leftIcon={<KeyboardArrowRightIcon />} />
            </List>
        )
    }
}