import HeaderBanner from './images/HeaderImage.png';
import HeaderRuby from './images/Ruby.png';
import HeaderRubyCounter from './images/RubyCounterPlaceholder.png';
import SearchBarRectangle from './images/SearchBarRectangle.png';
import SearchBarIcon from './images/SearchBarIcon.png';
import ClockCircle from './images/ClockCircle.png';
import ClockHands from './images/ClockHands.png';
import FireIcon from './images/FireIcon.png';
import GroupIcon from './images/GroupIcon.png';
import BookmarkIcon from './images/BookmarkIcon.png';
import BellIcon from './images/BellIcon.png';
import ImageIconFace from './images/ImageIconFace.png';
import ImageIconBack from './images/ImageIconBack.png';
import CreatePostRectangle from './images/CreatePostRectangle.png';
import CreatePostPlusIcon from './images/CreatePostPlusIcon.png';
import PostRectangle from './images/PostRectangle.png';
import PostUpvote from './images/PostUpvote.png';
import PostDownvote from './images/PostDownvote.png';
import PostStudentTitle from './images/PostStudentTitle.png';
import PostReplyIcon from './images/PostReplyIcon.png';
import PostRepostIcon from './images/PostRepostIcon.png';
import PostSaveIcon from './images/PostSaveIcon.png';
import PostSendIcon from './images/PostSendIcon.png';
import CommunitiesRectangle from './images/CommunitiesRectangle.png';
import LeaderboardRectangle from './images/LeaderboardRectangle.png';
import LeaderboardTrophyIcon from './images/LeaderboardTrophyIcon.png';
import LeaderboardFirstMedal from './images/LeaderboardFirstMedal.png';
import LeaderboardSecondMedal from './images/LeaderboardSecondMedal.png';
import LeaderboardThirdMedal from './images/LeaderboardThirdMedal.png';
import DirectMessagesRectangle from './images/DirectMessagesRectangle.png';
import DirectMessagesArrowIcon from './images/DirectMessagesArrowIcon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div> {/* Header */}
        <img src={HeaderBanner} className="AppHeaderBanner" alt="Header Banner"/>
        <img src={HeaderRuby} className="AppHeaderRuby" alt="Ruby"/>
        <img src={HeaderRubyCounter} className="AppHeaderRubyCounter" alt="Ruby Counter"/>
        <img src={SearchBarRectangle} className="AppSearchBarRectangle" alt="Search Bar Rectangle"/>
        <img src={SearchBarIcon} className="AppSearchBarIcon" alt="Search Bar Icon"/>
      </div>
        <hr className="AppDividerLine"></hr>
      <div> {/* Search Bar and Tabs */}
        <span className="AppSearchBarText" style={{position: 'absolute', width: '196px', height: '36px', left: '889px', top: '129px'}}>
Search Anything
        </span>
        <img src={ClockCircle} className="AppClockCircle" alt="Clock Circle"/>
        <img src={ClockHands} className="AppClockHands" alt="Clock Hands"/>
        <span className="AppTabsFont" style={{position: 'absolute', width: '69px', height: '36px', left: '223px', top: '248px'}}>
NEW
        </span>
        <img src={FireIcon} className="AppFireIcon" alt="Fire Icon"/>
        <span className="AppTabsFont" style={{position: 'absolute', width: '64px', height: '36px', left: '385px', top: '248px'}}>
HOT
        </span>
        <img src={GroupIcon} className="AppGroupIcon" alt="Group Icon"/>
        <span className="AppTabsFont" style={{position: 'absolute', width: '110px', height: '36px', left: '542px', top: '248px'}}>
JOINED
        </span>
        <img src={BookmarkIcon} className="AppBookmarkIcon" alt="Bookmark Icon"/>
        <span className="AppTabsFont" style={{position: 'absolute', width: '98px', height: '36px', left: '745px', top: '248px'}}>
SAVED
        </span>
        <img src={BellIcon} className="AppBellIcon" alt="Bell Icon"/>
        <span className="AppTabsFont" style={{position: 'absolute', width: '217px', height: '36px', left: '936px', top: '248px'}}>
