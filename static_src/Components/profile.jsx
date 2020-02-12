import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default class Profile extends React.Component {
   render() {
       return (
           <div className="profile">
               <h1>Страница профиля</h1>
			   <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
			   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
			   nisi ut aliquip ex ea commodo consequat.
			   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offi</h6>
               <Link to='/'> В диалог </Link>
           </div>
       )
   }
}