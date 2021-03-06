import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/action/account-circle';


export default class Header extends React.Component {
   static propTypes = {
       chatId: PropTypes.number,
   };

static defaultProps = {
       chatId: 1,
   };


   render() {
       return (
           <div className="header">
                <Link to='/profile/' style={ {
                    textAlign: 'right',
					display: 'flex',
                    alignItems: 'center',
					height: '50px',
                    width: '50px',
                } }>
                    <Avatar color='white' style={ {  marginleft: '10px', height: '50px',  width: '50px',  marginRight: 0,} } />
                </Link>
            </div>
       )
   }
}