NOTIFICATION
        </span>
      </div>
      <div> {/* Posts */}
        <img src={CreatePostRectangle} className="AppCreatePostRectangle" alt="Create Post Rectangle"/>
        <img src={CreatePostPlusIcon} className="AppCreatePostPlusIcon" alt="Create Post Plus Icon"/>
        <img src={ImageIconFace} className="AppImageIconFace" alt="Post Icon Face"/>
        <img src={ImageIconBack} className="AppImageIconBack" alt="Post Icon Back"/>
        <span className="AppCreatePostFont" style={{position: 'absolute', width: '140px', height: '30px', left: '235px', top: '337px'}}>
Create Post
        </span>
        <img src={PostRectangle} className="AppPostRectangle" alt="Post Background" style={{top: '421px'}}/>
        <span className="AppPostTitle1" style={{top: '442px'}}>
Extracurriculars
        </span>
        <span className="AppPostTitle2" style={{top: '446px'}}>
Posted by Sharon Mitchell
        </span>
        <img src={PostStudentTitle} className="AppPostStudentTitle" alt="Student Title Background" style={{top: '446px'}}/>
        <span className="AppPostTitle3" style={{top: '446px'}}>
Student
        </span>
        <span className="AppPostTitle4" style={{top: '446px'}}>
5 minutes ago
        </span>
        <span className="AppPostBody" style={{top: '492px'}}>
Can anyone give me any tips on how to be a better softball player?
        </span>
        <img src={PostUpvote} className="AppPostUpvote" alt="Upvote" style={{top: '41.6%'}}/>
        <img src={PostDownvote} className="AppPostDownvote" alt="Downvote" style={{top: '51.6%'}}/>
        <span className="AppPostUpvoteCount" style={{top: '490px'}}>
16
        </span>
        <img src={PostReplyIcon} className="AppPostReplyIcon" alt="Reply Icon" style={{top: '52.66%'}}/>
        <span className="AppPostReply" style={{top: '569px'}}>
Reply
        </span>
        <img src={PostRepostIcon} className="AppPostRepostIcon" alt="Repost Icon" style={{top: '52.66%'}}/>
        <span className="AppPostRepost" style={{top: '569px'}}>
Repost
        </span>
        <img src={PostSaveIcon} className="AppPostSaveIcon" alt="Save Icon" style={{top: '52.66%'}}/>
        <span className="AppPostSave" style={{top: '569px'}}>
Save
        </span>
        <img src={PostSendIcon} className="AppPostSendIcon" alt="Send Icon" style={{top: '52.66%'}}/>
        <span className="AppPostSend" style={{top: '569px'}}>
Send
        </span>
        <img src={PostRectangle} className="AppPostRectangle" alt="Post Background" style={{top: '635px'}}/>
        <img src={PostUpvote} className="AppPostUpvote" alt="Upvote" style={{top: '61.42%'}}/>
        <img src={PostDownvote} className="AppPostDownvote" alt="Downvote" style={{top: '71.54%'}}/>
        <span className="AppPostUpvoteCount" style={{top: '704px'}}>
10
        </span>
        <img src={PostReplyIcon} className="AppPostReplyIcon" alt="Reply Icon" style={{top: '72.47%'}}/>
        <span className="AppPostReply" style={{top: '783px'}}>
Reply
        </span>
        <img src={PostRepostIcon} className="AppPostRepostIcon" alt="Repost Icon" style={{top: '72.47%'}}/>
        <span className="AppPostRepost" style={{top: '783px'}}>
Repost
        </span>
        <img src={PostSaveIcon} className="AppPostSaveIcon" alt="Save Icon" style={{top: '72.47%'}}/>
        <span className="AppPostSave" style={{top: '783px'}}>
Save
        </span>
        <img src={PostSendIcon} className="AppPostSendIcon" alt="Send Icon" style={{top: '72.47%'}}/>
        <span className="AppPostSend" style={{top: '783px'}}>
