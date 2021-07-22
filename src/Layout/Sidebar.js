import React, {useState} from 'react';
import UserBox from '../components/UserBox'
import {
    BookmarksIcon,
    ExploreIcon,
    HomeIcon,
    ListsIcon,
    MessagesIcon,
    MoreIcon,
    NotificationsIcon,
    ProfileIcon,
  } from "../icons/Icon";
    import twitterLogo from "../images/twitter.png";
    import Sidelink from '../components/Sidelink';

  const sideLinks =[
      {
          name:"Home",
          icon:HomeIcon,
      },
      {
          name:"Explore",
          icon:ExploreIcon,
      },
      {
          name:"Notifications",
          icon:NotificationsIcon,
      },
      {
          name:"Message",
          icon:MessagesIcon,
      },
      {
          name:"Bookmarks",
          icon:BookmarksIcon,
      },
      {
          name:"Lists",
          icon:ListsIcon,
      },
      {
          name:"Profile",
          icon:ProfileIcon,
      },
      {
          name:"More",
          icon:MoreIcon,
      }
  ]
function Sidebar() {
    const [active, setActive] = useState("Home");
    const handleMenuItemClick = (name)=>{
        setActive(name);

    }
    return (
        <main className="h-screen sticky top-0 flex flex-col justify-between w-72">
            <div>
                <div className="mt-1 mb-4 ml-1 flex items-center justify-items-center w-12 h-12 rounded-full hover:bg-gray-lightest transform transition-colors duration-200">
                    <img src={twitterLogo} alt="twitter logo" className="w-12 h-12" />
                </div>
                <nav className="mb-4">
                    <ul>
                        {
                            sideLinks.map(({name,icon})=>{
                                return(
                                <Sidelink 
                                key={name}
                                name={name} 
                                Icon={icon} 
                                active={active}
                                onMenuItemClick = {handleMenuItemClick}
                                />
                                    
                                )
                            })
                        }
                    </ul>
                    <button className="bg-primary2-base hover:bg-primary2-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">Tweet</button>
                </nav>
                
            </div>
            <UserBox/>
        </main>
    )
}

export default Sidebar
