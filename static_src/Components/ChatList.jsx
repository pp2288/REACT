import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> master
import { List, ListItem } from 'material-ui/List';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


export default class ChatList extends React.Component {
<<<<<<< HEAD
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
=======
   render() {
       return (
           <List>
               <Link to="/chat/1/">
                   <ListItem primaryText="Chat 1" leftIcon={<KeyboardArrowRightIcon />} />
               </Link>
               <Link to="/chat/2/">
                   <ListItem primaryText="Chat 2" leftIcon={<KeyboardArrowRightIcon />} />
               </Link>
               <Link to="/chat/3/">
                   <ListItem primaryText="Chat 3" leftIcon={<KeyboardArrowRightIcon />} />
               </Link>
           </List>
       )
   }
}
>>>>>>> master