Send
        </span>
        <img src={PostRectangle} className="AppPostRectangle" alt="Post Background" style={{top: '849px'}}/>
        <img src={PostUpvote} className="AppPostUpvote" alt="Upvote" style={{top: '81.23%'}}/>
        <img src={PostDownvote} className="AppPostDownvote" alt="Downvote" style={{top: '91.36%'}}/>
        <span className="AppPostUpvoteCount" style={{top: '918px'}}>
8
        </span>
        <img src={PostReplyIcon} className="AppPostReplyIcon" alt="Reply Icon" style={{top: '92.29%'}}/>
        <span className="AppPostReply" style={{top: '997px'}}>
Reply
        </span>
        <img src={PostRepostIcon} className="AppPostRepostIcon" alt="Repost Icon" style={{top: '92.29%'}}/>
        <span className="AppPostRepost" style={{top: '997px'}}>
Repost
        </span>
        <img src={PostSaveIcon} className="AppPostSaveIcon" alt="Save Icon" style={{top: '92.29%'}}/>
        <span className="AppPostSave" style={{top: '997px'}}>
Save
        </span>
        <img src={PostSendIcon} className="AppPostSendIcon" alt="Send Icon" style={{top: '92.29%'}}/>
        <span className="AppPostSend" style={{top: '997px'}}>
Send
        </span>
      </div>
      <div> {/* Communities */}
        <img src={CommunitiesRectangle} className="AppCommunitiesRectangle" alt="Communities Tab Background"/>
        <span className="AppCommunitiesTitle">
POPULAR COMMUNITIES
        </span>
        <hr className="AppCommunitiesLine"/>
        <ol className="AppCommunitiesList">
          <li>College Applications</li>
          <li>Extracurriculars</li>
          <li>Homework Help</li>
        </ol>
      </div>
      <div> {/* Leaderboard */}
        <img src={LeaderboardRectangle} className="AppLeaderboardRectangle" alt="Leaderboard Tab Background"/>
        <span className="AppLeaderboardTitle">
Leaderboard
        </span>
        <img src={LeaderboardTrophyIcon} className="AppLeaderboardTrophyIcon" alt="Trophy Icon"/>
        <hr className="AppLeaderboardLine" style={{top:'731px'}}/>
        <img src={LeaderboardFirstMedal} className="AppLeaderboardFirstMedal" alt="First Medal"/>
        <span className="AppLeaderboardName" style={{top:'742px'}}>
John Doe
        </span>
        <span className="AppLeaderboardTime" style={{top:'751px'}}>
10h 1m
        </span>
        <hr className="AppLeaderboardLine" style={{top:'792.02px'}}/>
        <img src={LeaderboardSecondMedal} className="AppLeaderboardSecondMedal" alt="Second Medal"/>
        <span className="AppLeaderboardName" style={{top:'808px'}}>
John Doe
        </span>
        <span className="AppLeaderboardTime" style={{top:'817px'}}>
6h 10m
        </span>
        <hr className="AppLeaderboardLine" style={{top:'857.98px'}}/>
        <img src={LeaderboardThirdMedal} className="AppLeaderboardThirdMedal" alt="Third Medal"/>
        <span className="AppLeaderboardName" style={{top:'873px'}}>
John Doe
        </span>
        <span className="AppLeaderboardTime" style={{top:'883px'}}>
1h 1m
        </span>
        <hr className="AppLeaderboardLine" style={{top:'924.98px'}}/>
      </div>
      <div> {/* Direct Messages Drop Down (but it looks like it's supposed to go up not down) */}
      <img src={DirectMessagesRectangle} className="AppDirectMessagesRectangle" alt="Direct Messages Drop Down Background"/>
        <span className="AppDirectMessagesText">
Direct Messages
        </span>
        <img src={DirectMessagesArrowIcon} className="AppDirectMessagesArrowIcon" alt="Direct Messages Drop Down Arrow"/>
      </div>
    </div>
  );
}

export default App;
