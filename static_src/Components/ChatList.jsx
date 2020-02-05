import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


export default class ChatList extends React.Component {
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
